import { MdDragIndicator } from "react-icons/md"; 
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { FaBlogger } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import resume from '../src/assets/resume.pdf'
import logo from '../src/assets/logo.png'
import Typewriter from 'typewriter-effect'
import Projects from './Projects'
import ScrollTopArrow from './ScrollTopArrow'
function App() {

  const homeStyle = {
    'background-image': 'url(../src/assets/Home.png)',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'background-position': 'center',
  }

  const currentYear = new Date().getFullYear();
  return (
    <div className=''>
      <div>
        {/* Navbar */}
        <section>
          <div style={homeStyle} className=''>
            <section className='fixed top-0 z-40 w-full '>
              <div className="navbar  md:container mx-auto    hover:translate-y-0.5  rounded-full  px-2 transition-colors duration-500  backdrop-blur-2xl  ">
                <div className="navbar-start ">
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a href='#about' className='lg:text-white text-black text-xl'>About me</a></li>
                      <li><a href='#skills' className='lg:text-white text-black text-xl'>Skills</a></li>
                      <li><a href='#projects' className='lg:text-white text-black text-xl'>Projects</a></li>
                      <li><a href="#services" className='lg:text-white text-black text-xl'>Services</a></li>
                      <li><a href='#contact' className='lg:text-white text-black text-xl'>Contacts</a></li>
                    </ul>
                  </div>
                  <img src={logo} alt="" className='h-[60px] w-[100px] shadow-lg shadow-[#615CD4] rounded-full' />
                </div>
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                    <li><a href='#about' className='lg:text-white text-black text-xl'>About me</a></li>
                    <li><a href='#skills' className='lg:text-white text-black text-xl'>Skills</a></li>
                    <li><a href='#projects' className='lg:text-white text-black text-xl'>Projects</a></li>
                    <li><a href="#services" className='lg:text-white text-black text-xl'>Services</a></li>
                    <li><a href='#contact' className='lg:text-white text-black text-xl'>Contacts</a></li>
                  </ul>
                </div>
                <div className="navbar-end">
                  <a href={resume} download="myFile"><button className="btn btn-sm rounded-full text-blue-600 text-xl">Download CV</button></a>

                </div>
              </div>
            </section>
            {/* Typewriter */}
            <div className='flex flex-col gap-12 justify-center items-center h-screen sticky inset-0  w-full py-28 '>
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
                <a href="#projects"><button className='btn bg-transparent text-white text-xl hover:-translate-x-2 hover:text-blue-600 hover:bg-white'>My Projects</button></a>
                <a href="#services"><button className='btn bg-=white text-blue-600 text-xl hover:translate-x-2 hover:text-white hover:bg-transparent'>See Services</button></a>
              </div>
            </div>
          </div>
          {/* About */}
          <section id='about' className='bg-black relative z-10 w-full'>
            <section className=' md:container mx-auto'>
              <div className='md:flex gap-8 pt-20  items-center px-2 lg:h-[600px]'>

                <div className='md:w-1/3 border-2  p-2 rounded-xl'>
                  <img src="https://i.ibb.co/C82zRd1/IMG-20230226-145409.jpg" alt="" className=' w-full h-full' />
                </div>

                <div className='md:w-2/3 space-y-2 border-2 rounded-xl h-full p-2'>
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
                  <p className='text-white'>
                    <br />
                    I am Mostafa Shahriar Asif, a Front-end Web Developer, a dedicated Computer Science and Engineering student at the International Islamic University Chittagong. As a passionate Front-end Web Developer, I specialize in crafting engaging and dynamic websites using React Js. My journey in the realm of web development goes beyond the front-end, as I also possess a foundational understanding of backend technologies.
                    <br />
                    <br />

                    Currently, I am immersed in the exploration of Next.js and Redux to further enhance my skill set. My immediate goal is to secure a position in a dynamic company where I can contribute my expertise and continue to grow as a professional. I take pride in having completed three noteworthy projects that showcase both my creativity and technical proficiency.Driven by a relentless pursuit of excellence, I aspire to excel in the ever-evolving field of web development. My commitment to delivering exceptional user experiences and staying abreast of industry trends fuels my determination to make a lasting impact in the world of technology.
                    Let`s build something remarkable together!
                  </p>
                </div>
              </div>
              <div id='skills' className='md:flex gap-8 pt-8 items-center px-2  h-full'>

                <div className='md:w-2/3 space-y-2 border-2 rounded-xl h-full p-2'>
                  <h2 className='text-2xl text-center text- font-bold text-[#615CD4]'>Skills</h2>
                  <div className='grid grid-cols-3 gap-4'>

                    <div className='col-span-2 border-red-400 border-2 rounded-xl p-2 hover:bg-slate-800'>
                      <h1 className='text-center text-xl text-white font-bold py-2'>Front-end</h1>
                      <div className='grid grid-cols-3 gap-6'>
                        <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'>HTML</button>
                        <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'>CSS</button>
                        <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'>Tailwind CSS</button>
                        <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'>JavaScript</button>
                        <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'>React</button>
                      </div>
                    </div>
                    <div className='border-red-400 border-2 rounded-xl p-2 hover:bg-slate-800'>
                      <h1 className='text-center text-xl text-white font-bold py-2'>Back-end</h1>
                      <div className='grid grid-rows-2 gap-6'>
                        <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'>Node.js</button>
                        <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'>Express.js</button>
                      </div>
                    </div>
                    <div className='border-red-400 border-2 rounded-xl p-2 hover:bg-slate-800'>
                      <h1 className='text-center text-xl text-white font-bold py-2'>Authentication & Database</h1>
                      <div className='grid grid-rows-2 gap-6'>
                        <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'>Firebase</button>
                        <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'>MongoDB</button>
                      </div>
                    </div>
                    <div className='col-span-2 border-red-400 border-2  rounded-xl p-2 hover:bg-slate-800'>
                      <h1 className='text-center text-xl text-white font-bold py-2'>Tools & Deployment</h1>
                      <div className='grid grid-cols-3 gap-6'>
                        <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'>Git</button>
                        <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'>Github</button>
                        <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'>Canva</button>
                        <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'>Netlify</button>
                        <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'>Vercel</button>
                      </div>
                    </div>
                    <div className='col-span-3 border-red-400  border-2 rounded-xl p-2 hover:bg-slate-800'>
                      <h1 className='text-center text-xl text-white font-bold py-2'>Other Languages & Skill</h1>
                      <div className='grid grid-cols-3 gap-6'>
                        <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'>C</button>
                        <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'>C++</button>
                        <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'>DSA</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='md:w-1/3 p-2  h-full space-y-4'>

                  <div id="services" className="border-2 rounded-xl p-2">
                    <h2 className='text-2xl text-center text- font-bold text-[#615CD4]'>Services</h2>
                    <ul className="text-white text-xl">
                      <li className="flex items-center"><MdDragIndicator />Interactive and Dynamic website using React</li>
                      <li className="flex items-center"><MdDragIndicator />User Authentication using firebase</li>
                      <li className="flex items-center"><MdDragIndicator />Responsive Design</li>
                      <li className="flex items-center"><MdDragIndicator />Database management to store Information</li>
                      <li className="flex items-center"><MdDragIndicator />Different Interface design for different role</li>
                    </ul>
                  </div>

                  <div id="contact" className=" border-2 rounded-xl p-2">
                    <h2 className='text-2xl text-center text- font-bold text-[#615CD4]'>Contacts</h2>
                    <div className='flex flex-col gap-6'>
                      <p className='flex gap-2 text-xl text-white  hover:bg-white hover:text-[#615CD4]  p-2 hover:rounded-xl'><HiOutlineMail className="text-3xl" /> <a href={`mailto:asif311.cse@gmail.com`}>asif311.cse@gmail.com</a></p>
                      <p className='flex gap-2 text-xl text-white  hover:bg-white hover:text-[#615CD4]  p-2 hover:rounded-xl'><AiOutlineWhatsApp className="text-3xl" /> <span>+88-01856685830</span></p>
                      <p className='flex gap-2 text-xl text-white  hover:bg-white hover:text-[#615CD4]  p-2 hover:rounded-xl'><BiPhoneCall className="text-3xl" /> <span>+88-01322684693</span></p>
                      <div className='flex justify-center items-center gap-8'>
                        <a href="https://www.linkedin.com/in/mostafa-s-asif-cse/" className=' text-white  hover:bg-white rounded bg-[#615CD4] hover:text-[#615CD4]  p-2 hover:rounded-xl'><AiFillLinkedin className="text-3xl" /></a>
                        <a href="https://github.com/msasif2000" className=' text-white  hover:bg-white hover:text-[#615CD4] rounded bg-[#615CD4]  p-2 hover:rounded-xl'><AiFillGithub className="text-3xl" /></a>
                        <a href="https://asifshahblog.blogspot.com/" className=' text-white  hover:bg-white rounded bg-[#615CD4] hover:text-[#615CD4]  p-2 hover:rounded-xl'><FaBlogger className="text-3xl" /></a>
                        <a href="https://www.facebook.com/mostafa.asif.cse/" className=' text-white  hover:bg-white rounded bg-[#615CD4] hover:text-[#615CD4]  p-2 hover:rounded-xl'><AiFillFacebook className="text-3xl" /></a>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </section>

            <section id='projects' className='mt-12'>
              <Projects></Projects>
            </section>

            <section style={homeStyle} className="p-20 mt-12">
              <p className="text-center text-xl text-white py-2">&copy; {currentYear},  All rights reserved by  MOSTAFA SHAHRIAR ASIF</p>
              <div className='flex justify-center items-center gap-8'>
                <a href="https://www.linkedin.com/in/mostafa-s-asif-cse/" className=' text-white  hover:bg-white rounded bg-[#615CD4] hover:text-[#615CD4]  p-2 hover:rounded-xl'><AiFillLinkedin className="text-3xl" /></a>
                <a href="https://github.com/msasif2000" className=' text-white  hover:bg-white hover:text-[#615CD4] rounded bg-[#615CD4]  p-2 hover:rounded-xl'><AiFillGithub className="text-3xl" /></a>
                <a href="https://asifshahblog.blogspot.com/" className=' text-white  hover:bg-white rounded bg-[#615CD4] hover:text-[#615CD4]  p-2 hover:rounded-xl'><FaBlogger className="text-3xl" /></a>
                <a href="https://www.facebook.com/mostafa.asif.cse/" className=' text-white  hover:bg-white rounded bg-[#615CD4] hover:text-[#615CD4]  p-2 hover:rounded-xl'><AiFillFacebook className="text-3xl" /></a>
              </div>
            </section>
            <ScrollTopArrow></ScrollTopArrow>
          </section>
        </section>



      </div>
    </div>
  )
}

export default App
