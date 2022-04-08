import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth',{
    state: () => {
        const auth = localStorage.getItem('auth');
        if (auth)
            return JSON.parse(auth);
      
        return {
            isAuthenticated: false,
            email: null,
            access_token: null,
            error: false
        }
    },
    actions: {
        async login(email, password) {
            try {
                const response = await(await fetch('https://apigerard.herokuapp.com/api/login/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify({ email, password })
                })).json();

                if (response.access_token) {
                    this.isAuthenticated = true;
                    this.email = email;
                    this.access_token = response.access_token;
            
                    localStorage.setItem('auth', JSON.stringify({ isAuthenticated: this.isAuthenticated, access_token: this.access_token, email: this.email }));
                }
            } catch (error) {
                this.logout();
            }
        },
        logout(){
            this.isAuthenticated = false;
            this.email = null;
            this.access_token = null;

            localStorage.removeItem('auth');
        },
 
        async register(name, lastName, email, password) {
            this.error = false;
            try {
                const response = await(await fetch('https://apigerard.herokuapp.com/api/registrer/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify({name, lastName, email, password })
                })).json();

                if (response.access_token) {
                    this.isAuthenticated = true;
                    this.email = email;
                    this.access_token = response.access_token;
            
                    localStorage.setItem('auth', JSON.stringify({ isAuthenticated: this.isAuthenticated, access_token: this.access_token, email: this.email }));
                }
            } catch (error) {
                this.error = true;
                console.log("ghas");
                this.logout();
            }
        }
    },
})
