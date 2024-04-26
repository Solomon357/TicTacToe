import { useEffect, useState } from 'react';
import './App.css';
import Status from './Status';
import Square from './Square';
import Reset from './Reset';

function App() {
  // we will always start with player 1 (X)
  //im thinking some useStates to determine whether its player Xs or Os turn
  const [gameCondition, setGameCondition] = useState(1);
  const [player1Inputs, setPlayer1Inputs] = useState([])
  const [player2Inputs, setPlayer2Inputs] = useState([])
  const [player1Winner, setPlayer1Winner] = useState(false);
  const [player2Winner, setPlayer2Winner] = useState(false);
  const gridID = [1,2,3,4,5,6,7,8,9];


  useEffect(() => {
    const winningCombinations = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
      [1,4,7],
      [2,5,8],
      [3,6,9],
      [1,5,9],
      [3,5,7]
    ]

    const checkWinnner = () => {
      if(player1Inputs.length >= 3){
        for(const comb of winningCombinations){
          if(comb.every(elem => player1Inputs.includes(elem))){
            setPlayer1Winner(true)
            setGameCondition(3)
          }
        }
      } 
      
      if(player2Inputs.length >= 3){
        for(const comb of winningCombinations){
          if(comb.every(elem => player2Inputs.includes(elem))){
            setPlayer2Winner(true)
            setGameCondition(4)
          }
        }
      } 
    }

    const checkTie = () => {
      let items = document.querySelectorAll(".square")
      let itemsArr = Array.from(items)
      if(itemsArr.length !==0 && itemsArr.every(item => item.disabled)){
        setGameCondition(5)
      }
    }

    checkWinnner()
    checkTie()
    // console.log(player1Winner)
    // console.log(player2Winner)
  }, [player1Inputs, player2Inputs, player1Winner, player2Winner])


//  console.log(player1Inputs)
//  console.log(player2Inputs)

  return (
    <div id="article">
      <h1>Tic-Tac-toe!</h1>
      <div>
        <Status condition={gameCondition} player1Winner={player1Winner} player2Winner={player2Winner} />
      </div>


      <div className="grid-container">
        {gridID.map((pos) => {
          return(<Square id={pos} key={pos} condition={gameCondition} conditionHandler={setGameCondition} setPlayer1Inputs={setPlayer1Inputs} setPlayer2Inputs={setPlayer2Inputs}/>)
        })}
      </div>

      <Reset />
    </div>
  )
}

export default App;
