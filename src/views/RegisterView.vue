<template>
    <!-- Sign Up Card -->
    <div class="modal-dialog" style="margin-top: 110px;">
        <div class="modal-content rounded-5 shadow bg-black shadow opacity-75">
            <div class="modal-header p-5 pb-4 border-bottom-0 text-white">
                <h2 class="fw-bold mb-0 ">Register now to watch all our movies and serials!</h2>
            </div>
            <ErrorMessage type="ok" v-if="$auth.error">Hi ha hagut algun error</ErrorMessage> 
            <div class="modal-body p-5 pt-0">
                <div class="form-floating mb-3">
                    <input type="email" name="email"  v-model="email" class="form-control rounded-4" id="floatingEmail" placeholder="name@example.com">
                    <label for="floatingEmail">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" name="name" v-model="name"  class="form-control rounded-4" id="floatingName" placeholder="Name">
                    <label for="floatingName">Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" name="lastName"  v-model="lastName" class="form-control rounded-4" id="floatingLastName" placeholder="Last Name">
                    <label for="floatingLastName">Last Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" name="password" v-model="password" class="form-control rounded-4" id="floatingPassword" placeholder="Password" >
                    <label for="floatingPassword">Password</label>
                </div>
                <hr class="my-4">
                <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" @click="register">SIGN UP</button>
            </div>
        </div>
    </div>
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