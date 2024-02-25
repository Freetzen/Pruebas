import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { GoStarFill } from "react-icons/go";
import style from "./ReviewForm.module.css";
import reviewsProvider from '../../utils/provider/reviewsProvider/reviewsProvider';
import { useTranslation } from "react-i18next";

const ReviewForm = () => {
  const [t, i18n] = useTranslation("global");
  const { user } = useAuth0();
  const [info, setInfo] = useState({
    name: user.name,
    email: user.email,
    image: user.picture,
    rating: 0,
    message: ''
  });

  
  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    });
  };

  const handleRatingChange = (newRating) => {
    const updatedRating = newRating === info.rating ? newRating - 1 : newRating;

    setInfo({
      ...info,
      rating: updatedRating
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await reviewsProvider.postReview(info);
    setInfo({
      name: '',
      email: '',
      image: '',
      rating: 0,
      message: ''
    });
    window.alert('Review uploaded successfully');
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.linea}>
          <label>{t("RatingHome.RatingForm.message")} </label>
          <textarea key='message' name='message' value={info.message} rows="5" onChange={handleChange} />
        </div>

        <div className={style.starts}>
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              onClick={() => handleRatingChange(value)}
              style={{
                cursor: 'pointer',
                color: value <= info.rating ? 'gold' : 'gray',
              }}
            >
              <GoStarFill />
            </span>
          ))}
        </div>
        <div className={style.containerButton}>
          <button type="submit" disabled={info.message === ''}>{t("RatingHome.RatingForm.button")}</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
