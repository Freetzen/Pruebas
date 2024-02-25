import React, { useState } from 'react';
import style from "./Desing.module.css";
import projects from './Projects'
import { useTranslation } from 'react-i18next';

export const Desing = ({ quote, setQuote, question, setQuestion, progressBar, setProgressBar }) => {

  const [t, i18n] = useTranslation("global");


  const handleClick = (title) => {
    setQuote({
      ...quote,
      'desing': title
    })
    setQuestion(question + 1)
    setProgressBar(progressBar + 10)
  }

  // Captura el valor del textArea

  const [valorTextarea, setValorTextarea] = useState('');

  const capturarValor = () => {
    setQuote({
      ...quote,
      'desing': valorTextarea
    })
    setQuestion(question + 1)
  }

  return (
    <div className={style.containerDesing}>
      <div className={style.titleCuestion}>
        <h3>{t("QuoteQuestions.Section8.title")}</h3>
      </div>
      <div className={style.ContainerTemplate}>
        <div className={style.containerCards} >
          {projects.map((project, index) => (
            <div className={style.boxCard} key={index} onClick={() => handleClick(project.title)}>
              <div className={style.containerImage}>
                <img src={project.url} alt="" />
              </div>
              {/* <div className={style.containerResumen} >
                <h4>{project.title}</h4>
                <span> ★ ★ ★ ★ ★ </span>
              </div> */}
            </div>
          ))}
        </div>
        <div className={style.containerTextArea}>
          <h4>Don't like any template?</h4>
          <textarea
            onChange={(e) => setValorTextarea(e.target.value)}
            name={valorTextarea}
            id=""
            cols="30"
            rows="10"
            placeholder='Write your ideas here'
          ></textarea>
          <button onClick={capturarValor}>{t("QuoteQuestions.Section8.continue")}</button>
        </div>
      </div>
    </div>
  )

}




