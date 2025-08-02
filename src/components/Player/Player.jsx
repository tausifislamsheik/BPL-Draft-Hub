import { IoPersonSharp } from "react-icons/io5";
import { PiFlagFill } from "react-icons/pi";

const Player = ({player}) => {
    const {img, name, country, position,position_type, price} = player;
    return (
        <div>
            <div class="card bg-base-100 shadow-sm p-6">
            <figure>
                <img className="h-72 w-full object-cover rounded-2xl"
                src={img}
                alt="Player" />
            </figure>
            <div class="mt-4">
                <h2 class="card-title text-xl font-bold mb-2"><IoPersonSharp />{name}</h2>
                <div className="flex justify-between">
                    <p className="text-gray-500 flex items-center gap-2"><PiFlagFill className="text-2xl" />{country}</p>
                    <p className="font-semibold border border-gray-200 bg-gray-100 px-3 py-2 rounded-full">{position}</p>
                </div>
                <hr className="text-gray-300 my-4" />
                <p className="mb-4 text-gray-500 font-semibold">{position_type}</p>
                <p className="font-bold">Price: ${price}</p>
                <div class="card-actions justify-end">
                <button class="btn btn-outline hover:bg-[#E7FE29]">Choose Player</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Player;