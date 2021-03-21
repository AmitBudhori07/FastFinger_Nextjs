import React from 'react';
import formatTime from 'src/constants/formatTime';

function HighScore({scorelist}){
    const highscore = Math.max(...scorelist)
    const highscoreIndex = scorelist.indexOf(highscore)
   return(
       <>
        <div>
            <p className="high-score-text">Personal Best</p>
            <p className="high-score">{`Game ${highscoreIndex+1}: ${formatTime(highscore)}`}</p>
      </div>
      <style jsx>{`
          .high-score-text{
            color: #ff5155;
            font-size: 20px;
            padding-left: 10px;
            margin-bottom: 5px;
          }
         .high-score{
             color: yellowgreen !important;
             font-size: 22px;
         } 
        `}</style>
       </>
   )
}

export default HighScore;