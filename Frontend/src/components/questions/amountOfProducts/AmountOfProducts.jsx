import React from 'react'
import style from './AmountOfProducts.module.css'
import { useTranslation } from 'react-i18next'

export const AmountOfProducts = ({ quote, setQuote, question, setQuestion,  setProgressBar, progressBar  }) => {
  const [t, i18n] = useTranslation("global");

  const handleClick = (e) => {
    const valueClick = e.target.value
    setQuote({
      ...quote,
      'amountOfProducts': valueClick
    })
    setQuestion(question + 1)
    setProgressBar(progressBar + 10)
  }

  return (
    <div className={style.containerAmountOfProductse}>
      <div className={style.titleCuestion}>
        <h3>{t("QuoteQuestions.Section3.title")}</h3>
      </div>
      <div className={style.containerButtons}>
        <button
        className={style.button}
          value={t("QuoteQuestions.Section3.answer1")}
          onClick={handleClick}
        >{t("QuoteQuestions.Section3.answer1")}</button>

        <button
        className={style.button}
          value={t("QuoteQuestions.Section3.answer2")}
          onClick={handleClick}
        >{t("QuoteQuestions.Section3.answer2")}</button>

        <button
        className={style.button}
          value={("QuoteQuestions.Section3.answer3")}
          onClick={handleClick}
        >{t("QuoteQuestions.Section3.answer3")}</button>
      </div>
    </div>
  )
}
