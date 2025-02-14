
import Header from './Header/Header'
import Footer from './Footer/Footer'
import {Outlet} from 'react-router-dom'
import TopBar from './TopBar/TopBar'

 


function Layout() {
  return (
  <>
  <TopBar/>
   <Header/>
  <Outlet/>
  <Footer/>
  </>
  )
}

export default Layout