/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');
const ddbAdapter = require('ask-sdk-dynamodb-persistence-adapter'); 

const input = require('./input');


const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.session.new ||
      handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  async handle(handlerInput) {
    const attributesManager = handlerInput.attributesManager;
    const responseBuilder = handlerInput.responseBuilder;

    const attributes = await attributesManager.getPersistentAttributes() || {};
    if (Object.keys(attributes).length === 0) {
      attributes.endedSessionCount = 0;
      attributes.level = 1;
      attributes.gamesPlayed = 0;
      attributes.gameState = 'ENDED';
    }
    attributesManager.setSessionAttributes(attributes);

    let reprompt = input.MAIN_MESSAGE+'. '+input.REPROMPT;
    let speechOutput = 'Welcome';
    if(attributes.gamesPlayed > 0){
      speechOutput += ' back to '+input.SKILL_NAME+`.  You have played ${attributes.gamesPlayed.toString()} times and currently your in Level ${attributes.level.toString()}.`;
    }else{
      speechOutput += ' to '+input.SKILL_NAME+'.';
    }
    speechOutput += ' '+reprompt;
    
    return responseBuilder
      .speak(speechOutput)
      .reprompt(reprompt)
      .withSimpleCard('Battle of Brains', speechOutput)
      .getResponse();
  },
};

const RulesIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'RulesIntent';
  },
  handle(handlerInput) {
    const speechText = 'Your in Rules Intent';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Battle of Brains - Rules', speechText)
      .getResponse();
  },
};

const PlayIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'PlayIntent';
  },
  handle(handlerInput) {
    const speechText = 'Wait. I will update you the question';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Battle of Brains - Play Mode', speechText)
      .getResponse();
  },
};

const CluesIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'CluesIntent';
  },
  handle(handlerInput) {
    const speechText = 'Your in Clues Intent';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Battle of Brains - Clues', speechText)
      .getResponse();
  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = input.main_message+'. '+input.reprompt;

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Battle of Brains - Help', speechText)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Goodbye!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Battle of Brains', speechText)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

const FallbackHandler = {
  canHandle(handlerInput) {
    // handle fallback intent, yes and no when playing a game
    // for yes and no, will only get here if and not caught by the normal intent handler
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest' &&
      (request.intent.name === 'AMAZON.FallbackIntent' ||
        request.intent.name === 'RulesIntent' ||
        request.intent.name === 'PlayIntent' ||
        request.intent.name === 'CluesIntent');
  },
  handle(handlerInput) {
    const attributesManager = handlerInput.attributesManager;
    const sessionAttributes = attributesManager.getSessionAttributes();

    if (sessionAttributes.gameState &&
      sessionAttributes.gameState === 'STARTED') {
      // currently playing
      return handlerInput.responseBuilder
        .speak(input.FALLBACK_MESSAGE_DURING_GAME)
        .reprompt(input.FALLBACK_REPROMPT_DURING_GAME)
        .getResponse();
    }

    // not playing
    return handlerInput.responseBuilder
      .speak(input.FALLBACK_MESSAGE_OUTSIDE_GAME)
      .reprompt(input.FALLBACK_REPROMPT_OUTSIDE_GAME)
      .getResponse();
  },
};

function getPersistenceAdapter(tableName) {
  // Determines persistence adapter to be used based on environment
  // Note: tableName is only used for DynamoDB Persistence Adapter
  if (process.env.S3_PERSISTENCE_BUCKET) {
    // in Alexa Hosted Environment
    // eslint-disable-next-line global-require
    const s3Adapter = require('ask-sdk-s3-persistence-adapter');
    return new s3Adapter.S3PersistenceAdapter({
      bucketName: process.env.S3_PERSISTENCE_BUCKET,
    });
  }

  // Not in Alexa Hosted Environment
  return new ddbAdapter.DynamoDbPersistenceAdapter({
    tableName: tableName,
    createTable: true,
  });
}

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .withPersistenceAdapter(getPersistenceAdapter(input.ddbTableName))
  .addRequestHandlers(
    LaunchRequestHandler,
    RulesIntentHandler,
    PlayIntentHandler,
    CluesIntentHandler,
    FallbackHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();