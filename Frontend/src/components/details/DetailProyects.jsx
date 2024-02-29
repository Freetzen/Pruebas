import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./DetailProyects.module.css";
import { useNavigate } from "react-router-dom";
import projectsProvider from "../../utils/provider/projectsProvider/projectsProvider";
import { useTranslation } from "react-i18next";

export default function ProjectDetails() {
  const [t, i18n] = useTranslation("global");
  const { id } = useParams();

  const [projectById, setProjectById] = useState([])

  const getProject = async () => {
    try {
      const totalProjects = await projectsProvider.getProjectById(id)
      setProjectById(totalProjects)
    } catch (error) {
      console.log(error.message)
    }

  }

  useEffect(() => {
    getProject()
  }, [])

  if (!id) {
    return <div>{t("Projects.notFound")}</div>;
  }

  const navigate = useNavigate()
  const backToHome = () => {
    navigate('/projects')
  }
  const goToQuote = () => {
    navigate('/quote')
  }

  return (
    <div className={style.detailsContainer}>
      <div className={style.containerImage}>
        <img src={projectById.images} alt={projectById.name} className="imgDetails" />
      </div>
      <div className={style.containerInfo}>
        <div className={style.containerTitle}>
          <h2>{projectById.name}</h2>
          <span><strong>{t("Projects.projectsDetails.title")}</strong> {projectById.category}</span>
          </div>
          <div className={style.containerDescription}>
            <p>{projectById.description}</p>
          </div>
        <div className={style.buttonsContainer}>
          <button onClick={backToHome} className={style.button1}>{t("Projects.projectsDetails.back")}</button>
          <button onClick={goToQuote} className={style.button2}>{t("Projects.projectsDetails.quote")}</button>
        </div>
      </div>

    </div>
  );
}