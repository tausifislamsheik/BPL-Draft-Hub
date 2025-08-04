import footerLogo from '../../assets/images/logo-footer.png'
import bgShadow from '../../assets/images/bg-shadow.png'

const Footer = () => {
    return (
        <div>
            <div className='translate-y-20 dark:text-black'>
                 <img className='absolute rounded-2xl h-72 w-10/12 bg-white mx-32' src={bgShadow} alt="" />
                 <div className='relative text-center pt-20 space-y-4'>
                    <h1 className='text-4xl font-bold'>Subscribe to our Newsletter</h1>
                    <p className='text-gray-500 text-lg'>Get the latest updates and news right in your inbox!</p>
                    <input type="text" className='border border-gray-300 py-3 p-4 rounded-bl-xl rounded-tl-xl w-2/5 join-item' placeholder='Enter your email' />
                    <button className="btn join-item py-6 bg-gradient-to-r from-[#e396d6] via-[#f5b968] to-[#f7e664]">Subscribe</button>
                 </div>
            </div>
            
         <footer className="footer sm:footer-horizontal pt-56 bg-[#06091A] text-white p-10 px-28 ">
            <img src={footerLogo} alt="" />
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Teams</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <form>
                <h6 className="footer-title">Subscribe</h6>
                <fieldset className="w-80">
                <label>Subscribe to our newsletter for the latest updates.</label>
                <div className="join mt-2">
                    <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered join-item text-gray-600" />
                    <button className="btn join-item bg-gradient-to-r from-[#e396d6] via-[#f5b968] to-[#f7e664]">Subscribe</button>
                </div>
                </fieldset>
            </form>
        </footer>
        <footer className='bg-[#06091A]'>
            <aside>
                <p className='text-center py-10 text-gray-500'>Copyright © {new Date().getFullYear()} - All right reserved by BPL Draft Hub</p>
            </aside>
        </footer>
        </div>
    );
};

export default Footer;