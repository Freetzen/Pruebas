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
import { Payment } from './pages/payment/Payment'
import axios from 'axios'
import { useEffect } from 'react'
import userProvider from './utils/provider/userProvider/userProvider'
import { getUserData } from './helpers/local'
import { useDispatch, useSelector } from 'react-redux'
import { loadUserData } from './redux/actions'
import { useAuth0 } from '@auth0/auth0-react'

axios.defaults.baseURL = 'https://pruebas-production-2c83.up.railway.app/'


function App() {
  const data = useSelector(state => state.userData)
  const dispatch = useDispatch()
  const localStorageUser = getUserData()
  const [localData, setLocalData] = useState(localStorageUser)
  const location = useLocation()
  const {user} = useAuth0()
  console.log('LOCAL DATA ------------> ' , localData)
  
  useEffect(() => {
    const loadData = async() => {
      try {
        const userDB = await userProvider.getUserByEmail(localData.email)
        return dispatch(loadUserData(userDB))
      } catch (error) {
        console.log(error.message)
      }
    }
    loadData()
  }, [])
 console.log('DATA ------------> ' , data)
  return (
    <>
      <NavBar setLocalData={setLocalData}/>

      <Home/>


  {/*     <Routes>
        <Route path="/" element={<Home loading={loading} setLoading={setLoading} />}></Route>
        <Route path="/quote" element={<Quote />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/projects" element={<Projects setSelectedOptions={setSelectedOptions} selectedOptions={selectedOptions} />}></Route>
        <Route path="/projects/:id" element={<ProjectDetails />}></Route>
        <Route path="/admin" element={<AdminWindow />}></Route>
        <Route path="admin/:id" element={<AdminDetail />}></Route>
        <Route path="/createProject" element={<CreateProject />}></Route>
        <Route path="/createUser" element={<UserAdmin />}></Route>
        <Route path="/reviews" element={<ReviewsAll />}></Route>
        <Route path="/successpayment" element={<Payment />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/payment" element={<Payment />}></Route>

      </Routes> */}

    </>
  )
}

export default App