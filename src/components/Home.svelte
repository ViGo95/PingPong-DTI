<script>
  import Modes from "./Modes.svelte";

  import { playersStore, gameStore, modeStore } from '../store/store'

  (function cleanStore() {
    playersStore.set([])
    gameStore.set([])
    modeStore.set()
  })()
</script>

<div class="Home">
  <img src="images/logotipo.png" alt="">

  <Modes />

  <footer>
    <h5>© 2022 | NOC SERVIEDUCA</h5>
  </footer>
</div>

<style>
  .Home {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  img {
    width: 30vh;
  }

  footer {
    width: 100%;
    height: 4%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h5 {
    margin: 0;
  }
</style>