module.exports = Object.freeze({

    SKILL_NAME : "Battle of Brains",
    ddbTableName : 'Battle-of-Brains',

    imagePath : 'https://s3.amazonaws.com/alexa-skills-content/battle-of-brains/display-images/{A}_img_{W}x{H}.png',
    backgroundImagePath : 'https://s3.amazonaws.com/alexa-skills-content/battle-of-brains/display-images/{A}_bg_{W}x{H}.png',


    MAIN_MESSAGE : "Say Play to start the game or Rules to know the rules.",
    REPROMPT : "What you want to do?",

    FALLBACK_MESSAGE_DURING_GAME : 'The Battle of Brains Game skill can\'t help you with that. Try guessing the answer for the question asked. Or Ask for clue. ',
    FALLBACK_REPROMPT_DURING_GAME : 'Try guessing the answer for the question asked. Or Ask for clue.',
    FALLBACK_MESSAGE_OUTSIDE_GAME : 'The Battle of Brains Game skill can\'t help you with that.  It will come up with a Battle, gives brief information, then asks set of questions. You can try Play to start the game or Rules to know the rules. What you want to do?',
    FALLBACK_REPROMPT_OUTSIDE_GAME : "Say Play to start the game or Rules to know the rules",

    GAME_RULES : [
        "Alright, let me guide you through the basics of game.",
        "Battle of Brains, is unique way of creating interest among kids about the historic Indain battles in the form of multi level based game.",
        "In each level, first you will be provided with a overview of the specific battle and test your knowledge by asking set 4 questions.",
        "If you answer correctly, u fetch 25 points. you can use clues to guess the answer. for each clue 10 points will be deducted from 25.",
        "you need to score atleast 50 points to proceed to next level. if you score 60 you get 1 star, for 80 u get 2 stars and for all answers at first guess u fetch 3 stars along with advancing to next level.",      
    ],
    GAME_RULES_REPROMPT : "Shall we start the game?",

    GAME_PLAY_REPROMPT : [
      "Please answer to the question",
      "Say clue if you do not know the answer"
    ],

    INPUT_DATA : [
        {
          "Battle": "Battle of Plassey",
          "Description": [
            "The Battle of Plassey took place at palashi on 23rd June 1757.",
            "Siraj ordered the company to stop their fortification activities. But the company carried on with their fortifications",
            "This led the Nawab to attack the British station in Calcutta in which they were beaten by the Nawab’s 3000-strong army",
            "Calcutta was occupied by the Nawab’s forces in June 1756 and the prisoners were kept in a dungeon in Fort William. This incident is called the Black Hole of Calcutta since only a handful of the prisoners survived the captivity where over a hundred people were kept in a cell meant for about 6 people",
            "Fort William and other British establishments in Calcutta had fallen into the hands of the Nawab",
            "When news of this reached Madras in August, they sent troops to win back the Bengal establishments of the British. Calcutta was recaptured in January 1757",
            "British east India company victory over the Nawab of Bengal and his French allies",
            "Siraj-ud-daulah was the last independent Nawab of Bengal who was betrayed by Mir Jaffar",
            "Mir Jafar was the commander-in-chief of Nawab’s army who was bribed by British to make no moves in war and defeat Nawab",
            "After this battle, British recaptured Calcutta and seized the initiative to capture the French fort of Chandernagar",
            "Mir Jaffar became the Nawab who was puppet in the hands of British"
          ],
          "Subquestion": [
            {
                "Question": "The city Plassey belongs to which state of India?", 
                "Answer": "West Bengal", 
                "Clues": [
                    "Damodar river is known as sorrow of this state",
                    "It's capital is Kolkata"
                ]
            },
            {
              "Question": "Name the cause for the Battle of Plassey",
              "Answer": "Black hole of calcutta incident",
              "Clues": [
                "It is related to small prison or dungeon",
                "This prison is in Fort Willaam"
              ]
            },
            {
              "Question": "Who is the commander-in-chief of British India?",
              "Answer": "Robert Clive",
              "Clues": [
                "Third commander-in-chief of British india",
                "Also known as clive of India"
              ]
            },
            {
              "Question": "Who is the predecessor of siraj-ud-daulah?",
              "Answer": "Alivardi Khan",
              "Clues": [
                "He won Battle of Burdwan against Maratha Empire",
                "His birth name was Mirza Muhammad Ali"
              ]
            }
          ]
        }
      ]
});
