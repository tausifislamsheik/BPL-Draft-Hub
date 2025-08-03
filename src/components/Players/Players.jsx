import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = () => {
    const [players, setPlayers] = useState([])

        useEffect(()=>{
            fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
        })

    return (
        <>

        <div className="flex mt-18 mb-10 justify-between">
            <p className="text-sm lg:text-2xl font-bold">Available Players</p>
            <div className="flex join-item">
                <button className="bg-[#E7FE29] hover:bg-[#DCFA28] p-3 px-4 font-semibold rounded-bl-xl rounded-tl-xl cursor-pointer">Available</button>
                <button className="p-3 px-4 font-semibold rounded-tr-xl rounded-br-xl hover:bg-gray-300 bg-gray-200 cursor-pointer">Selected (<span>0</span>)</button>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
        {
            players.map((player, idx) => <Player key={idx} player={player}></Player>)
        }
        </div>

        </>
    );
};

export default Players;