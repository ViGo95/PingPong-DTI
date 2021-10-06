<script>

  import { playersStore } from '../store/store'

  import Card from './Card.svelte'

  const players = []

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
        <Card isMini="mini"/>
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
  }

  .Register-content {
    width: 80vw;
    height: 45vw;
    margin: 12px 0;
  }

  .Register-list {
    display: grid;
    grid-template-columns: repeat(2, 37.75vw);
    grid-template-rows: repeat(auto, 20vw);
    grid-gap: 20px;
    width: 82vw;
    height: 55vw;
    margin: 36px 0 0 0;
  }
</style>