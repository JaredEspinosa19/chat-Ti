import { useEffect, useState } from "react"
import { ConversationList, Header, Prompt } from "../components"
import { useChatStore } from "../hooks"


export const ChatPage = () => {

  const {firstInteraction} = useChatStore()

  useEffect(() => {
    firstInteraction();
  }, [])
  

  return (
    <>
      <div 
        className="position-relative"
        style={{height: '100vh', width: '100vw',}}>

          <Header />

          <ConversationList/>

          <Prompt />

      </div>
    </>
  )
}
