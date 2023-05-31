import { useEffect, useState } from 'react';
import RequestTable from '../components/RequestTable';
import UploadPDF from '../components/UploadPDF';
import Navbar from '../components/Navbar';
import { getCertificationRequests } from '../api/certification';
import { CertificationResponse } from '../types/Types';
import Title from '../components/Title/Title';

export default function Home() {
    const [updateHistory, setUpdateHistory] = useState<boolean>(false);
    const [data, setData] = useState<CertificationResponse>({})
    const [loading, setLoading] = useState<boolean>(true)

    const handleUpload = () => {
        setUpdateHistory(!updateHistory)
    }
    
    useEffect( () => {
        const data = getCertificationRequests();
        data.then(data => {
            setData(data)
            setLoading(false)
        })
    }, [updateHistory])

    return (
        <>
        <Navbar />
        <Title title="My certificates"/>
        <div className='flex flex-wrap '>
            <RequestTable loading={loading} certificationsHistory={data.certifications_history}/>
            <UploadPDF handleUpdate={handleUpload} availableRequirements={data.available_requirements}/>
        </div>
        </>
    );
}

