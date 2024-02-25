import style from './PaginateReviews.module.css';

const PaginateReviews = ({totalInfo, bringData, dataInit, rating}) => {

  const handleNext = async() => {
      if(rating === "All") {
        dataInit(totalInfo.nextPage);
      } else {
        bringData(totalInfo.nextPage);
      }
  }

  const handlePrev = async () => {
    if (rating === "All") {
      dataInit(totalInfo.prevPage)
    }
    else {
      bringData(totalInfo.prevPage)
    }
  };

  return (
    <div className={style.container}>
        <button className={totalInfo.hasPrevPage ? style.boton : style.disabled} onClick={handlePrev} disabled={!totalInfo.hasPrevPage}> Previous</button>
         <span className={style.txtPaginado}>{`Page ${totalInfo.page} of ${totalInfo.totalPages}`}</span>
        <button className={totalInfo.hasNextPage ? style.boton : style.disabled} onClick={handleNext} disabled={!totalInfo.hasNextPage}> Next</button> 
    </div>
  )
}

export default PaginateReviews