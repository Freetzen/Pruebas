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

  const dispatch = useDispatch()
  const [menuIsActive, setMenuIsActive] = useState(true)
  const data = useSelector(state => state.userData)
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const [loading, setLoading] = useState(false);
  const [t, i18n] = useTranslation("global");

  useEffect(() => {

  const postUserData = async () => {
    try {
      const newUser = {
        name: user?.name,
        email: user?.email,
        image: user?.picture
      }
     userDate('info', newUser)
     setLocalData(newUser)

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
    <div className={style.containerLogin}>
      {!data?.email ? (
        <button className={style.buttonLogin} onClick={handleLogin}>{t("LoginButton.title")}</button>
      ) : (
        <>
        <UserAccount/>
        <div className={style.containerButtonUser} >
          <div className={style.containerSpinner} style={loading ? {display: ''} : {display: 'none'}} >
          </div>
          <div className={style.containerNameAndButton} style={loading ? {display: 'none'} : {display: ''}}>
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