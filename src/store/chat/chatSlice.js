import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
   isSending: false, 
   chatList: []
  },
  reducers: {
    sendingMessage: (state) => {
      state.isSending = true;
    },
    messageSent: (state) => {
      state.isSending = false;
    },
    addMessage: (state, action) => {
      state.chatList.push(action.payload);
    },
    deleteMessage: (state) => {
      state.chatList.pop();
    }   
 }
})

export const {
  sendingMessage,
  messageSent,
  addMessage,
  deleteMessage,
 } = chatSlice.actions;