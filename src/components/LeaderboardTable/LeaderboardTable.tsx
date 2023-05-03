import DataTable, { createTheme, TableColumn } from "react-data-table-component";
import light from "../../styles/tableStyles"



const conditionalRowStyles = [
    {
        when: (cells: { user: string; }) => cells.user == 'Jguerra7',
        style: {
            backgroundColor: '#000',
            color: 'white',
        },
        classNames: ['pruebita']
    },
    {
        when: (row: { ranking: number; }) => row.ranking == 4,
        style: {
            
        },
    },
    {
        when: (row: { ranking: number; }) => row.ranking == 1,
        style: {
            backgroundColor: '#ffecb8',
            fontWeight: 'bold',
            color: '#f5bf2a',
        },
    },
    {
        when: (row: { ranking: number; }) => row.ranking == 2,
        style: {
            backgroundColor: '#e7e7e7',
            fontWeight: 'bold',
            color: '#b0b0b0',
        },
    },
    {
        when: (row: { ranking: number; }) => row.ranking == 3,
        style: {
            backgroundColor: '#ebd4be',
            fontWeight: 'bold',
            color: '#db944d',
        },
    }
];


interface DataRow {
    id: number;
    ranking: number;
    user: string;
    points: number;
}

const columns: TableColumn<DataRow>[] = [
    {
        name: 'Ranking',
        selector: row => row.ranking,
        sortable: true,
        conditionalCellStyles: [{
                when: (cell: { ranking: number; }) => cell.ranking == 1,
                style: {
                    backgroundColor: '#ffdc7d',
                    fontWeight: 'bold',
                    borderRight: '#f5bf2a solid 1px',
                }
            },
            {
                when: (cell: { ranking: number; }) => cell.ranking == 2,
                style: {
                    backgroundColor: '#d0d0d0',
                    fontWeight: 'bold',
                    borderRight: '#b0b0b0 solid 1px',
                }
            },
            {
                when: (cell: { ranking: number; }) => cell.ranking == 3,
                style: {
                    backgroundColor: '#e8c39e',
                    fontWeight: 'bold',
                    borderRight: '#db944d solid 1px',
                }
            }
        ]
    },
    {
        name: 'User',
        selector: row => row.user,
    },
    {
        name: 'Points',
        selector: row=> row.points,
        sortable: true
    },
];

const data = [
    {
        id: 1,
        ranking: 1,
        user: 'Jguerra47',
        points: 470,
    },
    {
        id: 2,
        ranking: 2,
        user: 'Jecheverri',
        points: 300,
    },
    {
        id: 3,
        ranking: 3,
        user: 'MrSossa',
        points: 289,
    },
    {
        id: 4,
        ranking: 4,
        user: 'Jacevar',
        points: 265,
    },
    {
        id: 5,
        ranking: 5,
        user: 'JuPrietoM',
        points: 100,
    },
    {
        id: 6,
        ranking: 6,
        user: 'Jguerra7',
        points: 80,
    },
    {
        id: 7,
        ranking: 7,
        user: 'Jecheverri',
        points: 78,
    },
    {
        id: 8,
        ranking: 8,
        user: 'MrSossa',
        points: 77,
    },
    {
        id: 9,
        ranking: 9,
        user: 'Jacevar',
        points: 75,
    },
    {
        id: 10,
        ranking: 10,
        user: 'JuPrietoM',
        points: 60,
    },
    {
        id: 11,
        ranking: 11,
        user: 'Jacevar',
        points: 40,
    },
    {
        id: 12,
        ranking: 12,
        user: 'JuPrietoM',
        points: 20,
    },
]

const LeaderboardTable = () => {
    return(
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-prose rounded-xl">
            <DataTable
                columns={columns}
                data={data}
                customStyles={light}
                pagination
                conditionalRowStyles={conditionalRowStyles}
            />
        </div>
    );
}

export default LeaderboardTable;

