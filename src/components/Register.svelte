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
    <a href="/" class="Ready-button">
      <h2>Let's Play</h2>
    </a>
  </div>
</div>

<style>
  .Register-container {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }

  .Register-content {
    width: 80vw;
    height: 45vw;
    margin: 12px 0;
  }

  .Register-list {
    flex-direction: column;
    width: 80vw;
    margin: 36px 0 0 0;
    padding: 0 0 36px 0;
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