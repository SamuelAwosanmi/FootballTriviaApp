import { useEffect, useState } from "react"
import { easyQuestions } from "@/questionTypes/easyQuestions"
import { mediumQuestions } from "@/questionTypes/mediumQuestions";
import { hardQuestions } from "@/questionTypes/hardQuestion";


export default function QuestionPage() {
   

    

    const [difficultyLevel, setDifficultyLevel] = useState("")
    const [current, setCurrent] = useState(0);
    const easy = easyQuestions[current]; 
    const medium = mediumQuestions[current];
    const hard = hardQuestions[current];

    
   
    useEffect(()=>{
        const level = localStorage.getItem("mode")
        setDifficultyLevel(level);
    alert(level);
   }, [])

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

<h1>{easy.question}</h1>


</div> 


<div id="options" style={{
    display:'grid',
    gridTemplateColumns: '1fr 1fr ',
    gridTemplateRows:'auto auto ',
    gap:'20px',
    padding: '15px',
    alignItems:'center',
    justifyContent: 'center',
    placeItems: 'center',
    width: '100%',
    height: '100%',
}}>

<button onClick={() => {
    if (current < easyQuestions.length - 1) {
        setCurrent(current + 1);
    } else {
        alert("This is the final question!");
    }
}} style={{marginTop: '20px', backgroundColor: 'white', height: '100px', width: '200px', color: 'black',}}>Next</button>

<button onClick={() => {
    if (current => 0){
        setCurrent(current - 1);
    }
}} style={{marginTop: '20px', backgroundColor: 'white', height: '100px', width: '200px', color: 'black',}}>Back</button>


{easy.options.map((option, index) => (
    <button
    key={current}
    style={{
        gridColumn: (index % 2) + 1,
        gridRow: Math.floor(index/2) + 1,
        borderRadius: '25px',
        width: '100%',
        height: '100%',
        backgroundColor: 'ffffff',
        color: 'black',
        textAlign: 'center',

    }}
    >
        {option}
    </button>
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