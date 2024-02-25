import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import style from './Payment.module.css'

export const Payment = () => {
    const [paymentInfo, setPaymentInfo] = useState()

    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const payment_id = params.get('payment_id')
    const preference_id = params.get('preference_id')
    const obj = {
        payment_id: payment_id,
        preference_id: preference_id
    }
    const yeison = async () => {
        const { _id } = await axios('https://wedevelop-production.up.railway.app/successpayment', { params: obj })
        const search = await axios('https://wedevelop-production.up.railway.app/getpreference', { params: _id })
        setPaymentInfo(search.data)
    }
    console.log(paymentInfo);
    useEffect(() => {
        yeison()
    }, [])
    return (
        <div>
            <div className={style.paymentContainer}>
                <h1>     Payment Confirmation      </h1>
                <h2>Payment number: {paymentInfo?.payId}</h2>
                <h2>Service Name: {paymentInfo?.title}</h2>
                <h2>Payment Type: {paymentInfo?.payment_type_id}</h2>
                <h2>Payment Status: {paymentInfo?.status}</h2>
                <h2>Payment Amount: ARS {paymentInfo?.amount}</h2>
                <h2>Creation Date: {paymentInfo?.date_approved}</h2>
                <h2>Payment Email: {paymentInfo?.email}</h2>
            </div>
            <div>
                <Link to='/'>
                    <button>Back to Home</button>
                </Link>
            </div>
        </div>
    )
}
