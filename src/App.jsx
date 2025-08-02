import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players'

function App() {
  

  return (
    <>

      <div className='mx-5 lg:mx-20'>
        <Navbar></Navbar>
        <Banner></Banner>
        <Players></Players>
      </div>
        <Footer></Footer>
    </>
  )
}

export default App
