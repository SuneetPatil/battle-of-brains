module.exports = Object.freeze({

    SKILL_NAME : "Battle of Brains Game",
    ddbTableName = 'Battle-of-Brains',

    MAIN_MESSAGE : "Say Play to start the game or Rules to know the rules",
    REPROMPT : "What you want to do?",

    FALLBACK_MESSAGE_DURING_GAME : `The ${SKILL_NAME} skill can't help you with that. Try guessing the answer for the question asked. Or Ask for clue. `,
    FALLBACK_REPROMPT_DURING_GAME : 'Try guessing the answer for the question asked. Or Ask for clue.',
    FALLBACK_MESSAGE_OUTSIDE_GAME : `The ${SKILL_NAME} skill can't help you with that.  It will come up with a Battle, gives brief information, then asks set of questions. You can try answering or Ask for clue. ${REPROMPT}`,
    FALLBACK_REPROMPT_OUTSIDE_GAME : `${MAIN_MESSAGE}`,

});
