import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import ModeButton from "../../components/ModeButton";
import StartButton from '../../components/StartButton';








export default function Home() {
  return (
    
    <div id="intro"  
    style={{display: 'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
textAlign:"center",
height: '100vh',
    } }>
      <h1 style={{marginBottom: '75px'}}>Welcome to the football trivia</h1>
      
      <StartButton/>
      <div id="mode" style={{position:'absolute',
        top:'30px',
        right: '20px',
      }}>
      <ModeButton/>

      
      </div>

 </div>



  )}
   
