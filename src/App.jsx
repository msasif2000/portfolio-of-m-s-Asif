import logo from '../src/assets/logo.png'
import './App.css'
import Typewriter from 'typewriter-effect'
function App() {

  const homeStyle = {
    'background-image': 'url(../src/assets/Home.png)',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'background-position': 'center',
    'height': '100vh',
  }

  return (
    <div style={homeStyle} className='pt-1'>
      <div className='md:container mx-auto'>
        {/* Navbar */}
        <div className="navbar border-2  border-black  hover:translate-y-0.5 mt-4 rounded-full border-0.5 p-2 transition-colors duration-500 border-neutrals-600 bg-neutrals-900/90 backdrop-blur-md supports-[backdrop-filter]:bg-neutrals-900/50">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a className='lg:text-white text-black text-xl'>About me</a></li>

                <li><a className='lg:text-white text-black text-xl'>Projects</a></li>
                <li><a className='lg:text-white text-black text-xl'>services</a></li>
              </ul>
            </div>
            <img src={logo} alt="" className='h-[60px] w-[80px] shadow-lg shadow-[#615CD4] rounded-full' />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a className='lg:text-white text-black text-xl'>About me</a></li>
              <li><a className='lg:text-white text-black text-xl'>Projects</a></li>
              <li><a className='lg:text-white text-black text-xl'>services</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <button className="btn btn-sm rounded-full text-blue-600 text-xl">Download CV</button>
          </div>
        </div>

        {/* Typewriter */}
        <div className='flex justify-center items-center h-min  mt-20'>
          <h1 className='text-center text-white md:text-6xl text-4xl flex '>
            <Typewriter

              options={{
                autoStart: true,
                loop: true,
                delay: 80,
                strings: ['WELCOME! I`m <strong>MOSTAFA SHAHRIAR ASIF</strong>', ' A <span style="color: black;">React Frontend Developer</span>', 'This is my PORTFOLIO'],
              }}
            />
          </h1>
        </div>
      </div>
    </div>
  )
}

export default App
