import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/Home'
import { Quote } from './pages/quote/Quote'
import ContactUs from './pages/contactUs/ContactUs'
import Projects from './pages/projects/Projects'
import AdminWindow from './pages/adminWindow/AdminWindow'
import CreateProject from './components/adminUtils/createProject/CreateProject'
import ProjectDetails from './components/details/DetailProyects'
import ReviewsAll from './pages/reviewsAll/ReviewsAll'
import UserAdmin from './components/adminUtils/usersAdmin/UserAdmin'
import NotFound from './pages/notFound/NotFound'
import AdminDetail from './components/adminUtils/adminDetail/AdminDetail'
import { useState } from 'react'
import ChatSocket from './components/chatSocket/ChatSocket'
import { Payment } from './pages/payment/Payment'
import axios from 'axios'

axios.defaults.baseURL = 'https://wedevelop-production.up.railway.app/'


function App() {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [loading, setLoading] = useState(true)

  const location = useLocation()

  return (
    <>
      {location.pathname !== '/admin'
        && location.pathname !== '/createProject'
        && location.pathname !== '/createUser'
        && location.pathname !== '/useraccount'
        && location.pathname !== '/spinner'
        && location.pathname !== '/quote'
        && <NavBar />}

      <Routes>
        <Route path="/" element={<Home loading={loading} setLoading={setLoading}/>}></Route>
        <Route path="/quote" element={<Quote />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/projects" element={<Projects setSelectedOptions={setSelectedOptions} selectedOptions={selectedOptions} />}></Route>
        <Route path="/projects/:id" element={<ProjectDetails />}></Route>
        <Route path="/admin" element={<AdminWindow />}></Route>
        <Route path="admin/:id" element={<AdminDetail />}></Route>
        <Route path="/createProject" element={<CreateProject />}></Route>
        <Route path="/createUser" element={<UserAdmin />}></Route>
        <Route path="/reviews" element={<ReviewsAll />}></Route>
        <Route path="/chat" element={<ChatSocket />}></Route>
        <Route path="/successpayment" element={<Payment />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

    </>
  )
}

export default App