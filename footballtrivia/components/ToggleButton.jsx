
import {useState} from "react";



export default function ToggleButton () {
   
   
//const [toggled, setToToggled] = useState(false);


    function playAnthem () {
     const audio =  new Audio('/ChampionsLeagueAnthem.mp3')
    audio.loop = true;
    audio.play();
    
    }

    


    return(


       
        <button
        onClick={playAnthem}
        style={{
            width:'300px',
            height: '50px',
            borderRadius: '25px',
            backgroundColor: '#1E1E3C',
            color: 'gold',
            borderColor: 'black',
            





        }}>Play Anthem</button>
        



    );
};