<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message (enter to add): </label>
            <input type="text" name="new-message" v-model="newMessage">
        </form>
    </div>
</template>

<script>
export default {
    name: 'NewMessage',
    props: ['name'],
    data(){
        return{
            newMessage: null,
            submited: false
        }
    },
    methods: {
        addMessage(){
            this.$http.post('https://vue-chat-2094a-default-rtdb.europe-west1.firebasedatabase.app/messages.json',
            { content: this.newMessage, name: this.name, date: Date.now()}),
            this.newMessage = null,
            this.submited = true
        }
    }
}
</script>