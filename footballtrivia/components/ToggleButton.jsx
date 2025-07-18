
import {useState, useRef} from "react";




export default function ToggleButton () {
  
   const audioRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);

const toggleAnthem = () => {
    
    if(!audioRef.current){
        return;
    }

    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
}





  

  

   

 return(
   
<div>

    
      <audio ref={audioRef} src="/ChampionsLeagueAnthem.mp3" loop />

       
        <button
        onClick={toggleAnthem}
        style={{
            width:'300px',
            height: '50px',
            borderRadius: '25px',
            backgroundColor: '#1E1E3C',
            color: 'gold',
            borderColor: 'black',
            




        }} 
        
        > {isPlaying ? "Pause Anthem" : 'Play Anthem'} 
        </button>
        


</div>
    );
}
    
