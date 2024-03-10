import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import QuestionList from './QuestionList'
import { useState } from 'react'

const Questionnaire = () => {

    const navigate = useNavigate()

    const [choiceOne, setChoiceOne] = useState(0)
    const [choiceTwo, setChoiceTwo] = useState(0)
    const [choiceThree, setChoiceThree] = useState(0)
    const [choiceFour, setChoiceFour] = useState(0)

    const handleChangeOne = () => {
        setChoiceOne((choiceOne) + 1)
        console.log(`Choice One was picked ${(choiceOne) + 1} times`)
    }

    const handleChangeTwo = () => {
        setChoiceTwo((choiceTwo) + 1)
        console.log(`Choice Two was picked ${(choiceTwo) + 1} times`)
    }

    const handleChangeThree = () => {
        setChoiceThree((choiceThree) + 1)
        console.log(`Choice Three was picked ${(choiceThree) + 1} times`)
    }

    const handleChangeFour = () => {
        setChoiceFour((choiceFour) + 1)
        console.log(`Choice Four was picked ${(choiceFour) + 1} times`)
    }

     const handleClick = () => {
        if(choiceOne > choiceTwo && choiceOne > choiceThree && choiceOne >choiceFour){
            navigate('/stemResultsPage')
        } else if(choiceTwo > choiceOne && choiceTwo > choiceThree && choiceTwo > choiceFour){
            navigate('/literatureArtsResultsPage')
        } else if(choiceThree > choiceOne && choiceThree > choiceTwo && choiceThree > choiceFour){
            navigate('/businessResultsPage')
        } else if(choiceFour > choiceOne && choiceFour > choiceTwo && choiceFour > choiceThree){
            navigate('/designResultsPage')
        }
    }

  return (
    <>
    <Navbar />
    <QuestionList 
        handleChangeOne={handleChangeOne} 
        handleChangeTwo={handleChangeTwo}
        handleChangeThree={handleChangeThree}
        handleChangeFour={handleChangeFour}
    />
    <div className='mt-4 flex justify-center'>
                <button onClick={handleClick} className="rounded-md bg-[#32CD32] w-44 h-12 p-2 text-center">
                    Submit
                </button>
    </div>
    </>
  )
}

export default Questionnaire