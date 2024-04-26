import PropTypes from 'prop-types';
// import { checkPropTypes } from 'prop-types';


const Status = ({ condition }) => {

  // some conditional rendering that shows text based off current condition in the game 
  //because i have multiple conditions I think status should be managed with a switch statement
  const displayText = () => {
    switch(condition){
      case 1:
        return(<p className="status"> Next player: X </p>)
      case 2:
        return(<p className="status"> Next player: O</p>)
      case 3:
        return(<p className="status"> Winner: X </p>)
      case 4:
        return(<p className="status"> Winner: O </p>)
      case 5:
        return(<p className="status"> Tie </p>)
      default:
        return(<p className="status"></p>)
    }
  }
  
  return (
    <>
      {
        displayText()
      }
    </>
  )
}

Status.propTypes = {
  condition: PropTypes.number
}

export default Status