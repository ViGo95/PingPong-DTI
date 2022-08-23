<script>
  import Score from "./Score.svelte";

  import { gameStore, playersStore } from '../store/store'

  let gameMode

  gameStore.subscribe(value => gameMode = value)

</script>

  <div class="Game">
    {#if gameMode === 'tour'}
      <img src="images/logotipo-tour.png" alt="">
    {:else}
      <img src="images/logotipo.png" alt="">
    {/if}
    <div class="Game-play">
      <Score />
    </div>
  </div>

<style>
  .Game {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .Game-play {
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  img {
    height: 20vh;
  }
</style>