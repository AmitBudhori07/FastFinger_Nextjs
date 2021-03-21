import React from 'react';
import formatTime from 'src/constants/formatTime';

function ScoreList({ scorelist}) {
        const startIndex = Math.max(scorelist.length - 8, 0)
        const scores = [...new Array(startIndex).fill(0),...[...scorelist].slice(startIndex)]

        const scoresList = scores.map((score, i) => (
        <div key={i}>
           {score ?<p className="text-white">{`Game ${i + 1}: ${formatTime(
                score
            )}`}</p>:null}
        </div>
    ));
    return scoresList;
}


export default ScoreList;
