import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players'
import toast, { Toaster } from 'react-hot-toast';

function App() {

  const [coin, setCoin] = useState(0)
  

  const handleAddToCoin = (newCoin) =>{
    setCoin(coin + newCoin)
    if(coin){
      toast.success('Free Credit Successfully added!')
    }
  }
  

  return (
    <>

      <div className='mx-5 lg:mx-20'>
        <Navbar coin={coin}></Navbar>
        <Toaster/>
        <Banner handleAddToCoin={handleAddToCoin}></Banner>
        <Players></Players>
      </div>
        <Footer></Footer>
    </>
  )
}

export default App
