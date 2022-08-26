<script>
  import Score from "./Score.svelte";
  import Record from "./Timeline.svelte";

  import { modeStore, playersStore } from '../store/store'

  let gameMode

  modeStore.subscribe(value => gameMode = value)

</script>

  <div class="Game">
    {#if gameMode === 'tour'}
      <img src="images/logotipo-tour.png" alt="">
    {:else}
      <img src="images/logotipo.png" alt="">
    {/if}
    <div class="Game-play">
      <Score />
      <Record />
    </div>
  </div>

<style>
  .Game {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .Game-play {
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  img {
    height: 20vh;
  }
</style>