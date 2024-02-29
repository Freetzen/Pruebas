import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import userProvider from "../../utils/provider/userProvider/userProvider";
import style from './LoginButton.module.css'
import SpinnerLogin from "../spinners/spinnerLogin/SpinnerLogin";
import { UserAccount } from "../../pages/userAccount/UserAccount";
import Swal from 'sweetalert2'
import { useTranslation } from "react-i18next";
import { clearLocalStorage, getUserData, userDate } from "../../helpers/local";
import { loadUserData } from "../../redux/actions";



const LoginButton = ({setLocalData}) => {
  const data = useSelector(state => state.userData)
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  const [obj, setObj] = useState()








  useEffect(() => {
    const loadData = async() => {
      try {
        const userDB = await userProvider.getUserByEmail(user.email)
        return dispatch(loadUserData(userDB))
      } catch (error) {
        console.log(error.message)
      }
    }
    loadData()
  }, [obj])
























  useEffect(() => {
  const postUserData = async () => {
    try {
      const newUser = {
        name: user?.name,
        email: user?.email,
        image: user?.picture
      }
      userDate('info', newUser)
      setObj(newUser)
     setLocalData(setUserLocal)

    } catch (error) {
      console.error('Error al enviar los datos del usuario al servidor:', error);
    }
  };
  postUserData()
}, [user])




  const handleLogin = () => {
    loginWithRedirect() 
 }


  return (
    <div >
      {!data?.email ? (
        <button  onClick={handleLogin}>LoginButton</button>
      ) : (
        <>
        <UserAccount/>
        <div  >
          <div  >
          </div>
          <div  >
            <button>
              {data?.name}
            </button>
            <img src={data.image} alt=""></img>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default LoginButton;