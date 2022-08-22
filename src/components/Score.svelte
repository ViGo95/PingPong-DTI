<script>
  import { playersStore } from '../store/store'

  let players
  let serve = true

  playersStore.subscribe(value => players = value)

  console.log(players)
  let point = (player) => {

    players[player].points += 1

    serve = !serve
  }

</script>

<div class="Game">
  <div class="Game-score">
    <div class="Game-score_content">
      <div class="score-player player1 {serve === true ? 'serving' : ''}">
        <div class="score-player_name">
          <h2>{players[0].name}</h2>
        </div>
        <div class="score-player_points">
          <h2>{players[0].points}</h2>
        </div>
        <div class="score-player_button">
          <button on:click={() => point(0)}>
            Point
          </button>
        </div>
      </div>
      <div class="score-player player2 {serve === false ? 'serving' : ''}">
        <div class="score-player_name">
          <h2>{players[1].name}</h2>
        </div>
        <div class="score-player_points">
          <h2>{players[1].points}</h2>
        </div>
        <div class="score-player_button">
          <button on:click={() => point(1)}>
            Point
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .Game {
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .Game-score {
    background-color: #E5E5E5;
    width: 80vw;
    height: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }

  .Game-score_content {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .score-player {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .player1 {
    border-right: 1px solid;
    border-color: #A4A4A4;
  }

  .player2 {
    border-left: 1px solid;
    border-color: #A4A4A4;
  }

  .serving {
    background-image: url(images/Racquet.png);
    background-repeat: no-repeat;
    background-position: center;
  }

  .score-player_name h2 {
    margin: 0;
  }

  .score-player_points h2 {
    font-size: 100px;
    margin: 0;
  }

  .score-player_button {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
  }

  .score-player_button button {
    font-size: 24px;
    color: white;
    width: 70%;
    height: 100%;
    background-color: #7ACC78;
    border: none;
    border-radius: 10px;
  }
</style>