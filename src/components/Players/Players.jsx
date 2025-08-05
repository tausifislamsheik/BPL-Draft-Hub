import { useEffect, useState } from "react"
import Player from "../Player/Player"

const Players = ({ handleChoosePlayer, showSelected,  setShowSelected, selectedPlayers}) => {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch('players.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [])

  return (
    <>
      <div className="flex mt-10 mb-10 justify-between">
        <p className="text-sm lg:text-2xl font-bold">Available Players</p>
        <div className="flex justify-end">
          <button
            className="bg-[#E7FE29] dark:text-black text-sm lg:text-lg font-semibold px-5 py-2 rounded cursor-pointer"
            onClick={() => setShowSelected(prev => !prev)}
          >
            {showSelected ? 'Back to Players' : `Selected (${selectedPlayers.length})`}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
        {
          players.map((player, idx) => (
            <Player
              key={idx}
              player={player}
              handleChoosePlayer={handleChoosePlayer}
            />
          ))
        }
      </div>
    </>
  )
}

export default Players
