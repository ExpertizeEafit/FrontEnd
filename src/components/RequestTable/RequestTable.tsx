import DataTable, { TableColumn } from "react-data-table-component";
import { getCertificationRequests } from "../../api/certification";
import { useState, useEffect } from "react";
import light from "../../styles/tableStyles";



interface DataRow {
    id: number;
    name: string;
    last_update: string;
    status: string;
}

const columns: TableColumn<DataRow>[] = [
    {
        name: 'Technology',
        selector: (row: { name: any; }) => row.name,
    },
    {
        name: 'Upload at',
        selector: (row: { last_update: any; }) => row.last_update,
    },
    {
        name: 'Status',
        selector: row=> row.status,
        sortable: true
    },
];

const RequestTable = ({ updateHistory }: { updateHistory: boolean}) => {
    const [data, setData] = useState<any>([]);
    const [pending, setPending] = useState<any>(true);

    useEffect( () => {
        const data = getCertificationRequests();
        data.then(data => {
            data.forEach( (el, index) => el.id = index)
            setData(data)
            setPending(false);
        })
    }, [updateHistory])

    return(
        <div className="mt-8 mx-auto w-full max-w-prose rounded-xl">
            <DataTable
                columns={columns}
                data={data}
                pagination
                selectableRows
                customStyles={light}
                progressPending={pending}
            />
        </div>
    );
}

export default RequestTable;

