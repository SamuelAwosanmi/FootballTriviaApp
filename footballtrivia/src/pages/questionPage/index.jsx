import { useEffect, useState } from "react"
import { easyQuestions } from "@/questionTypes/easyQuestions"
import { mediumQuestions } from "@/questionTypes/mediumQuestions";
import { hardQuestions } from "@/questionTypes/hardQuestion";
export default function QuestionPage() {
   
 
    

    const [difficultyLevel, setDifficultyLevel] = useState("")
    const [current, setCurrent] = useState(0);
    const easy = easyQuestions; 
    const medium = mediumQuestions;
    const hard = hardQuestions;
    const [selectiveLevels, setLevel] = useState([]);
    const [currentOption, setOption] = useState();
    
   
    useEffect(()=>{
        const level = localStorage.getItem("mode")
        if(level === "easy"){
setLevel(easyQuestions);
console.log(selectiveLevels)
        } else if ( level === "medium"){
setLevel(mediumQuestions);
        } else if (level === "hard" ){
setLevel(hardQuestions);
  } else {
            alert("You have not selected a difficulty option. Please select an option!");
        }
        //console.log(easy);
        
        setDifficultyLevel(level);
    alert(level);
   }, [])
   useEffect(()=> {
    console.log(selectiveLevels, "log")

    } ,[selectiveLevels])
     
    const currentQuestion = selectiveLevels[current];

   const updateQuestion = (newValue) => {
       setLevel(prevLevels=> {
        const newLevels = [...prevLevels];
        newLevels[1] = newValue
        return newLevels;
       
       })
    }


return(
   <div>

 <div className="layout-container" style={{
    display: 'grid',
    gridTemplateColumns: '1fr ',
    placeItems: 'center',
    height: '100vh',
    width: '100vh',
    gap:'20px',

 }}>

    

<div id="question" style={{
    gridColumn: '1/-1',
    textAlign: 'center',
    marginTop: '70px',
}}>




          <h1>{currentQuestion?.question || "Loading..."}</h1>



</div> 


<div
  id="options"
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto auto',
    gap: '20px',
    padding: '15px',
    alignItems: 'center',
    justifyContent: 'center',
    placeItems: 'center',
    width: '100%',
    height: '100%',
  }}
>
  <button
    onClick={() => {
      if (current < selectiveLevels.length - 1) {
        setCurrent(current + 1);
      } else {
        alert("This is the final question!");
      }
    }}
    style={{ backgroundColor: 'white', height: '100px', width: '200px', color: 'black' }}
  >
    Next
  </button>

  <button
    onClick={() => {
      if (current > 0) {
        setCurrent(current - 1);
      }
    }}
    style={{ marginTop: '20px', backgroundColor: 'white', height: '100px', width: '200px', color: 'black' }}
  >
    Back
  </button>
{currentQuestion?.options?.map((option, index) => (
 <button key={index}>{option}</button>
  ))}
</div>





<div id="progress-bar" style={{
   placeItems: 'center',

}}>

<progress value='10' max='100' style={{
   
}}></progress>


</div>

 </div>



    </div>
)

}