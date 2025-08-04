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

  return (
    <>
      <div className='mx-5 lg:mx-20'>
        <Navbar coin={coin} />
        <Toaster />
        <Banner handleAddToCoin={handleAddToCoin} />

        <div className="flex justify-end">
          <button
            className="bg-[#E7FE29] font-semibold px-5 py-2 rounded cursor-pointer"
            onClick={() => setShowSelected(prev => !prev)}
          >
            {showSelected ? 'Back to Players' : `Selected (${selectedPlayers.length})`}
          </button>
        </div>

        {!showSelected ? (
          <Players handleChoosePlayer={handleChoosePlayer} />
        ) : (
          <SelectedPlayersList selectedPlayers={selectedPlayers} handleSelectedPlayerRemove={handleSelectedPlayerRemove} />
        )}
      </div>
      <Footer />
    </>
  )
}

export default App
