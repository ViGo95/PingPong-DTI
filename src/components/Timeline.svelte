<script>
  import { playersStore, gameStore } from '../store/store'

  let players
  let games

  playersStore.subscribe(value => players = value)
  gameStore.subscribe(value => games = value)
</script>

<div class="Timeline">
  <div class="Timeline-container">
    {#each games as game}
      <div class="Timeline-play">
        <div class="Timeline-P1 timeline-item">
          {#if game.point === 1 || game.serve === 1}
            <div class="point">
              {#if game.serve === 1 && game.point === 1}
                <img src="images/serve.png" alt="">
                <img src="images/point.png" alt="">
              {:else if game.serve === 1}
                <img src="images/serve.png" alt="">
              {:else if game.point === 1}
                <img src="images/point.png" alt="">
              {/if}
            </div>
          {/if}
        </div>
        <div class="Timeline-serve timeline-item">
          <h2>
            #{game.play}
          </h2>
        </div>
        <div class="Timeline-P2 timeline-item">
          {#if game.point === 2 || game.serve === 2}
            <div class="point">
              {#if game.serve === 2 && game.point === 2}
                <img src="images/serve.png" alt="">
                <img src="images/point.png" alt="">
              {:else if game.serve === 2}
                <img src="images/serve.png" alt="">
              {:else if game.point === 2}
                <img src="images/point.png" alt="">
              {/if}
            </div>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .Timeline {
    width: 80vw;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow-y: scroll;
  }

  .Timeline-container {
    width: 80%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;
  }

  .Timeline-play {
    height: 6vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .timeline-item {
    width: 35%;
    text-align: center;
  }

  .Timeline-serve {
    width: 20%;
  }

  .timeline-item h2 {
    height: 100%;
    margin: 0;
  }
</style>