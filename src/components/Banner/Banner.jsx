import bgShadow from '../../assets/images/bg-shadow.png'
import banner from '../../assets/images/banner-main.png'


const Banner = () => {
    return (
        <div className='mt-10'>
            <img className='bg-black rounded-3xl absolute' src={bgShadow} alt="" />
            <div className='relative text-white text-center px-auto space-y-2 md:space-y-5 lg:space-y-8 lg:py-20 p-2'>
                <img className='mx-auto w-20 lg:w-60' src={banner} alt="" />
                <h1 className='lg:text-4xl font-bold'>Assemble Your Ultimate BPL Cricket Team</h1>
                <p className='text-sm lg:text-xl text-gray-400'>Beyond Boundaries Beyond Limits</p>
                <button className="btn btn-soft bg-[#E7FE29] p-6 text-sm">Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;