<script>
  import Register from './Register.svelte'
</script>

<div class="FastGame">
  <img src="images/logotipo.png" alt="">
  <Register playerLimit={2}/>
</div>

<style>
  .FastGame {
/*    height: 100vh;*/
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 70vw;
    margin-top: 24px;
  }
</style>