import { useEffect, useState } from 'react';
import RequestTable from '../components/RequestTable';
import UploadPDF from '../components/UploadPDF';
import Navbar from '../components/Navbar';

export default function Home() {
    const [updateHistory, setUpdateHistory] = useState<boolean>(false);

    const handleUpload = () => {
        setUpdateHistory(!updateHistory)
    }
    useEffect( () => {
        
    }, [handleUpload])

    return (
        <>
        <Navbar />
        
        <div className='flex flex-wrap '>
            <RequestTable updateHistory={updateHistory}/>
            <UploadPDF handleUpdate={handleUpload}/>
        </div>
        </>
    );
}
