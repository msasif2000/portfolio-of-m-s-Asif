import logo from '../src/assets/logo.png'
import './App.css'
import Typewriter from 'typewriter-effect'
function App() {

  const homeStyle = {
    'background-image': 'url(../src/assets/Home.png)',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'background-position': 'center',
  }

  return (
    <div className=''>
      <div>
        {/* Navbar */}
        <section>
          <div style={homeStyle} className=''>
            <section className='fixed top-0 right-0 z-40 w-full '>
              <div className="navbar border-2 md:container mx-auto  border-black  hover:translate-y-0.5 mt-1 rounded-full border-0.5 p-2 transition-colors duration-500 border-neutrals-600 bg-neutrals-900/90 backdrop-blur-md supports-[backdrop-filter]:bg-neutrals-900/50 ">
                <div className="navbar-start ">
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a href='#about' className='lg:text-white text-black text-xl'>About me</a></li>

                      <li><a href='#projects' className='lg:text-white text-black text-xl'>Projects</a></li>
                      <li><a className='lg:text-white text-black text-xl'>services</a></li>
                    </ul>
                  </div>
                  <img src={logo} alt="" className='h-[60px] w-[100px] shadow-lg shadow-[#615CD4] rounded-full' />
                </div>
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                    <li><a href='#about' className='lg:text-white text-black text-xl'>About me</a></li>
                    <li><a href='#projects' className='lg:text-white text-black text-xl'>Projects</a></li>
                    <li><a className='lg:text-white text-black text-xl'>services</a></li>
                  </ul>
                </div>
                <div className="navbar-end">
                  <button className="btn btn-sm rounded-full text-blue-600 text-xl">Download CV</button>
                </div>
              </div>
            </section>
            {/* Typewriter */}
            <div className='flex flex-col gap-12 justify-center items-center h-screen sticky inset-0  w-full py-28'>
              <h1 className='text-center text-white md:text-6xl text-4xl flex'>
                <Typewriter

                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 80,
                    strings: ['HELLO! This is <strong>MOSTAFA SHAHRIAR ASIF</strong>', ' A <span style="color: black;">React Front-end Developer</span>', 'WELCOME to my PORTFOLIO!'],
                  }}
                />
              </h1>

              <div className='flex gap-12'>
                <button className='btn bg-transparent text-white text-xl hover:-translate-x-2 hover:text-neutral hover:bg-white'>My Projects</button>
                <button className='btn bg-=white text-blue-600 text-xl hover:translate-x-2 hover:text-white hover:bg-transparent'>See Services</button>
              </div>
            </div>
          </div>
          {/* About */}
          <section id='about' className='bg-black relative z-10 w-full'>
            <section className=' md:container mx-auto'>
              <div className='md:flex gap-8 pt-20  items-center px-2'>
                <div className='flex-1'>
                  <img src="https://i.ibb.co/C82zRd1/IMG-20230226-145409.jpg" alt="" className='lg:h-[800px] w-full flex-1' />
                </div>
                <div className='flex-1 space-y-2'>
                  <h2 className='text-2xl text-center text- font-bold text-[#615CD4]'>About Me</h2>
                  <h1 className='text-center text-white md:text-5xl text-3xl flex '>
                    <Typewriter

                      options={{
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        strings: ['Frontend Developer', 'Code Learner', 'Studying Computer Science and Engineering'],
                      }}
                    />
                  </h1>
                  <p className='text-white'><br /> I am Mostafa Shahriar Asif, a Front-end Web Developer, a dedicated Computer Science and Engineering student at the International Islamic University Chittagong. As a passionate Front-end Web Developer, I specialize in crafting engaging and dynamic websites using React Js. My journey in the realm of web development goes beyond the front-end, as I also possess a foundational understanding of backend technologies. <br /> <br />

                    Currently, I am immersed in the exploration of Next.js and Redux to further enhance my skill set. My immediate goal is to secure a position in a dynamic company where I can contribute my expertise and continue to grow as a professional. I take pride in having completed three noteworthy projects that showcase both my creativity and technical proficiency.

                    Driven by a relentless pursuit of excellence, I aspire to excel in the ever-evolving field of web development. My commitment to delivering exceptional user experiences and staying abreast of industry trends fuels my determination to make a lasting impact in the world of technology.

                    Let`s build something remarkable together!</p>
                </div>
              </div>
            </section>
          </section>
        </section>



      </div>
    </div>
  )
}

export default App
