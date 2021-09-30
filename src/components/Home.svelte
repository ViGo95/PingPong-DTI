<script>
  import Modes from "./Modes.svelte";
</script>

<div class="Home">
  <img src="images/logotipo.png" alt="">

  <Modes />
</div>

<style>
  .Home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 70vw;
  }
</style>