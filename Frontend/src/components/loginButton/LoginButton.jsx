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

      if(user){
        const Response = await userProvider.getUserByEmail(user.email)
        if(!Response) { 
          const newUser1 = await userProvider.createUser(newUser)
          return newUser1 
        }
        if(Response.banned){
          Swal.fire({
            icon: "error",
            title: t("LoginButton.bannedAlert"),
            text: t("LoginButton.bannedAlertContact"),
            footer: `<a href="https://wedevelop.vercel.app/contact">${t("LoginButton.bannedWhy")}</a>`
          });
          setTimeout(() => {
            logout()
          }, 6000);
          clearLocalStorage()
        }
      }
    } catch (error) {
      console.error('Error al enviar los datos del usuario al servidor:', error);
    }
  };
  postUserData()
}, [user, isAuthenticated])


  useEffect(() => {
    if (isAuthenticated && user) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [])

  const handleLogin = () => {
    loginWithRedirect() 
 }
  

  const activeMenu = () => {
    setMenuIsActive(!menuIsActive)
  }


  return (
    <div className={style.containerLogin}>
      {!data?.email ? (
        <button className={style.buttonLogin} onClick={handleLogin}>{t("LoginButton.title")}</button>
      ) : (
        <>
        <UserAccount menuIsActive={menuIsActive} activeMenu={activeMenu}/>
        <div className={style.containerButtonUser} >
          <div className={style.containerSpinner} style={loading ? {display: ''} : {display: 'none'}} >
            <SpinnerLogin />
          </div>
          <div className={style.containerNameAndButton} style={loading ? {display: 'none'} : {display: ''}}>
            <button onClick={activeMenu}>
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