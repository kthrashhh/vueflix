<template>
    <div>
        <input v-model="name" placeholder="name">
        <input v-model="lastName" placeholder="lastName">
        <input v-model="email" placeholder="email">
        <input v-model="password" placeholder="password">
        <button @click="register">Register</button>
    </div>
    <ErrorMessage type="ok" v-if="$auth.error">Hi ha hagut algun error</ErrorMessage>
</template>

<script>
import ErrorMessage from '../components/ErrorMessage.vue';

export default {
    components: {ErrorMessage},
    created(){
        this.$auth.$subscribe((mutation, state) => {
            if (state.isAuthenticated) {
                this.$router.push('/');
            }
        })
    },
    data() {
        return {
            name: 'caca', lastName:'si', email: 'a@a.a', password: '12345678'
        }
    },
    methods: {
        async register() {
            this.$auth.register(this.name, this.lastName, this.email, this.password);
        }
    }
}
</script>

<style scoped>
    .error {
        color: red;
    }
</style>