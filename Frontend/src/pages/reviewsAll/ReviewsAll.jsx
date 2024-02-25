import style from "./ReviewsAll.module.css";
import { useEffect, useState } from "react";
import reviewsProvider from "../../utils/provider/reviewsProvider/reviewsProvider";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import PaginateReviews from "../../components/paginateReviews/PaginateReviews";
import { useTranslation } from "react-i18next";

export default function ReviewsAll() {
  const [t, i18n] = useTranslation("global");

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState("All");
  const [sortOrder, setSortOrder] = useState('recent');
  const [totalInfo, setTotalInfo] = useState([])


  
  const dataInit = async (page = 1) => {
    try {
      let obj = {
        sortOrder,
        page
      };
      const response = await reviewsProvider.getReviewsAll(obj);
      setReviews(response.docs);
      setTotalInfo(response);
    } catch(error) {
      console.error(t("RatingHome.ReviewsAll.error1"), error);
    }
  }
  
  const bringData = async (page = 1) => {
    try { 
      const ratingNumber = Number(rating);
      let obj = {
        rating: ratingNumber,
        sortOrder,
        page
      };
      const response = await reviewsProvider.getReviewsByRating(obj); 
      setReviews(response.docs);
      setTotalInfo(response);
    } catch(error) {
      console.error(t("RatingHome.ReviewsAll.error2"), error);
    }
  }
  
  useEffect(() => {
    if(rating !== "All") bringData();
    else dataInit();
  }, [rating, sortOrder]);


  const handleRating = (e) => {
      const ratingSelected = e.target.value;
      setRating(ratingSelected);
  }

  const handleSortOrder = (e) => {
    const order = e.target.value;
    setSortOrder(order);
  };


  return(
    <div className={style.container}>

      <div className={style.titulo}>
        <h3>{t("RatingHome.ReviewsAll.title")}</h3>
      </div>

      <div className={style.filtro}>
        <div>
        <label>Filter by reviews:</label>
        <select onChange={handleRating}>
          <option value="All">All reviews</option>
          <option value="5">5 stars</option>
          <option value="4">4 stars</option>
          <option value="3">3 stars</option>
          <option value="2">2 stars</option>
          <option value="1">1 star</option>
        </select>
        </div>
        <div>
        <label>Order by:</label>
        <select onChange={handleSortOrder}>
          <option value="recent">Most recent</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      </div>

      <div className={style.reviewsContainer}>
        { 
        reviews.length ?
        reviews.map((review, index) => <ReviewCard key={index} review={review} />) : 
        <p className={style.notFound}>{t("RatingHome.ReviewsAll.noReviewsStar")}</p> 
        }
      </div>
      
       <PaginateReviews totalInfo={totalInfo} bringData={bringData} dataInit={dataInit} rating={rating}/> 
       
    
      
  </div>
  )
}
