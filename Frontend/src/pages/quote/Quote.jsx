import { useEffect, useState } from "react";
import { Section } from "../../components/section/Section";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Quote = () => {

  const user = JSON.parse(localStorage.getItem('info'))

  console.log('USERR ------',user)
  const navigate = useNavigate()
  const {isLoading} = useAuth0()
  const [quote, setQuote] = useState({
    purpose: '',
    apiOrDatabase: null,
    amountOfProducts: null,
    extraServices: null,
    legalNorm: null,
    amountOfVisits: null,
    language: null,
    desing: null,
    support: null,
    extraRequeriments: null,
  })
  
  useEffect(() => {
    if (!isLoading && !user) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Debes iniciar sesión!",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/");
    }
  }, [isLoading, user, navigate]);

  return (
    <>
      {
        user.email
          ? <Section quote={quote} setQuote={setQuote} />
          : null
      }
    </>
  )
}
