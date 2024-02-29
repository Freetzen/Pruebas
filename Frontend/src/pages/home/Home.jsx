import { useEffect, useState } from "react";
import AboutUs from "../../components/aboutUs/AboutUs";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Highlights from "../../components/highlights/Highlights";
import Review from "../../components/review/Review";
import Skills from "../../components/skills/Skills";
import StartQuote from "../../components/startQuote/StartQuote";
import reviewsProvider from "../../utils/provider/reviewsProvider/reviewsProvider";
import SpinnerConLogo from '../../components/spinners/spinnerConLogo/SpinnerConLogo';

const Home = ({ loading, setLoading }) => {

  const [messages, setMessages] = useState([]);
  const [totalReviews, setTotalReviews] = useState([])






  return (
    <>
      
        <>
          <Header />
          <AboutUs setLoading={setLoading} />
          <Skills />
          <Highlights />
          <StartQuote />
          {/* <Review totalReviews={totalReviews} messages={messages} /> */}
          <Footer />
        </>
    
    </>
  );

}

export default Home;