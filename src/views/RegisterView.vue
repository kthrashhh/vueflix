<template>
    <!-- <div>
        <input v-model="name" placeholder="name">
        <input v-model="lastName" placeholder="lastName">
        <input v-model="email" placeholder="email">
        <input v-model="password" placeholder="password">
        <button @click="register">Register</button>
    </div>
    <ErrorMessage type="ok" v-if="$auth.error">Hi ha hagut algun error</ErrorMessage> -->

    <!-- Sign Up Card -->
    <div class="modal-dialog" style="margin-top: 110px;">
        <div class="modal-content rounded-5 shadow bg-black shadow opacity-75">
            <div class="modal-header p-5 pb-4 border-bottom-0 text-white">
                <h2 class="fw-bold mb-0 ">Register now to watch all our movies and serials!</h2>
            </div>

            <div class="modal-body p-5 pt-0">
                <form action="/register" method="post">
                    <div class="form-floating mb-3">
                        <input type="email" name="email" class="form-control rounded-4" id="floatingEmail" placeholder="name@example.com">
                        <label for="floatingEmail">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" name="name" class="form-control rounded-4" id="floatingName" placeholder="Name">
                        <label for="floatingName">Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" name="lastName" class="form-control rounded-4" id="floatingLastName" placeholder="Last Name">
                        <label for="floatingLastName">Last Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" name="password" class="form-control rounded-4" id="floatingPassword" placeholder="Password" >
                        <label for="floatingPassword">Password</label>
                        <span>
                            <svg width="16" height="16" fill="currentColor" class="bi bi-eye text-white" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg>
                        </span>
                        <input class="form-check-input" type="checkbox" onclick="passwdFunction()" id="eye">
                        
                    </div>
                    <hr class="my-4">
                    <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit" @click="register">SIGN UP</button>
                </form>
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
            this.$auth.login(this.email, this.password);
        }
    }
}

    function passwdFunction() {
            var x = document.getElementById("floatingPassword");
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
        }
</script>

<style scoped>
    .error {
        color: red;
    }
</style>