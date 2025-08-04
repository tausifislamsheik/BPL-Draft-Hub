import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players'
import toast, { Toaster } from 'react-hot-toast';
import SelectedPlayersList from './components/SelectedPlayersList/SelectedPlayersList'

function App() {
  const [coin, setCoin] = useState(0)
  const [selectedPlayers, setSelectedPlayers] = useState([])
  const [showSelected, setShowSelected] = useState(false) // 👈 toggle view

  const handleAddToCoin = (newCoin) => {
    if (coin > 0) {
      toast.error("You already claimed your free credit!")
      return
    }
    setCoin(coin + newCoin)
    toast.success("Free Credit Successfully added!")
  }

  const handleChoosePlayer = (price, player) => {
    const alreadyExists = selectedPlayers.some(p => p.id === player.id)
    if (alreadyExists) {
      toast.error("Player already selected!")
      return
    }
    if (selectedPlayers.length >= 6) {
      toast.error("You can only select 6 players!")
      return
    }
    if (coin < price) {
      toast.error("Not enough coins!")
      return
    }

    setSelectedPlayers(prev => [...prev, player])
    setCoin(coin - price)
    toast.success('Player Successfully added!')
  }

  const handleSelectedPlayerRemove = (id) =>{
    const newSelectedPlayers = selectedPlayers.filter(players => players.id !== id)
    setSelectedPlayers(newSelectedPlayers)
  }

  const toggleDarkMood = () => {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

  return (
    <>
      <div className='mx-5 lg:mx-20'>
        <Navbar coin={coin} toggleDarkMood={toggleDarkMood}/>
        <Toaster />
        <Banner handleAddToCoin={handleAddToCoin} />
        {!showSelected ? (
          <Players handleChoosePlayer={handleChoosePlayer} showSelected={showSelected} setShowSelected={setShowSelected} selectedPlayers={selectedPlayers} />
        ) : (
          <SelectedPlayersList selectedPlayers={selectedPlayers} showSelected={showSelected} setShowSelected={setShowSelected} handleSelectedPlayerRemove={handleSelectedPlayerRemove} />
        )}
      </div>
      <Footer />
    </>
  )
}

export default App
