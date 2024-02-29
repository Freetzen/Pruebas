import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";

import { UserAccount } from "../../pages/userAccount/UserAccount";

import { getUserData, userDate } from "../../helpers/local";




const LoginButton = ({setLocalData, setObj}) => {
  const data = useSelector(state => state.userData)
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0()



  useEffect(() => {
  const postUserData = async () => {
    try {
      const newUser = {
        name: user?.name,
        email: user?.email,
        image: user?.picture
      }
      userDate('info', newUser)
      const dat = await getUserData()
      setObj(dat)
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
      {!data.email ? (
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