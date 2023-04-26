import DataTable from "react-data-table-component";

const columns = [
    {
        name: 'Ranking',
        selector: (row: { ranking: any; }) => row.ranking,
    },
    {
        name: 'User',
        selector: (row: { user: any; }) => row.user,
    },
    {
        name: 'Points',
        selector: (row: { points: any; }) => row.points,
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
            />
        </div>
    );
}

export default LeaderboardTable;

