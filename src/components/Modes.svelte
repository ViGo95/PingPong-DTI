<script>

</script>

<div class="Modes">
  <div class="Modes-container">
    <div class="Modes-content">
      <a class="Mode tournament" href="tournament">
        <img src="images/cup.svg" alt="">
        <h2>Tournament</h2>
      </a>
      <a class="Mode league" href="/">
        <img src="images/league.svg" alt="">
        <h2>League</h2>
      </a>
      <a class="Mode fast" href="fast">
        <img src="images/table.svg" alt="">
        <h2>Fast Game</h2>
      </a>
      <a class="Mode random" href="/">
        <img src="images/random.svg" alt="">
        <h2>Random</h2>
      </a>
    </div>
  </div>
</div>

<style>
  .Modes-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .Mode {
    position: relative;
    color: #fff;
    font-size: 20px;
    width: 250px;
    height: 100px;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin: 0 0 24px 0;
    overflow: hidden;
  }
  .Mode > h2 {
    color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .Mode > img {
    position: absolute;
    bottom: 0px;
  }

  .tournament {
    background: #E7BA76;
  }
  .tournament > h2 {
    left: 20px;
  }
  .tournament > img {
    position: absolute;
    right: 0px;
  }
  .league {
    background: #76B7E7;
  }
  .league > h2 {
    right: 20px;
  }
  .fast {
    background: #E77676;
  }
  .fast > h2 {
    left: 20px;
  }
  .fast > img {
    position: absolute;
    right: 0px;
  }
  .random {
    background: #7ACC78;
  }
  .random > h2 {
    right: 20px;
  }
</style>