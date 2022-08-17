<script>
  import Register from './Register.svelte'
</script>

<div class="Tournament">
  <img src="images/logotipo-tour.png" alt="">
  <Register />
</div>

<style>
  .Tournament {
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