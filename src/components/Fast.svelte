<script>
  import Register from './Register.svelte'
</script>

<div class="FastGame">
  <img src="images/logotipo.png" alt="">
  <Register />
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