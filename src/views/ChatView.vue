<script>
  //import Chat from '../components/Chat.vue'
  import moment from 'moment'
  import NewMessage from '../components/NewMessage.vue'

  import firebaseApp from '../firebase/init'

  export default {
    name: 'chat',
    props: ['name'],
    components: {
      NewMessage
    },
    data(){
        return {
          messages: [],
        }
    },
    created(){
        this.$http.get('https://vue-chat-2094a-default-rtdb.europe-west1.firebasedatabase.app/messages.json').then(function(data){
            this.messages = data.body
        }),
        console.log(firebaseApp.database())
    },
    filters: {
      'date-formatting': function(value){
        return moment(value).format('MM/DD/YYYY hh:mm')
      }
    }
}
</script>

<template>
  <div class="chat container">
      <h2 class="center teal-text">Chat</h2>
      <div class="card">
        <div class="card-content">
          <ul class="messages">
            <li v-for="message in messages">
              <span class="teal-text">{{ message.name }}</span><br>
              <span class="grey-text text-darken-3">{{ message.content }}</span>
              <span class="grey-text time">{{ message.date | date-formatting }}</span>
            </li>
          </ul>
        </div>
        <div class="card-action">
          <NewMessage v-bind:name="name" />
        </div>
      </div>
  </div>
</template>

<style>
.chat h2{
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span{
  font-size: 1.4em;
}
.chat .time{
  display: block;
  font-size: 1.2em;
}
</style>