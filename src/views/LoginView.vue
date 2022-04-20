<template >
    <!-- Sign In Card --> 
    <div class="modal-dialog" style="margin-top: 180px; margin-bottom:120px">
        <div class="modal-content rounded-5 shadow bg-black opacity-75">
            <div class="modal-header p-5 pb-4 border-bottom-0 text-white">
                <h2 class="fw-bold mb-0 ">LOG IN</h2>
            </div>
            <div class="modal-body p-5 pt-0">
            <ErrorMessage type="ok" v-if="$auth.error">Hi ha hagut algun error</ErrorMessage> 
                    <div class="form-floating mb-3">
                        <input type="text" name="email" class="form-control rounded-4" id="floatingInput" placeholder="name@example.com" v-model="email">
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" name="password" class="form-control rounded-4" id="floatingPassword" placeholder="Password" v-model="password">
                        <label for="floatingPassword">Password</label>
                        <input class="form-check-input" type="checkbox" onclick="myFunction()" id="eye">
                    </div>
                    <hr class="my-4 text-white">
                    <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" @click="login">>LOG IN</button>
                    <small class="text-muted"> New to Petflix? <a href="/register">Sign Up now</a><br></small>
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
                email: 'user@user.com', password: 'useruser'
            }
        },
        methods: {
            async login() {
                this.$auth.login(this.email, this.password);
            }
        }
    }
</script>

<style>
    .error {
        color: red;
    }
</style>