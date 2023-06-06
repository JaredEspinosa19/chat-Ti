import { useState } from "react"
import { ConversationList, Header, Prompt } from "../components"


export const ChatPage = () => {


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
