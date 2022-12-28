import { useState } from 'react';
import './App.css';
import Navbar from './Navbar'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail, AiFillEnvironment, AiFillPhone} from 'react-icons/ai'
import alphamale from "../src/assets/alphamale.png"
import radical from "../src/assets/radical.png"

function App() {
  return (
    <main className='px-8 md:px-20 lg:px-40'>
    
    <Navbar />

    <section id='home' className='min-h-screen text-center mt-4 flex flex-col justify-center '>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2">
          <img src='/avatar.png' layout="fill" objectFit="cover" />
        </div>
        <h1 className='text-3xl md:text-5xl font-medium text-teal-500'>Ahmed Larbi</h1>
        <h3 className='text-xl md:text-2xl'>MERN Developer & Full stack Software Engineer</h3>
        <p className='text-md py-1 text-gray-800 md:text-xl'>Enthusiastic and motivated self-learning about information technology. Focused on MERN stack developmenet and web development. Now I am looking for more experience in my field. </p>
        <div className='text-5xl py-4 flex justify-center gap-16 text-gray-600'>
          <AiFillLinkedin /> 
          <AiFillGithub />
        </div>
    </section>

    <section id='service' className=''>
      <h1 className='text-xl font-medium'>Services I Offer</h1>
      <p className='mt-1 text-md'>I have experience in building an application and creating cloud architecture as an integration to provide business and consumer solutions. I offer a wide of service, including Frontend & Backend Development</p>

      <div className='mt-4 flex flex-col md:flex-row gap-8'>
        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='software.png' className='w-48' alt='gambar' />
          <h2 className='text-xl'>Frontend Development</h2>
          <p className='text-gray-500'>I can help you solve a problem, build a product or grow existing project.</p>
          <p className='text-xl '>Tools I Use</p>
          <ul>
            <li>React (Redux)</li>
            <li>HTML & CSS(Bootstrap & Tailwind)</li>
            <li>Python (Flask)</li>
          </ul>
        </div>


        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='ops.png' className='w-48' alt='gambar' />
          <h2 className='text-xl'>Backend Development</h2>
          <p className='text-gray-500'>I can help you solve a problem, build a product or grow existing project.</p>
          <p className='text-xl '>Tools I Use</p>
          <ul>
            <li>Nodejs (Express)</li>
            <li>Socket IO</li>
            <li>Mongo Atlas</li>
            <li>Linux & Ubuntu</li>
          </ul>
        </div>

      </div>

    </section>

    <section id='portfolio' className='mt-10'>
      <h1 className='text-xl font-medium'>Portfolio</h1>
      <p className='mt-1 text-md'>Here are some projects that I have managed.</p>
      <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src={alphamale} className='w-48' alt='gambar' />
          <h2 className='text-xl'>Alpha Male</h2>
          <p className='text-gray-500'>Fully equiped E-Commerce web application that sells men accessories</p>
          <p className='text-xl '>Tools I Use</p>
          <ul>
            <li>React (Redux)</li>
            <li>HTML & CSS(Bootstrap & Tailwind)</li>
            <li>NodeJS (Express)</li>
            <li>
              MongoDB
            </li>
          </ul>
        </div>
        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src={radical} className='w-60' alt='gambar' />
          <h2 className='text-xl'>Radical Internship</h2>
          <p className='text-gray-500'>I worked with RadicalX as an Intern and helped Implement their new feature to </p>
          <p className='text-xl '>Tools I Use</p>
          <ul>
            <li>React (Redux)</li>
            <li>HTML & CSS(Bootstrap & Tailwind)</li>
            <li>Python (Flask)</li>
          </ul>
        </div>
    </section>

    <section id='license' className='mt-10'>
      <h1 className='text-xl font-medium'>License & Certifications</h1>
      <p className='mt-1 text-md'>Here are some of the certifications I have.</p>
      
      <div className='flex flex-col md:flex-row gap-8 mt-4'>
        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='https://source.unsplash.com/random' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Dasar Pemrograman Javascript</h1>
            <p className=''>Dicoding Indonesia</p>
            <p className='text-sm text-gray-500'>May 2023</p>
          </div>
        </div>

        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='https://source.unsplash.com/random' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Dasar Pemrograman Javascript</h1>
            <p className=''>Dicoding Indonesia</p>
            <p className='text-sm text-gray-500'>May 2023</p>
          </div>
        </div>

        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='https://source.unsplash.com/random' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Dasar Pemrograman Javascript</h1>
            <p className=''>Dicoding Indonesia</p>
            <p className='text-sm text-gray-500'>May 2023</p>
          </div>
        </div>
      </div>

    </section>

    <section id="footer" className='mt-5 rounded bg-gray py-8 px-8'>
      <div className='text-black md:text-center'>
        <h1 className='font-medium text-lg'>Contact Me</h1>
        <p>Wanna talk anything?</p>

        <ul className='md:flex justify-center gap-4'>
          <li className='flex items-center gap-2'>
            <AiFillMail />
            <p>ahmedlarbiofficial@gmail.com</p>
          </li>
          <li className='flex items-center gap-2'>
            <AiFillEnvironment />
            <p>UAE, Dubai</p>
          </li>
          <li className='flex items-center gap-2'>
            <AiFillPhone/>
            <p>00971-503733067</p>
          </li>
        </ul>

        <div className='flex text-xl text-white gap-4 mt-2 md:justify-center'>
          <AiFillLinkedin /> 
          <AiFillGithub />
          <AiFillInstagram />
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>

        <p className="text-center text-sm text-gray-300 sm:text-center">
          © 2022
          <a> Ahmed Larbi </a>. All Rights Reserved.
        </p>

      </div>
      
    </section>

    </main>
  );
}

export default App;
