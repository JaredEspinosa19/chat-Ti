import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faPaperPlane, faVolumeHigh,faMessage } from '@fortawesome/free-solid-svg-icons';
import { useAudioRecorder, useChatStore, useForm } from '../hooks';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';



const InitialForm = {
  message: '',
  isText: true,
};

export const Prompt = () => {
  
  const {message, isText, onResetForm, onInputChange} = useForm(InitialForm);
  // const {isCompatible, listening, transcript, startListening, stopListening} = useAudioRecorder();
  const startListening = () => SpeechRecognition.startListening({continuous: true, language: 'es-MX'});
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition: isCompatible } = useSpeechRecognition();
  const {sendTextToText, isSending, sendTextToAudio} = useChatStore();
  
  const onSubmit = (event) => {
    event.preventDefault();
    console.log({message, isText})

    if (isText) { //text-text
      sendTextToText({message});
    }
    else { //text-audio
      sendTextToAudio({message});
    }
    
    onResetForm();
  }

  const onStartRecording = (event) => {
    event.preventDefault()
    if(!listening){
      startListening();
    }
    else {
      SpeechRecognition.stopListening();
      console.log(transcript);
      resetTranscript();
      onInputChange({target:{
        name: 'message',
        value: transcript,
        type: 'textarea'
      }})
    }
  }

  return (
    <>
      <div 
        className="w-100 promt-area fixed-bottom"
        style={{height: '5rem'}}>
        
        <div className="container">
            <form onSubmit={onSubmit} className='row w-auto'>
              <div 
                className="col-3  position-relative"
                style={{height: '5rem'}}>
                <div className='position-absolute top-50 start-50 translate-middle p-4'>
                  
                  <label className="switch">
                    <input 
                      type="checkbox"
                      name="isText"
                      value={isText}
                      onChange={onInputChange}
                      disabled={isSending} />
                      <div className="slider"></div>
                      <div className="slider-card">
                        <div className="slider-card-face slider-card-front"></div>
                        <div className="slider-card-face slider-card-back"></div>
                      </div>
                  </label>

                  <span className="position-absolute top-50 start-0 translate-middle-y me-2">
                    <FontAwesomeIcon 
                      icon={faMessage}
                      style={{color: "white", height: '1.3rem'}}
                      />  
                  </span>

                  <span className="position-absolute top-50 end-0 translate-middle-y ms-1">
                    <FontAwesomeIcon 
                      icon={faVolumeHigh}
                      style={{color: "white", height: '1.1rem'}}
                      />                  
                  </span>
                </div>
              </div>

              <div 
                className="col-6 position-relative">
                
                <textarea
                  className='position-absolute top-50 start-50 translate-middle w-100
                  shadow-sm pt-2 pb-2 ps-3 bg-body-tertiary rounded-4 text-area'
                  style={{resize: 'none', height: '3rem'}}
                  maxLength={"100"}
                  rows={"1"}
                  placeholder='Escribe tu mensaje aquí...'
                  name='message'
                  value={message}
                  onChange={onInputChange}
                  disabled={isSending || listening}
                  ></textarea>

              </div>
            
              <div 
                className="col-1 position-relative">
                <button
                  className='position-absolute top-50 start-50 translate-middle btn'
                  style={{border: 'none', background: 'transparent'}}
                  onClick={onStartRecording}
                  disabled={!isCompatible || isSending}>
                  <FontAwesomeIcon icon={faMicrophone}  
                    style={{color: "rgb(255, 214, 10)", height: '2rem'}}
                    beatFade={listening}
                    />
                </button>
                {/* {
                  listening === 
                  ? ()
                  : ()
                } */}
              </div>

              <div
                className="col-2  position-relative">
                  <button
                    className='position-absolute top-50 start-50 translate-middle btn'
                    style={{height: '50%', width: 'auto', border: 'none', background: 'transparent'}}
                    onClick={onSubmit}
                    disabled={isSending || listening}
                    >
                    <FontAwesomeIcon icon={faPaperPlane} 
                      style={{color: "rgb(255, 214, 10)", height: '1.8rem', }}/>
                  </button>
              </div>

            </form>
        </div>
      </div>
    </>
  )
}
