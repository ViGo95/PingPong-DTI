<script>
  import Register from './Register.svelte'

  import { gameStore } from '../store/store'
  let gameMode = 'fast'

  gameStore.update(value => gameMode)

</script>

<div class="FastGame">
  <img src="images/logotipo.png" alt="">
  <Register playerLimit={2}/>
</div>

<style>
  .FastGame {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  img {
    height: 20vh;
  }
</style>