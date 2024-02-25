import React, { useState } from 'react'
import styles from './ExtraServices.module.css'
import { useTranslation } from 'react-i18next';

export const ExtraServices = ({ quote, setQuote, question, setQuestion, setProgressBar, progressBar }) => {
  const [t, i18n] = useTranslation("global");
  const [platform, setPlatform] = useState('')
  const [positiveAnswer, setPosAnswer] = useState(false)

  const handleChange = (event) => {
    setPlatform(event.target.value)
  }

  const handleClick = (e) => {
    const valueClick = e.target.value
    if (valueClick === 'Yes' || valueClick === 'Si') setPosAnswer(true)
    else {
      setQuote({
        ...quote,
        'extraServices': valueClick
      })
      setQuestion(question + 1)
      setProgressBar(progressBar + 10)
    }
  }

  const handleClickContinue = (e) => {

    e.preventDefault()
    setQuote({
      ...quote,
      'extraServices': platform
    })
    setQuestion(question + 1)
    setProgressBar(progressBar + 10)
  }


  return (
    <div className={styles.containerExtraServices}>

      <div className={styles.titleCuestion}>
        <h3>{t("QuoteQuestions.Section4.title")}</h3>
      </div>

      <div className={styles.containerButtons} style={positiveAnswer ? { display: 'none' } : { display: '' }}>
        <button className={styles.button} value={t("QuoteQuestions.Section4.answer1")} onClick={handleClick}>{t("QuoteQuestions.Section4.answer1")}</button>

        <button className={styles.button} value="No" onClick={handleClick}>No</button>
      </div>
      {/* A continuacion aparece el index si la respuesta es positiva */}
      {positiveAnswer ? (
        <div className={styles.TrueExtraServiceContainer}>
          <input
            name='platform'
            type="text"
            placeholder={t("QuoteQuestions.Section4.whichOne.input")}
            value={platform}
            onChange={handleChange}
          />
          <button
            onClick={handleClickContinue}
          >
            {t("QuoteQuestions.Section4.whichOne.save")}
          </button>
          <button
            onClick={() => setPosAnswer(false)}
          >Cancel</button>
        </div>
      ) : (<></>)}
    </div>
  )
}
