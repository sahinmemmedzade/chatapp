import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../slices/user.slice';
import conversationReducer from '../slices/conversations.slice';
import messagesReducer from "../slices/messages.slice"
const store = configureStore({
  reducer: {
    user: userReducer,
    conversations: conversationReducer,
    messages: messagesReducer
  }
});

export default store;
