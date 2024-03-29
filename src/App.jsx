import { SiTypescript } from "react-icons/si"; 
import { BsTrello } from "react-icons/bs"; 
import { FaDownload } from "react-icons/fa";
import { AiTwotoneDatabase } from "react-icons/ai";
import { SiCplusplus } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";
import { BiGitBranch } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { MdDragIndicator } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { FaBlogger } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaCode } from 'react-icons/fa';

import resume from '../src/assets/MOSTAFA SHAHRIAR ASIF.pdf'
import logo from '../src/assets/logo.png'
import Typewriter from 'typewriter-effect'
import Projects from './Projects'
import ScrollTopArrow from './ScrollTopArrow'
import bg from '../src/assets/Home.png'
function App() {

  const homeStyle = {
    'background-image': `url(${bg})`,
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'background-position': 'center',
  }

  const currentYear = new Date().getFullYear();
  return (
    <div className=''>
      <div>
        {/* Navbar */}
        <div style={homeStyle} className=''>
          <section className='fixed top-0 right-0 z-40 w-full '>
            <div className="navbar  md:container mx-auto   rounded-full  px-2 transition-colors duration-500  backdrop-blur-2xl  ">
              <div className="navbar-start md:w-2/3">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-info lg:hidden ml-2 px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href='#about' className='lg:text-white text-black text-xl'>About me</a></li>
                    <li><a href='#skills' className='lg:text-white text-black text-xl'>Skills</a></li>
                    <li><a href='#projects' className='lg:text-white text-black text-xl'>Projects</a></li>
                    <li><a href="#services" className='lg:text-white text-black text-xl'>Services</a></li>
                    <li><a href='#contact' className='lg:text-white text-black text-xl'>Contacts</a></li>
                  </ul>
                </div>
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                  <li><a href='#about' className='lg:text-white text-black text-xl'>About me</a></li>
                  <li><a href='#skills' className='lg:text-white text-black text-xl'>Skills</a></li>
                  <li><a href='#projects' className='lg:text-white text-black text-xl'>Projects</a></li>
                  <li><a href="#services" className='lg:text-white text-black text-xl'>Services</a></li>
                  <li><a href='#contact' className='lg:text-white text-black text-xl'>Contacts</a></li>
                </ul>
              </div>

              <div className="navbar-end ">
                <a href={resume} download="Moostafa Shahriar Asif (resume)"><button className="btn btn-sm rounded-full bg-white text-blue-600 text-xl"><FaDownload className="text-slate-800" /> RESUME</button></a>

              </div>
            </div>
          </section>
          {/* Typewriter */}
          <div className='flex flex-col gap-12 justify-center items-center h-screen sticky inset-0  w-full py-28 '>
            <h1 className="text-center text-white md:text-5xl lg:text-6xl text-3xl flex gap-3 flex-wrap items-center justify-center">HELLO! This is <strong> MOSTAFA SHAHRIAR ASIF</strong></h1>
            <h1 className='text-center text-white md:text-6xl text-4xl flex'>
              <Typewriter

                options={{
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  strings: [' A <strong>FULL STACK(MERN) DEVELOPER</strong></span>', 'WELCOME to my PORTFOLIO!'],
                }}
              />
            </h1>

            <div className='flex gap-12'>
              <a href="#projects"><button className='btn bg-transparent text-white text-xl hover:-translate-x-2 hover:text-blue-600 hover:bg-white'>My Projects</button></a>
              <a href="#services"><button className='btn text-blue-600 text-xl hover:translate-x-2 bg-white hover:text-white hover:bg-blue-600'>See Services</button></a>
            </div>
          </div>
        </div>
        {/* About */}
        <section id='about' className='bg-black w-full lg:pt-20'>
          <section className=' md:container mx-auto'>
            <div className='lg:flex lg:gap-8 gap-4 pt-4  items-center px-2'>

              <div className='lg:w-1/3  p-2 rounded-xl'>
                <img src="https://i.ibb.co/C82zRd1/IMG-20230226-145409.jpg" alt="" className=' w-full h-full rounded shadow-lg  shadow-[#615CD4]' />
              </div>

              <div className='lg:w-2/3 space-y-2 rounded-xl h-full p-2 lg:mt-0 mt-2'>
                <h2 className='text-3xl text-center font-bold text-[#615CD4]'>About Me</h2>
                <h1 className='text-center text-white md:text-5xl text-3xl flex '>
                  <Typewriter

                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 100,
                      strings: ['FULL STACK(MERN) DEVELOPER', 'Code Learner', 'Studying Computer Science and Engineering'],
                    }}
                  />
                </h1>
                <p className='text-slate-300 '>
                  <br />
                  I am Mostafa Shahriar Asif, a FULL STACK(MERN) DEVELOPER, a dedicated Computer Science and Engineering student at the International Islamic University Chittagong. As a passionate Front-end Web Developer, I specialize in crafting engaging and dynamic websites using React Js. My journey in the realm of web development goes beyond the front-end, as I also possess a foundational understanding of backend technologies.
                  <br />
                  <br />

                  Currently, I am immersed in the exploration of Next.js to further enhance my skill set. My immediate goal is to secure a position in a dynamic company where I can contribute my expertise and continue to grow as a professional. I take pride in having completed three noteworthy projects that showcase both my creativity and technical proficiency.Driven by a relentless pursuit of excellence, I aspire to excel in the ever-evolving field of web development. My commitment to delivering exceptional user experiences and staying abreast of industry trends fuels my determination to make a lasting impact in the world of technology.
                  Let`s build something remarkable together!
                </p>
                <h2 className='text-2xl font-bold text-white pt-6'>Education</h2>
                <p className=" text-slate-200  text-xl">BSc. in Computer Science and Engineering (8th Semester)</p>
                <p className="pl-4 text-slate-400">International Islamic University Chittagong</p>
                <p className=" text-slate-200  text-xl">HSC (2019)</p>
                <p className="pl-4 text-slate-400">Govt. City College Chittagong</p>
                <p className=" text-slate-200  text-xl">SSC (2017)</p>
                <p className="pl-4 text-slate-400">Bakolia Govt. High School</p>
              </div>
            </div>

            {/* skills, contact, services, projects */}
            <div id='skills' className=' gap-8 mt-12 px-2 '>

              <div className=' space-y-2  rounded-xl h-full p-2'>
                <h2 className='text-3xl text-center text- font-bold text-[#615CD4]'>Skills</h2>
                <div className='md:grid lg:grid-cols-3  md:grid-cols-4  lg:gap-4 gap-2'>

                <div className='lg:col-span-3 col-span-4 rounded-xl p-2 bg-slate-900 md:mt-0 mt-2'>
                    <h1 className='text-center text-xl text-white font-bold py-2'>Languages & Algorithms</h1>
                    <div className='grid grid-cols-3 md:gap-6 gap-3'>
                      <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'><TbBrandJavascript />JavaScript</button>
                      <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'><SiTypescript /> TypeScript</button>
                      <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'><FaCode /> C</button>
                      <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'><SiCplusplus />C++</button>
                      <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'><AiTwotoneDatabase />DSA</button>
                    </div>
                  </div>

                  <div className='lg:col-span-2 col-span-3  rounded-xl md:p-2 p-1 bg-slate-900'>
                    <h1 className='text-center text-xl text-white font-bold py-2'>Front-end</h1>
                    <div className='grid md:grid-cols-3 grid-cols-2 lg:gap-6 gap-2 '>
                      <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'><AiFillHtml5 />HTML</button>
                      <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'><DiCss3 />CSS</button>
                      <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'><SiTailwindcss />Tailwind CSS</button>
                      <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'><FaReact />React</button>
                    </div>
                  </div>

                  <div className='rounded-xl p-2 bg-slate-800 md:mt-0 mt-2'>
                    <h1 className='text-center text-xl text-white font-bold py-2'>Back-end</h1>
                    <div className='grid grid-rows-2 gap-6'>
                      <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'><DiNodejsSmall />Node.js</button>
                      <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'><SiExpress />Express.js</button>
                    </div>
                  </div>
                  <div className='rounded-xl p-2 bg-slate-800 md:mt-0 mt-2'>
                    <h1 className='text-center text-xl text-white font-bold py-2'>Authentication & Database</h1>
                    <div className='grid grid-rows-2 gap-6'>
                      <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'><SiFirebase />Firebase</button>
                      <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'><SiMongodb />MongoDB</button>
                    </div>
                  </div>
                  <div className='lg:col-span-2 col-span-3  rounded-xl p-2 bg-slate-900 md:mt-0 mt-2'>
                    <h1 className='text-center text-xl text-white font-bold py-2'>Tools & Deployment</h1>
                    <div className='grid lg:grid-cols-3 grid-cols-2 gap-6'>
                      <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'><BiGitBranch />Git</button>
                      <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'><DiGithubBadge />Github</button>
                      <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'><SiCanva />Canva</button>
                      <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'><SiNetlify />Netlify</button>
                      <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'><SiVercel />Vercel</button>
                      <button className='btn bg-[#615CD4] text-xl text-white hover:translate-x-2 hover:bg-white hover:text-[#615CD4]'><BsTrello />Trello</button>

                    </div>
                  </div>
                </div>
              </div>



            </div>
          </section>
          <section className="max-w-xl mx-auto mt-12">
            <div className=' md:p-2 lg:p-0 md:flex lg:flex-col md:items-center lg:items-start w-full gap-2  h-full space-y-4'>
              <div id="services" className=" rounded-xl p-2 w-full">
                <h2 className='text-3xl text-center text- font-bold text-[#615CD4]'>Services</h2>
                <ul className="text-slate-300 text-xl">
                  <li className="flex items-center"><MdDragIndicator />Interactive and Dynamic website using React</li>
                  <li className="flex items-center"><MdDragIndicator />Backend Development using Node JS and Express JS</li>
                  <li className="flex items-center"><MdDragIndicator />JWT, Payment Gateway, Authentication</li>
                  <li className="flex items-center"><MdDragIndicator />Responsive Design</li>
                  <li className="flex items-center"><MdDragIndicator />Database management (MongoDB) to store Information</li>
                  <li className="flex items-center"><MdDragIndicator />Different Interface design for different role</li>
                </ul>
              </div>
            </div>
          </section>

          <section id='projects' className='mt-12 px-2'>
            <Projects></Projects>
          </section>
          <section className="mt-12 max-w-5xl mx-auto px-2">
            <div id="contact" className="rounded-xl bg-white p-2 lg:w-full">
              <h2 className='text-3xl text-center font-bold text-[#615CD4]'>Contacts</h2>
              <div className="md:flex justify-between items-center">
                <div className='flex flex-col gap-2 '>
                  <p className='flex gap-2 text-xl text-black hover:bg-black hover:text-[#615CD4]  p-2 hover:rounded-xl'><HiOutlineMail className="text-3xl" /> <a href={`mailto:asif311.cse@gmail.com`}>asif311.cse@gmail.com</a></p>
                  <p className='flex gap-2 text-xl text-black hover:bg-black hover:text-[#615CD4]  p-2 hover:rounded-xl'><AiOutlineWhatsApp className="text-3xl" /> <span>+88-01856685830</span></p>
                  <p className='flex gap-2 text-xl text-black hover:bg-black hover:text-[#615CD4]  p-2 hover:rounded-xl'><BiPhoneCall className="text-3xl" /> <span>+88-01322684693</span></p>

                </div>
                <div className='grid items-center md:justify-end justify-center grid-cols-2 gap-2'>
                  <a href="https://www.linkedin.com/in/mostafa-s-asif-cse/" className=' text-white flex items-center  hover:bg-white rounded bg-[#615CD4] hover:text-[#615CD4]  p-2 hover:rounded-xl'><AiFillLinkedin className="text-3xl" />Linkedin</a>
                  <a href="https://github.com/msasif2000" className=' text-white  flex items-center  hover:bg-white hover:text-[#615CD4] rounded bg-[#615CD4]  p-2 hover:rounded-xl'><AiFillGithub className="text-3xl" />Github</a>
                  <a href="https://asifshahblog.blogspot.com/" className=' text-white  hover:bg-white rounded bg-[#615CD4] hover:text-[#615CD4]  flex items-center   p-2 hover:rounded-xl'><FaBlogger className="text-3xl" />Blogger</a>
                  <a href="https://www.facebook.com/mostafa.asif.cse/" className=' text-white  hover:bg-white rounded bg-[#615CD4] hover:text-[#615CD4]  flex items-center   p-2 hover:rounded-xl'><AiFillFacebook className="text-3xl" />Facebook</a>
                </div>
              </div>
            </div>
          </section>

          <section style={homeStyle} className="p-20 mt-12 md:flex gap-8 justify-center items-center">
            <div>
              <p className="text-center text-xl text-white py-2">&copy; {currentYear},  All rights reserved by  MOSTAFA SHAHRIAR ASIF</p>
              <div className='flex justify-center items-center gap-8'>
                <a href="https://www.linkedin.com/in/mostafa-s-asif-cse/" className=' text-white  hover:bg-white rounded bg-[#615CD4] hover:text-[#615CD4]  p-2 hover:rounded-xl'><AiFillLinkedin className="text-3xl" /></a>
                <a href="https://github.com/msasif2000" className=' text-white  hover:bg-white hover:text-[#615CD4] rounded bg-[#615CD4]  p-2 hover:rounded-xl'><AiFillGithub className="text-3xl" /></a>
                <a href="https://asifshahblog.blogspot.com/" className=' text-white  hover:bg-white rounded bg-[#615CD4] hover:text-[#615CD4]  p-2 hover:rounded-xl'><FaBlogger className="text-3xl" /></a>
                <a href="https://www.facebook.com/mostafa.asif.cse/" className=' text-white  hover:bg-white rounded bg-[#615CD4] hover:text-[#615CD4]  p-2 hover:rounded-xl'><AiFillFacebook className="text-3xl" /></a>
              </div>

            </div>
            <div className="md:mt-0 mt-2 flex justify-center items-center "><img src={logo} alt="" className="h-40 w-40" /></div>

          </section>


          <ScrollTopArrow></ScrollTopArrow>
        </section>

      </div>
    </div>
  )
}

export default App
