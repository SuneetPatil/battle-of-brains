# Battle-of-Brains
Alexa skill Battle-of-Brains created for hackathon to demonstrate voice based games for screen-less and screened devices (APL) using Alexa.

# Brief Demonstrating Skill: 
  **Demo Video:** YouTube Link
  
  We have observed that Kids of this generation spend lots and lots of time in social media to explore new things. They are even found of games than studies. So, most of Educational institutes are finding a way in making kids explore the education in the form of games and videos.

We are building an Alexa skill "Battle of Brains, which is unique way of creating interest among kids about the historic Indian battles and making them explore them in the form of multi-level voice first game.

In each level, first user will be provided with an overview of the specific battle and test their knowledge by asking set 4 questions. 
* If they answer correctly, they fetch 25 points. they can use clues to guess the answer. for each clue 10 points will be deducted from 25.
*	They need to score at least 50 points to proceed to next level. 
*	If they score 60 you get 1 star, for 80 they get 2 stars and for all answers at first guess they fetch 3 stars along with advancing to next level.

### Main Features:
*	It is Multimodal Voice first game which supports both screen based and screen less devices.
*	Recognize the users who use the skill a lot with personalized custom messages.
*	Exploring the ancient historic wars using simple voice commands.
*	Store all the user progress using sessions and storing in database
*	Creating interest among users by creating the game in multiple levels, giving badges for users who answer faster and correctly and creating leader boards.

![alt Architecture](https://github.com/SuneetPatil/battle-of-brains/blob/master/Screenshots/Architecture.png) 

# To Use This Code:
1. Update your src/index.js file.

# Sample Conversation:
 
    User: Alexa, Launch Battle of Brains.
    Alexa: {Greetings} + Say Play to start the game or Rules to know the rules.
    User: Rules
    Alexa: {Tells rules} + Shall we start the game?
    User: Yes
    Alexa: {Brief introduction about the battle} + {Askes question}
    User: Clue
    Alexa: {Tells clue}
    User: {Tells right answer}
    Alexa: Thats correct answer.

# License :
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/SuneetPatil/battle-of-brains/blob/master/LICENSE) file for details.
