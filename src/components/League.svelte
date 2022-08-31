<script>
  import Register from './Register.svelte'

  import { gameStore } from '../store/store'
  let gameMode = 'league'

  gameStore.update(value => gameMode)

</script>

<div class="League">
  <img src="images/logotipo-tour.png" alt="">
  <Register />
</div>

<style>
  .League {
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