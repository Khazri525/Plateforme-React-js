//import { Title } from '@material-ui/icons'
import React, { Fragment  } from 'react'
//import {Helmet} from 'react-helmet';
import "./Quiz.css"
import { useEffect } from 'react';
import { useState } from 'react';


function Quiz() {
    const [duree, setDuree] = useState(); 
    const url = 'http://localhost:8000/api/question/';
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => {setQuestions([...res.questions].map((question) => ({ 
			id: question.id,
            question: question.question,
            duree: question.duree,
            
        }))); setDuree(res.duree)})
    }, [])
    useEffect(() => {
		setInterval(() => {setDuree(duree => duree -1)}, 1000)
	},[])


    

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			console.log(questions?.map(item => item.id).join("|"))
			console.log(questions)
			var b = new Date()
			console.log(b.toISOString().slice(0,b.toISOString().length-5).split("T").join(" "))

		}
	};

  return (
    <div>
        <Fragment> 
{/* <Helmet> */}
              <title>            
                  Quiz page
                  </title>  
                {/* </Helmet> */}
                
                <div className='questions'>
                { <div className='question-count'>
							<span className='ques'>Question {currentQuestion + 1}</span>/{questions.length}
						</div> }
                <h4>Quiz mode</h4>
                    <div className="lifeline-container">
          
                        <img style={{width:"30px",marginLeft:"28cm"}}  src='../../dist/img/bulb.png'/>5<span style={{marginLeft:"30cm"}} className='lifeline'></span>
                        

                    </div>
                     <div className='timer-container'>
                        <p>
                            
                            <span><span className='lifeline'>
                            <br/>
                            <img  style={{width:"30px"}} src="../../dist/img/time.png" /> </span> </span>
                        </p>
                    </div>
                    {showScore ? (
				<div className='score-section'>
					user {localStorage.getItem("cin")} scored {score} out of {questions.length}
				</div>
			) : (
				<>
                    
                   <div className='questionsection' > {questions[currentQuestion]?.question} <h3></h3> </div> 
                    <div className='options-container'>
                        <p className='option' ></p>
                        <p className='option'></p>
                        <p className='option' ></p>
                        <p className='option'></p>
                    </div>
                    </>
                    	)}
                    <div className='button-container'>
                        <button>précédent</button>
                        <button>quitter</button>
              
                    </div>
                    </div> 
                    
          
        </Fragment>
        
    </div>
    
  )
}

export default Quiz