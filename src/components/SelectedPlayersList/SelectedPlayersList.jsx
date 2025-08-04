import { MdDeleteForever } from "react-icons/md";

const SelectedPlayersList = ({selectedPlayers}) => {
    
    return (
        <div className="mt-10">
      <h2 className="text-2xl font-bold">
        Selected Players ({selectedPlayers.length}/6)
      </h2>
      <div className="mt-4 space-y-4">
        {selectedPlayers.map((player) => (
          <div
            key={player.id}
            className="flex items-center justify-between border border-gray-200 rounded-lg p-6 "
          >
            <div className="flex items-center gap-3">
              <img
                src={player.img}
                alt={player.name}
                className="w-12 h-12 rounded bg-gray-300 object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{player.name}</h3>
                <p className="text-xs text-gray-500">{player.position}</p>
              </div>
            </div>
            <button className="text-red-500 hover:text-red-600 text-3xl cursor-pointer">
              <MdDeleteForever />
            </button>
          </div>
        ))}
      </div>
    </div>
    );
};

export default SelectedPlayersList;