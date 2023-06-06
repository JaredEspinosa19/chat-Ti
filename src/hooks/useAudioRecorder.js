// import React from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {useEffect, useState} from 'react'

export const useAudioRecorder = ( ) => {

  // const startListening = SpeechRecognition.startListening({continuos : true})
  // const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'es-ES';

  const [isCompatible, setIsCompatible] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [listening, setListening] = useState(false);
  
  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      // El navegador es compatible con la Web Speech API
      console.log('El navegador es compatible con la Web Speech API.');
      setIsCompatible(true);
    } else {
      // El navegador no es compatible con la Web Speech API
      console.log('El navegador no es compatible con la Web Speech API.');
      setIsCompatible(false);
    }
  }, [])


  const startListening = () => {
  
  setListening(true);
  recognition.start(); // Inicia el reconocimiento de voz

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript; // Obtiene el texto dictado
    console.log('Texto dictado:', transcript);
    setTranscript(transcript);
    console.log('Valor,', transcript);
  };

  recognition.onend = () => {
    console.log('Reconocimiento de voz finalizado.');
    setListening(false);
  };

  }

  const stopListening = () => {
  }

  return {
    isCompatible,
    startListening,
    stopListening,
    listening,
    transcript,
  }
}