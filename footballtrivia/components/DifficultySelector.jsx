import RandomButton from "./RandomButton";

export default function difficultySelector() {
 // const [isSpinning, setIsSpinning] = useState(false);



    const centre = 400 ;
    const radius = 300;
    const getPath = (startDeg,endDeg) => {
      const startRad = (Math.PI/180)*startDeg;
      const endRad = (Math.PI/180)* endDeg ;
      const x1 = centre + radius * Math.cos(startRad);
      const y1 = centre + radius * Math.sin(startRad);
      const x2 = centre + radius * Math.cos(endRad);
      const y2 = centre + radius * Math.sin(endRad) ;
      return `M ${centre} ${centre} 
      L ${x1} ${y1}
      A ${radius} ${radius} 0 0 1 ${x2} ${y2}
      Z` ;

    }

    function saveLevel (difficulty) {
        localStorage.setItem('mode', difficulty);
        
        window.location.href = "/questionPage";

    }

    

    return(
        

        <div className="difficultydiv" style={{
            display:'flex',
        alignContent: "center",
        justifyContent: 'center',
        height: '200vh', 
        
        }} 
                
        >
            <svg width='900' height='900'>

                  <path d={getPath(0,120)}
                  
                fill="red"

onClick={()=> saveLevel('hard') } /> 


               
                
 
  <text x="250" y="650" fontSize="32" fill="black" fontWeight="bold">Easy</text>

                 <path d={getPath(120,240)} fill="green"
 onClick={()=> saveLevel('easy') } />
 

                <path d={getPath(240,360)} fill="yellow"
                 onClick={()=> saveLevel('medium')}  />

   


            </svg>


 
 


<div className="spin" style={{
  

  }
}>



</div>


<div id="RandomButton">

<button styles = {{
    
    
}}
 onClick= {() => {

  alert(" Spin incoming");


        
    }

    }

>
    Random
</button>


</div>






       </div>
    );
}
