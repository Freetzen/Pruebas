import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
import React, { useEffect, useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import LoginButton from "../loginButton/LoginButton";
import { FiMenu } from 'react-icons/fi';
import { UserAccountMobile } from "../userAccountMobile/UserAccountMobile";
import logoNav from '../../../public/images/logo-nav.png'
import { useSelector } from "react-redux";
import userProvider from "../../utils/provider/userProvider/userProvider";



const NavBar = ({setLocalData}) => {

  const [obj, setObj] = useState({})

  useEffect(() => {
    const loadData = async() => {
      try {
        const userDB = await userProvider.getUserByEmail(obj.email)
        await dispatch(loadUserData(userDB))
      } catch (error) {
        console.log(error.message)
      }
    }
    loadData()
  }, [obj])

  return (
    <div className={style.NavBarContainer}>
    
          <LoginButton setLocalData={setLocalData} setObj={setObj}/>
        
    </div>
  );
};

export default NavBar;
