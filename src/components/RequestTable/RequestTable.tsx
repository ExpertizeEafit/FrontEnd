import DataTable from "react-data-table-component";

const columns = [
    {
        name: 'Technology',
        selector: (row: { tech: any; }) => row.tech,
    },
    {
        name: 'Upload at',
        selector: (row: { upl: any; }) => row.upl,
    },
    {
        name: 'Status',
        selector: (row: { status: any; }) => row.status,
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
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <DataTable
                title="Request history"
                columns={columns}
                data={data}
                pagination
                selectableRows
            />
        </div>
    );
}

export default RequestTable;

