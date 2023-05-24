import DataTable, { createTheme, TableColumn } from "react-data-table-component";
import light from "../../styles/tableStyles"
import { getCookie } from "../../api/cookie";
import { useEffect, useState } from "react"

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



const LeaderboardTable = () => {
    const [username, setUsername] = useState("")

    useEffect( () => {
        const getUsername = () => {
            const user = JSON.parse(getCookie("user") || "{}")
            const { username } = user;
        
            return username;
        }
        
        setUsername(getUsername())
    }, [username])

    const data =  [
        {
            id: 1,
            ranking: 1,
            user: 'Gacela Bailarina',
            points: 470,
        },
        {
            id: 2,
            ranking: 2,
            user: 'Gato Samurai',
            points: 300,
        },
        {
            id: 3,
            ranking: 3,
            user: 'Reno Parlante',
            points: 289,
        },
        {
            id: 4,
            ranking: 4,
            user: 'Anaconda Mundialista',
            points: 265,
        },
        {
            id: 5,
            ranking: 5,
            user: 'Minions nos funaron',
            points: 100,
        },
        {
            id: 6,
            ranking: 6,
            user: username,
            points: 80,
        },
        {
            id: 7,
            ranking: 7,
            user: 'Minion Parlante',
            points: 78,
        },
        {
            id: 8,
            ranking: 8,
            user: 'Oso Peligroso',
            points: 77,
        },
        {
            id: 9,
            ranking: 9,
            user: 'Foca Asesina',
            points: 75,
        },
        {
            id: 10,
            ranking: 10,
            user: 'Delfin Malabarista',
            points: 20,
        },
        {
            id: 11,
            ranking: 11,
            user: 'Perezoso Macabroso',
            points: 20,
        }
    ]
    
const conditionalRowStyles = [
    {
        when: (cells: { user: string; }) => cells.user == username,
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

