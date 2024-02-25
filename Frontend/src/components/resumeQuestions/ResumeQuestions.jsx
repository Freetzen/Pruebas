
import style from './ResumeQuestions.module.css';
import { GoQuestion } from "react-icons/go";
import { MdOutlineEdit } from "react-icons/md";
import { useTranslation } from 'react-i18next';

export const ResumeQuestions = ({ quote, setQuestion, question, progressBar, setProgressBar }) => {
    const [t, i18n] = useTranslation("global");

    const array = Object.keys(quote)

    const handleClick = (event) => {
        event.preventDefault()
        array.map((element) => {
            if (element === event.target.value) {
                let indexPage = array.indexOf(element) + 1;
                setQuestion(indexPage)
                setProgressBar(progressBar - 10)
            }
        })
    }

    return (

        <div className={style.containerResumen}>

            <div className={style.containerAnswers}>
                <div className={style.Answers}>
                    <div className={style.containerTitle}>
                        <div className={style.TitleQuestion}>
                            <span>{t("QuoteQuestions.Summary.questions")}</span>
                        </div>
                        <div className={style.TitleAnswer}>
                            <span>{t("QuoteQuestions.Summary.answers")}</span>
                        </div>
                        <div className={style.TitleEdit}>
                            <span>{t("QuoteQuestions.Summary.edit")}</span>
                        </div>
                    </div>
                    {
                        array.map((e, index) => (
                            <div className={style.Question} key={index}>
                                <div className={style.containerQuestionAndIcon}>
                                    <span className={style.question}>{e}</span>
                                    <GoQuestion />
                                </div>
                                <div className={style.containerQuestion}>
                                    <span className={style.answer}>{quote[e]}</span>
                                </div>
                                <div className={style.containerButton}>
                                    <button
                                        className={style.button}
                                        value={e}
                                        onClick={handleClick}
                                    >✎
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={style.containerButtonResumen}>
                <button onClick={() => setQuestion(question + 1)}>{t("QuoteQuestions.Summary.plans")}</button>
            </div>
        </div>

    )

}
