<script>
  import { playersStore, gameStore } from '../store/store'

  let players
  let serve
  let oldGame
  let deuce = false

  if (Math.floor(Math.random() * 2)) {
    serve = true
  } else {
    serve =false
  }

  playersStore.subscribe(value => players = value)
  gameStore.subscribe(value => oldGame = value)

  let changePointBtn = (btn) => {

    if(btn) {
      let pointBtn = document.getElementById(btn)

      pointBtn.style.backgroundColor = "#E7BA76"
    } else {

      let pointBtn = document.getElementsByClassName("btn")

      pointBtn[0].style.backgroundColor = "#7ACC78"   // Mejorar logica.
      pointBtn[1].style.backgroundColor = "#7ACC78"   // Mejorar logica.
    }
  }

  let getPoint = (player) => {

    players[player].points += 1

    serve = !serve

    let game ={
      serve: serve === true ? 1 : 2,
      point: players[player].id
    }

    if(oldGame.length === 0) {
      game.play = 1
    } else {
      game.play = oldGame.length + 1
    }

    gameStore.update(values => ([...values, game]))

    if(players[0].points >= 10 && players[0].points > players[1].points) {
      changePointBtn("pointBtn1")
      deuce = true
    } else if(players[1].points >= 10 && players[1].points > players[0].points) {
      changePointBtn("pointBtn2")
      deuce = true
    } else if(deuce && players[0].points === players[1].points) {
      changePointBtn()
      deuce = false
    }

    playersStore.set(players)
  }

</script>

  <div class="Score">

    {#if (players[0].points >= 11 && players[0].points > players[1].points + 1) || (players[1].points >= 11 && players[1].points > players[0].points + 1)}
      <div class="Score-content_end">
        <div class="players">
          <div class="score-player player1">
            <div class="score-player_name">
              <h2 class="player1-info">{players[0].name}</h2>
            </div>
            <div class="score-player_points">
              <h2 class="player1-info">{players[0].points}</h2>
            </div>
          </div>
          <div class="score-player player2">
            <div class="score-player_name">
              <h2 class="player2-info">{players[1].name}</h2>
            </div>
            <div class="score-player_points">
              <h2 class="player2-info">{players[1].points}</h2>
            </div>
          </div>
        </div>
        <div class="Score-endgame">
          <a href="/">Go Next!</a>
        </div>
      </div>

    {:else}

      <div class="Score-content">
        <div class="score-player player1 {serve === true ? 'serving' : ''}">
          <div class="score-player_name">
            <h2>{players[0].name}</h2>
          </div>
          <div class="score-player_points">
            <h2>{players[0].points}</h2>
          </div>
          <div class="score-player_button">
            <button id="pointBtn1" class="btn" on:click={() => getPoint(0)}>
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
            <button id="pointBtn2" class="btn" on:click={() => getPoint(1)}>
              Point
            </button>
          </div>
        </div>
      </div>
    {/if}
  </div>

<style>
  .Score {
    background-color: #E5E5E5;
    width: 80vw;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }

  .Score-content {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .players {
    width: 100%;
    height: 75%;
    display: flex;
  }

  .Score-content_end {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

  .Score-endgame {
    font-size: 24px;
    height: 15%;
    width: 90%;
    background: #7acc78;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    text-decoration: none;
  }

  .Score-endgame a {
    color: #E5E5E5;
    text-decoration: none;
  }
</style>