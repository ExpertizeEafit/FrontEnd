import { useState } from 'react'
import reactLogo from './../assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../components/Navbar';

export default function Home() {
    const [count, setCount] = useState<number>(0)

    return (
    <>
        <Navbar />
        <div className="mt-32 mx-auto w-screen max-w-7xl">
            <div className='bg-white h-[42rem] rounded-lg p-8 shadow-xl overflow-hidden relative'>
                <img className='absolute w-screen grayscale opacity-10' src='https://cuevista.com/wp-content/uploads/2019/05/Technologies.png'/>
                
                <div className='relative mt-32'>
                    <h1 className="text-9xl font-bold text-teal-500 mb-8">Expertize</h1>
                    <p className="text-xl font-bold text-gray-700 mb-8">Expertize platform offers a comprehensive and efficient solution for managing seniorities in IT companies. With its user-friendly interface and powerful features, it simplifies the process of evaluating and tracking the expertise levels of employees. From junior developers to senior architects, Expertize provides a centralized platform to assess, analyze, and nurture talent within your organization.</p>
                    <a href="/login" className="inline-block bg-teal-500 text-white py-2 px-4 rounded text-3xl font-semibold">Log in</a>
                </div>
            </div>
        </div>
    </>
    );
}
