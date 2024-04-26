import { useState } from "react"
import PropTypes from 'prop-types';


const Square = ({ id, condition, conditionHandler, setPlayer1Inputs, setPlayer2Inputs }) => {
  const [playerValue, setPlayerValue] = useState("")
  const player = ["X", "O"]

  const changeStatus = (e) => {
    let pos = +e.target.id
    if(condition === 1){
      setPlayerValue(player[0])
      setPlayer1Inputs(player1Inputs => ([...player1Inputs, pos]))
      e.currentTarget.disabled = true
      conditionHandler(2);
    } else if (condition === 2){
      setPlayerValue(player[1])
      setPlayer2Inputs(player2Inputs => ([...player2Inputs, pos]))
      e.currentTarget.disabled = true
      conditionHandler(1);
    }

    
  }
  
  //console.log(condition)
   
  return (
    <button className="square" id={id} onClick={changeStatus}>{playerValue}</button>
  )
}

Square.propTypes = {
  id: PropTypes.number,
  condition: PropTypes.number,
  conditionHandler: PropTypes.func,
  setPlayer1Inputs: PropTypes.func,
  setPlayer2Inputs: PropTypes.func
}

export default Square