import DataTable, { createTheme, TableColumn } from "react-data-table-component";
import light from "../../styles/tableStyles"



interface DataRow {
    id: number;
    tech: string;
    upl: string;
    status: string;
}

const columns: TableColumn<DataRow>[] = [
    {
        name: 'Technology',
        selector: row => row.tech,
    },
    {
        name: 'Upload_at',
        selector: row => row.upl,
    },
    {
        name: 'Status',
        selector: row=> row.status,
        sortable: true
    },
];

const data = [
    {
        id: 1,
        tech: 'Python',
        upl: '25/04/2023',
        status: 'REJECTED',
    },
    {
        id: 2,
        tech: 'Python',
        upl: '26/04/2023',
        status: 'ACCEPTED',
    },
]

const RequestTable = () => {
    return(
        <div className="mt-8 mx-auto w-full max-w-prose rounded-xl">
            <DataTable
                columns={columns}
                data={data}
                pagination
                selectableRows
                customStyles={light}
            />
        </div>
    );
}

export default RequestTable;

