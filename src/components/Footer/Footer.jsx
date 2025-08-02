import footerLogo from '../../assets/images/logo-footer.png'
import bgShadow from '../../assets/images/bg-shadow.png'

const Footer = () => {
    return (
        <div>
            <div className='mx-28 -top-52'>
                 <img className='absolute rounded-2xl h-72 w-10/12 bg-white' src={bgShadow} alt="" />
                 <div className='relative text-center pt-20 space-y-4'>
                    <h1 className='text-3xl font-bold'>Subscribe to our Newsletter</h1>
                    <p className='text-gray-500'>Get the latest updates and news right in your inbox!</p>
                    <input type="text" className='border border-gray-300 py-3 p-4 rounded-bl-xl rounded-tl-xl w-2/5 join-item' placeholder='Enter your email' />
                    <button class="btn join-item py-6 bg-gradient-to-r from-[#e396d6] via-[#f5b968] to-[#f7e664]">Subscribe</button>
                 </div>
            </div>
            
         <footer class="footer sm:footer-horizontal h-96 pt-56 bg-[#06091A] text-white p-10 px-28">
            <img src={footerLogo} alt="" />
            <nav>
                <h6 class="footer-title">Company</h6>
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Teams</a>
                <a class="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 class="footer-title">Legal</h6>
                <a class="link link-hover">Terms of use</a>
                <a class="link link-hover">Privacy policy</a>
                <a class="link link-hover">Cookie policy</a>
            </nav>
            <form>
                <h6 class="footer-title">Subscribe</h6>
                <fieldset class="w-80">
                <label>Subscribe to our newsletter for the latest updates.</label>
                <div class="join mt-2">
                    <input
                    type="text"
                    placeholder="username@site.com"
                    class="input input-bordered join-item text-gray-600" />
                    <button class="btn join-item bg-gradient-to-r from-[#e396d6] via-[#f5b968] to-[#f7e664]">Subscribe</button>
                </div>
                </fieldset>
            </form>
        </footer>
        </div>
    );
};

export default Footer;