import ReviewForm from "../reviewForm/ReviewForm";
import ReviewCard from "../reviewCard/ReviewCard";
import style from "./Review.module.css";
import ReviewRating from "../reviewRating/ReviewRating";
import { useAuth0 } from "@auth0/auth0-react";
import ReviewBar from "../reviewBar/ReviewBar";
import LoginButton from "../loginButton/LoginButton";
import { useTranslation } from "react-i18next";
import ReviewsButton from "../reviewsButton/ReviewsButton";

export default function Review({ totalReviews, messages }) {
  const [t, i18n] = useTranslation("global");

  const { isAuthenticated } = useAuth0();

  return (
    <div className={style.container}>
      <div className={style.reviewRatingAndContainer}>
        <ReviewRating totalReviews={totalReviews} />
        <ReviewBar reviews={totalReviews}/>
      </div>
      <div className={style.cardContainer}>
        {messages?.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
      <div>
        <ReviewsButton />
      </div>

      {isAuthenticated ? (
        <div className={style.containerTitle}>
          {/* <h2>Leave us a review</h2> */}
          <ReviewForm />
        </div>
      ) : (
        <div className={style.H3andButton}>
          <h3>{t("RatingHome.NotLogged")} </h3>
          <LoginButton />
        </div>
      )}
    </div>
  );
}
