import { useEffect, useState } from "react";
import { easyQuestions } from "@/questionTypes/easyQuestions";
import { mediumQuestions } from "@/questionTypes/mediumQuestions";
import { hardQuestions } from "@/questionTypes/hardQuestion";
import Football from "../../../components/football";
import styles from "../../styles/Question.module.css";

export default function QuestionPage() {

 


  const [difficultyLevel, setDifficultyLevel] = useState("");
  const [current, setCurrent] = useState(0);
  const [selectiveLevels, setLevel] = useState([]);
  const [currentOption, setOption] = useState();
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [Answered, setToAnswered] = useState(false);
  const [Correct, setCorrect] = useState(false);



<Football/>

  const positiveFeedbackMessages = [
    " Correct! Well done click Next to move on to the next question.",
    "Spot on! Keep it up.",
    "Correct! Keep on going.",
  ]

  const negativeFeedbackMessages = [
    "Not quite, give it another try.",
    "Incorrect, try agin.",
    "Try again.",
  ]

  useEffect(() => {
    const level = localStorage.getItem("mode");
     console.log(styles);
    if (level === "easy") {
      setLevel(easyQuestions);
    } else if (level === "medium") {
      setLevel(mediumQuestions);
    } else if (level === "hard") {
      setLevel(hardQuestions);
    } else {
      alert("You have not selected a difficulty option. Please select an option!");
    }

    setDifficultyLevel(level);
    alert(level);
  }, []);
 
  useEffect(() => {
    console.log(selectiveLevels, "log");
  }, [selectiveLevels]);

  const currentQuestion = selectiveLevels[current];

  const updateQuestion = (newValue) => {
    setLevel((prevLevels) => {
      const newLevels = [...prevLevels];
      newLevels[1] = newValue;
      return newLevels;
    });
  };



  return (

     
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto auto auto",
        justifyItems: "center",
        alignItems: "start",
        height: "100vh",
        width: "100vw",
        padding: "40px",
        boxSizing: "border-box",
        gap: "30px",
        backgroundColor: '#FFF7ED',
        color: '#1F2937',

      }}
    >

       
      
      <div id="question" style={{ textAlign: "center" }}>
        <h1>{currentQuestion?.question || "Loading..."}</h1>
      </div>

    
      <div
        id="options"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          height: '100%',
          width:'100%',
          marginBottom: '100px',
          paddingBottom: '50px'

        }}
      >
        {currentQuestion?.options?.map((option, index) => (
          <button 
          className={styles.questionCard}
          key={index}
                 

         
          onClick={() => {
           
            
            if(!Correct){

              if (option === currentQuestion.correctAnswer){
                setScore(score + 1);
               const randomIndex = Math.floor(Math.random() * positiveFeedbackMessages.length);
                setFeedback(positiveFeedbackMessages[randomIndex]);
                setCorrect(true);
            } else {
                const randomIndex = Math.floor(Math.random() * positiveFeedbackMessages.length);
                setFeedback(negativeFeedbackMessages[randomIndex]);
                setCorrect(false);
            }
           
            setToAnswered(true);
            
             
        }
        }}
        //   style={{ padding: "15px 20px",
        //      color: 'gold',
        //     backgroundColor: '#1E1E3C',
        //    }}
           >
            {option}


          </button>
                           
        ))}
                       
      </div>

     

     
   

      <p style={{fontSize: '50px',
                  fontWeight: 'bold',
                  color: 'gold',

        }}>Score: {score}</p>
     
     
     
     
     
       <div id="feedback" style={{
                           display: "flex",
                           justifyContent: "center",
                            alignContent: "center",
                            alignItems: "center",
                            

                        }}>
                         <p style={{
                            
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: positiveFeedbackMessages.includes(feedback)  ? "green" : "red",
                            

                         }}>{feedback}</p>
                         </div>

     
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <button
          onClick={() => {
            if (current > 0) {
              setCurrent(current - 1);
            }
          }}
          style={{
            backgroundColor: "white",
            height: "60px",
            width: "150px",
            color: "black",
            backgroundColor: '#EF4444'
          }}
        >
          Back
        </button>

       

        <button
          onClick={() => {
           if(Correct){
          if (current < selectiveLevels.length - 1) {
            setCurrent(current + 1);
            setToAnswered(false);
            setFeedback("");
            setCorrect(false);
            } else {
                             alert("This is the final question!");
            }


            }
       
            else{  
                alert("Please select the correct answer before moving on.");

            }
         }}
     style={{
            backgroundColor: "white",
            height: "60px",
            width: "150px",
            color: "black",
            backgroundColor: '#EF4444'
          }}
        >
          Next
        </button>
      </div>

      
      <div style={{ marginTop: "20px",
        backgroundColor: '#EF4444'
       }}>
        <progress value={((current + 1) / selectiveLevels.length) * 100} max="100" />
      </div>
    </div>
  );
}
