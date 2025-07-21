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
        
<div id="layout-container"
style={{
  height: '100vh',
  width: '100vw',
}}>
        <div className="difficultydiv" style={{
            display:'flex',
        alignContent: "center",
        justifyContent: 'center',
        height: '100vh', 
        
        }} 
                
        >
            <svg width='100%' height='100%' viewBox="0 0 800 800">

                  <path d={getPath(0,120)}
                  
                fill="red"
                

    
onClick={()=> saveLevel('hard') } 


/> 


               
                


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




</div>


<div id="Key"
        style={{
          position: "fixed",
          bottom: "20px",
          left: "45%",
          display: "flex",
          gap: "20px",
          backgroundColor: "white",
          padding: "10px 10px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        
        }}>


 
 
 
  <p className="hard" style={{ color: "red", margin: 0 }}>Hard</p>
        <p className="medium" style={{ color: "yellow", margin: 0 }}>Medium</p>
        <p className="easy" style={{ color: "green", margin: 0 }}>Easy</p>
</div>



       </div>


       </div>
    );
}
