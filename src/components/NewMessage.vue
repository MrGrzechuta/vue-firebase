<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message (enter to add): </label>
            <input type="text" name="new-message" v-model="newMessage">
        </form>
    </div>
</template>

<script>
import { getDatabase, ref, set } from "firebase/database";
import firebaseApp from '../firebase/init'

const db = getDatabase(firebaseApp);

export default {
    name: 'NewMessage',
    props: ['name'],
    data(){
        return{
            newMessage: null
        }
    },
    methods: {
        addMessage() {
            if(this.newMessage != null){
                set(ref(db, 'messages/' + Date.now()), {
                    content: this.newMessage,
                    name: this.name,
                    date: Date.now()
                });
                this.newMessage = null
            }
        }
    }
}
</script>