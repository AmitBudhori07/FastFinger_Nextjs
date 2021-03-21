# Fast Fingers

 **Fast fingers** is a ultimate typing game which helps in your improving typing skills.

## Instructions

1. Players need to login to their account if they have otherwise create new account by clicking on sign Up button.
2. Players are asked to select the difficulty level during sign-in that are Easy, Medium, Hard level.
3. Start the game on `START GAME` button click.
4. Player suppose to type a random word from the dictionary on the input box on the game Screen within the time frame.

- For `EASY` difficulty level, word length will be less than or equal to 4.
- For `MEDIUM` difficulty level, word length will be between 5-8(noth numbers included).
- For `HARD` difficulty level, word length will be greater than 8.

5. As soon as the typed word matches the word shown on screen, it should we considered submitted (pressing "ENTER" button shall not be required to submit a word).

6. A timer shall be shown on the screen for every word and the maximum time that an user is allowed to type a word will depend on the difficulty factor given by following formula :

Timer value = (Number of letters in the word) / (Difficulty factor)

Initially the difficulty factor would be 1 if suppose player selected easy level and it will keep increasing as the player progresses in the game and the timer value is guaranteed to be greater than or equal to 2 seconds that means a player must get at least 2 seconds to type a word.

7. There are three levels in game: EASY, MEDIUM and HARD

Difficulty factor for easy level: 1

Difficulty factor for medium level: 1.5

Difficulty factor for hard level: 2

8. Difficulty factor will be increased by 0.01 after every successful word attempt.

9. Game level will be changed if difficulty factor crosses particular levels difficulty factor and will be reflected to player.
10. Player can able to stop the game by clicking on `LOGOUT` button
11. **Game score for the player is the total time player was able to remain in the game before game gets over either because his/her time runs out for a particular word or player Stops the game**.
12. Previous games score for player is shown in the sidebar along with best score


**Game Link -** https://fast-finger-nextjs-git-main-amitbudhori07.vercel.app/

## Tech stack
- Next JS, React JS
- HTML, CSS, JavaScript
- Bootstrap
- Node JS
- Express JS
- SWR 
- Postgres Database
