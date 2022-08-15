<script>

  import { playersStore } from '../store/store'

  export let playerInfo
  let playersList

  playersStore.subscribe(value => playersList = value)

  let numbers = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen'
  ]

  function listPlayer() {
    let player = {
      id: playersList.length + 1,
      name: document.getElementById('name').value
    }

    player.number = numbers[playersList.length]

    playersStore.update(values => ([...values, player]))

    document.getElementById('name').value = ''

  }

</script>

{#if playerInfo}

  <div class="mini">
    <img src="images/user.svg" alt="">
    <div class="mini-form">
      <label for="player" class="subtitle">{playerInfo.number}</label>
      <h5>{playerInfo.name}</h5>
      <button class="font-xl color{playerInfo.id}">Listed</button>
    </div>
  </div>

{:else}

  <div class="Card">
    <img src="images/user.svg" alt="">
    <div class="Card-form">
      <label for="player" class="subtitle">{numbers[playersList.length]}</label>
      <input id="name" type="text" placeholder="Name" class="font-l">
      <button on:click={listPlayer} class="font-xl">List!</button>
    </div>
  </div>

{/if}

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
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: #E5E5E5;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    overflow: hidden;
    border-radius: 14px;
    box-sizing: border-box;
    margin: 0 0 20px 0;
    padding: 0 0 0 20px;
  }
  .mini img {
    position: absolute;
    right: 0px;
    bottom: 0px;
    height: 100%;
  }

  .mini-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
  }

  .mini-form > .subtitle {
    font-size: 30px;
  }

  .mini-form > h5 {
    font-size: 14px;
    border: none;
  }

  .mini-form > button {
    color: white;
    font-size: 14px;
    width: 35%;
    height: 35px;
    border-radius: 6px;
    border: none;
  }
</style>