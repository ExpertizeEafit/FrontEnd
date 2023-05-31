import LeaderboardTable from "../components/LeaderboardTable";
import Navbar from "../components/Navbar";
import Title from "../components/Title/Title";

export default function Home() {

    return (
        <>
        <Navbar />
        <Title title="Leaderboard"/>
        <div>
            <LeaderboardTable/>
        </div>
    </>
    );
}
