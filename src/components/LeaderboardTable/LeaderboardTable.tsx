import DataTable from "react-data-table-component";

const conditionalRowStyles = [
    {
      when: (row: { user: string; }) => row.user == 'Jguerra47',
      style: {
        backgroundColor: '#3478C1',
        color: 'white',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
];

const customStyles = {
    table:{
        style: {
            'border':'red dotted',
        },
    },
    rows: {
        style: {
            
        },
    },
    headCells: {
        style: {
            'border-radius':'22px',
            'justify-content':'center',
        },
    },
    cells: {
        style: {
            'justify-content':'center',
            
        },
    },
};

const columns = [
    {
        name: 'Ranking',
        selector: (row: { ranking: any; }) => row.ranking,
        sortable: true
    },
    {
        name: 'User',
        selector: (row: { user: any; }) => row.user,
        sortable: true
    },
    {
        name: 'Points',
        selector: (row: { points: any; }) => row.points,
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
]

const LeaderboardTable = () => {
    return(
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <DataTable
                title="LEADERBOARD"
                columns={columns}
                data={data}
                pagination
                customStyles={customStyles}
                conditionalRowStyles={conditionalRowStyles}
            />
        </div>
    );
}

export default LeaderboardTable;

