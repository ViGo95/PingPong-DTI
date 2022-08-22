<script>

  import { playersStore } from '../store/store'

  export let playerInfo
  let playersList

  playersStore.subscribe(value => playersList = value)

  // let numbers = [
  //   'One',
  //   'Two',
  //   'Three',
  //   'Four',
  //   'Five',
  //   'Six',
  //   'Seven',
  //   'Eight',
  //   'Nine',
  //   'Ten',
  //   'Eleven',
  //   'Twelve',
  //   'Thirteen',
  //   'Fourteen',
  //   'Fifteen',
  //   'Sixteen'
  // ]

  function listPlayer() {
    let name = document.getElementById('name').value.replaceAll(' ', '');
    if(name) {
      let player = {
        id: playersList.length + 1,
        name: document.getElementById('name').value,
        points: 0
      }

      playersStore.update(values => ([...values, player]))

      document.getElementById('name').value = ''
    }
    document.getElementById('name').value = ''
  }

</script>

{#if playerInfo}

  <div class="mini">
    <div class="mini-content">
      <div class="mini-number color{playerInfo.id}">
        <h2>#{playerInfo.id}</h2>
      </div>
      <h2 class="mini-name">{playerInfo.name}</h2>
      <button class="color2">Del</button>
    </div>
  </div>

{:else}

  <div class="Card">
    <img src="images/user.svg" alt="">
    <div class="Card-form">
      <label for="player" class="subtitle">#{playersList.length + 1}</label>
      <input id="name" type="text" placeholder="Name" class="font-l">
      <button on:click={listPlayer} class="font-xl color{playersList.length + 1}">List!</button>
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
    /* background-color: #e7ba76; */
    border: none;
    border-radius: 10px;
  }

  .mini {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 8vh;
    background-color: #E5E5E5;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    overflow: hidden;
    border-radius: 14px;
    box-sizing: border-box;
    margin: 0 0 20px 0;
  }

  .mini-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .mini-number {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 35%;
    text-align: center;
  }

  .mini-number > h2 {
    color: #FFF;
    margin: 0;
  }

  .mini-content > button {
    color: #FFF;
    border: none;
    width: 15%;
    height: 100%;
  }
</style>