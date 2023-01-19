<script>
  //import Chat from '../components/Chat.vue'
  import moment from 'moment'
  import NewMessage from '../components/NewMessage.vue'

  import firebaseApp from '../firebase/init'
  import { getDatabase, ref, child, get } from "firebase/database";

  const dbRef = ref(getDatabase(firebaseApp));

  
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
        get(child(dbRef, 'messages')).then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            this.messages = snapshot.val()
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
    },
    filters: {
      'date-formatting': function(value){
        return moment(value).format('DD/MM/YYYY HH:mm:ss')
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