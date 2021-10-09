<script>

  import { playersStore } from '../store/store'

  import Card from './Card.svelte'

  let players

  playersStore.subscribe(value => {
    players = value
  })

</script>

<div class="Register">
  <div class="Register-container">
    <h2>Get the players ready...</h2>
    <div class="Register-content">
      <Card />
    </div>
    <div class="Register-list">

      {#each players as player}
        <Card playerInfo={player}/>
      {/each}

    </div>
  </div>
</div>

<style>
  .Register-container {
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
</style>