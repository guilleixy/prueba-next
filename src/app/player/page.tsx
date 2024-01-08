import DoughnutChart from "@/components/general/DoughnutChart"
import ItemIcon from "@/components/general/ItemIcon"
import GameHistory from "@/components/player/GameHistory"

export default function Page() {
  return (
    <>
    <section>
      <article>
        <div className="flex">
          <h2>Player Name</h2>
          <h3>Player ID</h3>
        </div>
      </article>
      <article>
        <button>Add Friend</button>
      </article>
    </section>
    <section>
      <article>
        <h2>
          RANK <span>33</span>
        </h2>
      </article>
      <article>
        <div>
          <h3>WINRATE</h3>
          <DoughnutChart percentages={[115,11]}/>
        </div>
      </article>
    </section>
    <section>
      <article>
        <h3>GAME HISTORY</h3>
        <GameHistory />
      </article>
      <article>
        <h3>GAME HIGHLIGHTS</h3>
      </article>
    </section>
    <section>
      <article>
        <h3>LEADERBOARDS</h3>
        <ItemIcon name="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png" />
      </article>
    </section>
    </>
  )
}