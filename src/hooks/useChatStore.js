import { useDispatch, useSelector } from "react-redux";
import { rasaChatbotApi } from "../api";
import { addMessage, deleteMessage, sendingMessage, messageSent } from "../store";


export const useChatStore = () => {

  AWS.config.region = 'us-east-2'; // Region
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:ebee7546-fc40-47af-81fb-b42dc6a3ac07',
    });

  const {chatList, isSending} = useSelector(state => state.chat)
  const dispatch = useDispatch();

  const sendTextToText = async({message}) => {

    dispatch(sendingMessage());

    try {

      dispatch(addMessage({
        role: 'user',
        type: 'text',
        message
      }));

      dispatch(addMessage({ user: 'bot', isLoader: true, }));
      
      const {data} = await rasaChatbotApi.post('/getTextResponse', { message: message });
      
      dispatch(deleteMessage());

      dispatch(addMessage({
        user: 'bot',
        type: 'text',
        isLoader: false,
        message: data.respuesta,
      }));
      
    } catch (error) {
      console.log(error);
      dispatch(deleteMessage());
      window.Error('Ocurrio un error con su petición');
    }

    dispatch(messageSent());
  }

  const sendTextToAudio = async({message}) => {

    dispatch(sendingMessage());

    try {

      dispatch(addMessage({
        role: 'user',
        type: 'text',
        message
      }));

      dispatch(addMessage({ user: 'bot', isLoader: true, }))

      const {data} = await rasaChatbotApi.post('/getAudioResponse', { message: message });

      var speechParams = {
        OutputFormat: "mp3",
        SampleRate: "16000",
        Text: data.respuesta,
        TextType: "text",
        VoiceId: "Lupe", 
        LanguageCode: "es-US",
        Engine: 'standard'
      };
  
      var polly = new AWS.Polly({apiVersion: '2016-06-10'});
      var signer = new AWS.Polly.Presigner(speechParams, polly);
  
      signer.getSynthesizeSpeechUrl(speechParams, function(error, url) {
      if (error) {
          console.log(error);
      } else {
        dispatch(deleteMessage());
        dispatch(addMessage({
          user: 'bot',
          type: 'audio',
          isLoader: false,
          url,
        }));
      }
      });
      
    } catch (error) {
      console.log(error);
      dispatch(deleteMessage());
      window.Error('Ocurrio un error con su petición');
    }

    dispatch(messageSent());

  }


  return {
    chatList, 
    isSending,

    sendTextToText,
    sendTextToAudio,
  }
}