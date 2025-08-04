import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players'
import toast, { Toaster } from 'react-hot-toast';

function App() {

  const [coin, setCoin] = useState(0)
  const [selectedPlayer, setSelectedPlayer] = useState(0)
  

  const handleAddToCoin = (newCoin) =>{
    if(coin > 0){
      toast.error("You already claimed your free credit!");
      return;
    }
    setCoin(coin + newCoin)
    toast.success("Free Credit Successfully added!");
    
  }

  const handleChoosePlayer = (price) =>{
    
      if(coin < price){
        toast.error("Not enough coins!");
        return;
      }
      setSelectedPlayer(count => count + 1)
      setCoin(coin - price)
      toast.success('Player Successfully added!')
    
  }
  

  return (
    <>

      <div className='mx-5 lg:mx-20'>
        <Navbar coin={coin}></Navbar>
        <Toaster/>
        <Banner handleAddToCoin={handleAddToCoin}></Banner>
        <Players handleChoosePlayer={handleChoosePlayer} selectedPlayer={selectedPlayer}></Players>
      </div>
        <Footer></Footer>
    </>
  )
}

export default App
