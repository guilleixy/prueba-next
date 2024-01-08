import LiveGame from "./LiveGame";

export default function LiveGames() {
    return(
        <section>
            <h2>LIVE GAMES</h2>
            <ul className="flex">
                <LiveGame />
                <LiveGame />
                <LiveGame />
                <LiveGame />
                <LiveGame />
            </ul>
        </section>
    )
}