import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import ModeButton from "../../components/ToggleButton";
import StartButton from '../../components/StartButton';









export default function Home() {
  useEffect(() =>{
   // Variable
    const audio = new Audio('/ChampionsLeagueAnthem.mp3')
  
    // The code I am running
    audio.loop = true;
    audio.play();

    // Optional return function
  return () => {
    alert("Anthem audio is unable to be played right now.")
  }
  
    }, []); // Dependency array
  
  
  
  
  
  
  
  return (
    
   
   
   
   
   
    <div id="intro"  
    style={{display: 'flex',
      backgroundImage: "url('stadium.jpg')",
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
textAlign:"center",
height: '100vh',
color: "gold",
            backgroundColor: 'tomato',
            
    } }>
      <h1 style={{marginBottom: '75px',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '40px',
      fontStyle: 'strong',

      }}>Welcome to the Football trivia</h1>
      
      <StartButton/>
      
      <div id="mode" style={{position:'absolute',
        top:'30px',
        right: '20px',
      }}>
      <ModeButton/>

      
      </div>


     

 </div>



  )}
   
