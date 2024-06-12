// Icons
import ProfileIcon from "../icons/Profile";

// Router
import { Link , useNavigate} from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";


import {setUser} from "../../slices/user.slice"
import { setSelectedConversations } from "../../slices/conversations.slice";


const Profile = () => {
  const navigate = useNavigate ()
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const response = await fetch("/api/auth/logout",{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      }
    })
    const data = await response.json()

    if(response.ok){
      alert(data.message)
      localStorage.removeItem("user")
      dispatch(setUser(null))
      dispatch(setSelectedConversations(null))
    }

    if(!response.ok){
      console.log(`error: ${data.error}`);
    }
  }



  return (
    <Link to="/sign-up">
      <button onClick={handleLogout} className="h-9 w-9 rounded-full bg-neutral-800 flex items-center justify-center">
        <ProfileIcon className="h-5 w-5" color="white" />
      </button>
    </Link>
  );
};

export default Profile;
