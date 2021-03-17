import React, { useState } from 'react';
import GameHeader from 'src/components/gameHeader';
import GameArea from 'src/containers/gameArea';
import {useUser} from 'data/useUser';
import Layout from 'src/containers/layout';
import {getWords} from 'service/userApi';
import {getWordStore} from 'src/constants/getNewWords';


 export async function getStaticProps() {
  const {words} = await getWords('https://fast-finger-nextjs-amitbudhori07.vercel.app/api/game/words');
  let easyWords = [], mediumWords = [], hardWords = [];
 for (const word of words) {
    switch(word.type){
      case "easy": 
       easyWords.push(word.words);
       break;
      case "medium": 
       mediumWords.push(word.words);
       break;
      case  "hard": 
       hardWords.push(word.words);
       break
       default:
        easyWords.push(word);
        break;
    }
  } 

  return {
    props: { easy: easyWords, medium
      : mediumWords, hard: hardWords }
  }
}

function Game(props) {
  getWordStore(props);
 
  const { user } = useUser({ redirectTo: '/' })
  const [isGameOver,setIsGameOver] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const onGameover = () => {
    setIsGameOver(true);
  }

  const clearState = () => {
    setIsGameOver(false);
    setFinalScore(false);
  };  

  if (!user || user.isLoggedIn === false) {
    return <h1 style={{color:"red"}}>Loading</h1>
 }
  return (
    <Layout title="Game">
     <GameHeader isGameOver={isGameOver} setFinalScore={setFinalScore}/>
     <GameArea isGameOver={isGameOver} finalScore={finalScore} onGameover={onGameover} clearState={clearState}/>
    </Layout>
  );
}

export default Game;