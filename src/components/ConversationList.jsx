import { useEffect, useRef } from "react";
import { useChatStore } from "../hooks"
import { BotMessage, BotLoader , UserMessage, BotAudioMessage } from "./"


export const ConversationList = () => {

  const {chatList} = useChatStore();
  
  return (
    <div 
      className="position-absolute top-50 start-50 translate-middle w-100  overflow-auto mb-5 container vertical-scroll"
      style={{height: 'calc(100vh - 10rem)'}}>
        <div className="row w-auto g-3 pt-3 pb-3">
 
          {
            chatList.map((element, index) =>
              (element.role === 'user'
                ? <UserMessage key={index} message={element.message} />
                : element.isLoader === true
                  ? <BotLoader key={index} /> 
                  : element.type === 'text'
                    ? <BotMessage key={index} message={element.message}/>
                    : <BotAudioMessage key={index} audioUrl={element.url}/>
                      )
            )
          } 
          {/* <BotMessage /> */}
        </div>
    </div>
  )
}
