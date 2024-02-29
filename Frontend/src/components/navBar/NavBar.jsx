import style from "./NavBar.module.css";

import React, { useEffect, useState } from "react";

import LoginButton from "../loginButton/LoginButton";

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
