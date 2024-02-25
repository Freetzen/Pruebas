import React from 'react';
import style from './AdminItemCard.module.css'
import { NavLink } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

export default function AdminItemCard(props) {

    const handleClick = async () => {
        if (props.email) props.setDetailState(props.email)
        else props.setDetailState(props.id)
    }

    return (
        <NavLink onClick={handleClick}>
            <div className={style.card} >
                {
                    props.email
                        ? (
                            <div className={style.containerInfo}>
                                <p className={style.user}>{props.name}</p>
                                <p className={style.email}>{props.email}</p>
                                <p className={style.status} style={props.suspended ? { color: 'red' } : { color: 'forestgreen' }}>{props.suspended ? <IoMdCloseCircle /> : <FaCheck />}</p>
                                <p className={style.role}>{props.role}</p>
                            </div>
                        )
                        : (
                            <div className={style.containerProject}>
                                <div className={style.containerImagen}>
                                    <img src={props.images ? props.images : null} alt="" />
                                </div>
                                <p >{props.name}</p>
                                <p className={style.category}>{props.category}</p>
                            </div>
                        )
                }
            </div>
        </NavLink>

    )
}