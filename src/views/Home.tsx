import { useEffect, useState } from 'react'
import { getCookie } from '../api/cookie'
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("");
    const history = useNavigate()

    useEffect( () => {

        const userData = JSON.parse(getCookie("user") || "{}")
        
    if (userData) {
        const { jwt, username, rol } = userData

        setUsername(username)
        setRole(rol)
    } else {
        history("/login")
    }
        return () => {}
    })

    return (
    <>
        <Navbar />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet"></link>
        <div className="mt-32 mx-auto w-screen max-w-7xl">
            <div className='bg-white h-[42rem] rounded-lg p-8 shadow-xl overflow-hidden relative'>
                <img className='absolute w-screen grayscale opacity-5' src='https://cuevista.com/wp-content/uploads/2019/05/Technologies.png'/>
                
                <div className='relative mt-32'> 
                
                <style>
                    {
                        `
                        .xd {
                            text-shadow: -5px 5px, 5px 5px, 5px 5px;
                            color: rgb(34, 195, 139);
                        }
                        `
                    }
                </style>
                <div className='xd'>
                    <h1 className="text-9xl font-extrabold drop-shadow-lg tracking-widest italic mb-8">
                        EXPERTIZE
                    </h1>
                </div>
                    <p className="text-xl font-bold text-gray-700 mb-8">
                        Revolutionize seniority management with Expertize.
                    </p>
                    <p className="text-xl font-bold text-gray-700 mb-8">
                        Optimize resources, drive career growth.
                    </p>
                    <p className="text-xl font-bold text-gray-700 mb-8">
                        Unlock the full potential of your IT workforce.
                    </p>
                    { (role == "user" || role == "admin") && 
                    <p>Welcome, {username}</p>}
                    { (role != "user" && role != "admin") &&
                    <a href="/login" className="inline-block bg-[#009879] text-white py-2 px-4 rounded text-3xl font-semibold">Log in</a> }
                </div>
            </div>
        </div>
    </>
    );
}
