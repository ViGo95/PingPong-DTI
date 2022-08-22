<script>

  import { playersStore } from '../store/store'

  import Card from './Card.svelte'

  export let playerLimit = 16;

  let players

  playersStore.subscribe(value => {
    players = value
  })

</script>

<div class="Register">
  <div class="Register-container">
    <h2>Get the players ready...</h2>
    {#if players.length < playerLimit}
      <div class="Register-content">
        <Card />
      </div>
    {/if}
    <div class="Register-list">

      {#each players as player}
        <Card playerInfo={player}/>
      {/each}

    </div>

    <div class="Register-button">
      <a href="game" class="Ready-button">
        <h2>Let's Play</h2>
      </a>
    </div>
  </div>
</div>

<style>
  .Register {
    height: 80%;
  }

  .Register-container {
    height: 100%;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }

  .Register-container > h2 {
    margin: 0;
  }

  .Register-content {
    width: 80vw;
    height: 60vw;
    margin: 12px 0;
  }

  .Register-list {
    width: 80vw;
    height: 70%;
    padding: 20px;
    margin-bottom: 20px;
    flex-direction: column;
    overflow: scroll;
  }

  .Register-button {
    width: 100%;
  }

  .Ready-button {
    font-size: 35px;
    height: 60px;
    width: 100%;
    background: #7acc78;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    text-decoration: none;
  }

  a > h2 {
    color: #fff;
  }
</style>