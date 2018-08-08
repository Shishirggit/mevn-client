<template>
  <div>
    <form action="" >
      <input id="m" autocomplete="off" v-model="chat"/><button @click.prevent="send">Send</button>
    </form>
    <br><br>
    <br>
    <ul id="messages"><li v-for="(chatb,index) in chatData" v-bind:key="index">{{chatb}}</li></ul>
  </div>
</template>

<script>
// import io from 'socket.io-client'

export default {
  name: 'HelloWorld',
  data () {
    return {
      chat: '',
      chatData: [],
      socket: null
    }
  },
  mounted () {
  /*  this.socket = io('http://localhost:3000/')
    this.socket.on('broadcast', (msg) => {
      this.chatData.push(msg)
    }) */
  },
  methods: {
    send () {
      this.socket.emit('chat message', this.chat)
      this.chat = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font: 13px Helvetica, Arial; }
  form { background: #fff; padding: 3px; position: fixed; bottom: relative; width: 100%; }
  form input { border: 1px; padding: 10px; width: 90%; margin-right: .5%; border-color: red; }
  form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
  #messages { list-style-type: none; margin: 0; padding: 0; }
  #messages li { padding: 5px 10px; }
  #messages li:nth-child(odd) { background: #eee; }
</style>
