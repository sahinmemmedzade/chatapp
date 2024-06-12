// Components
import SingleContact from "./SingleContact";

// Hooks
import { useDispatch, useSelector } from "react-redux";
import { setConversations } from "../../slices/conversations.slice"
import { useEffect } from "react";

const Contacts = () => {

  const dispatch = useDispatch()
  const conversations = useSelector(state => state.conversations.conversations)

  const getAllConversation = async () => {
    try {
      const response = await fetch("/api/users")
      const data = await response.json()

      if (!response.ok) {
        console.log(`failed to get all conversations`);
      }

      if (response.ok) {
        dispatch(setConversations(data))
      }
    } catch (error) {
      console.log(`fetch error:${error}`);
    }
  }
 useEffect(() => {
    getAllConversation();  
}, []);


  return (
    <div className="bg-[#F6F6F6] py-5 rounded-2xl flex-1 h-full overflow-y-scroll">

      {conversations?.map((conversation,index,array) => {
        return (<SingleContact  key={conversation._id} conversation={conversation} isLastOne={index === array.length - 1}
          />
      )})}
    </div>
  );
};

export default Contacts;
