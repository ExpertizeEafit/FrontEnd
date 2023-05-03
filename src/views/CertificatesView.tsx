import RequestTable from '../components/RequestTable';
import UploadPDF from '../components/UploadPDF';

export default function Home() {
    return (
        <div className='flex flex-wrap '>
            <RequestTable/>
            <UploadPDF/>
        </div>
    );
}
