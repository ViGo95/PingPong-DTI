<script>
  import Modes from "./Modes.svelte";
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
    width: 70vw;
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