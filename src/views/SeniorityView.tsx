import { useEffect, useState } from 'react'
import reactLogo from './../assets/react.svg'
import viteLogo from '/vite.svg'
import { getLearning } from '../api/learning';
import { Seniority} from '../types/Types';
import SeniorityLevel from '../components/SeniorityLevel/SeniorityLevel';
import Navbar from '../components/Navbar';
import Title from '../components/Title/Title';

export default function SeniorityView() {
    const [data, setData] = useState<Seniority[]>([]);

    useEffect(() => {
        getLearning().then((data: Seniority[]) => setData(data));
    }, []);

    return (

        <>
      <Navbar />
        
        <div className="flex flex-col items-center justify-center h-full">
            <Title title="Seniorities learning path"/>
            <div className="flex flex-col items-center justify-center">
                {data.map((item) => <SeniorityLevel key={item.name} seniorityLevel={item} />)}
            </div>
        </div>

        </>
    );

}