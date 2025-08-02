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
            <div className="flex">
                <button class="btn btn-soft bg-[#E7FE29] px-4 text-sm">Available</button>
                <button class="btn btn-soft px-4 text-sm">Selected (<span>0</span>)</button>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
        {
            players.map(player => <Player player={player}></Player>)
        }
        </div>

        </>
    );
};

export default Players;