<script>
  export let isMini = ""
</script>

<div class="Card {isMini}">
  <img src="images/user.svg" alt="">
  <div class="Card-form {isMini}">
    <label for="player" class="subtitle">Second</label>
    <input id="player" type="text" placeholder="Name" class="font-l">
    <button class="font-xl">List!</button>
  </div>
</div>

<style>
  .Card {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #E5E5E5;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    overflow: hidden;
  }
  .Card img {
    position: absolute;
    right: 0px;
    bottom: 0px;
    height: 100%;
  }

  .Card-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
    height: 100%;
    padding: 5% 0 5% 7.5%;
    box-sizing: border-box;
  }
  .Card-form label {
    width: 140%;
    font-size: 2rem;
    z-index: 1;
  }
  .Card-form input {
    width: 80%;
    font-size: 20px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #5b5b5b;
  }
  .Card-form button {
    color: white;
    width: 70%;
    height: 30%;
    background-color: #e7ba76;
    border: none;
    border-radius: 10px;
  }

  .mini {
    border-radius: 14px;
  }

  .mini > .subtitle {
    font-size: 16px;
  }

  .mini > input {
    font-size: 14px;
    border: none;
  }

  .mini > button {
    font-size: 14px;
    width: 65%;
    height: 28%;
    border-radius: 6px;
  }
</style>