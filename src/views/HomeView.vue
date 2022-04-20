<template>
    <div v-if="$auth.isAuthenticated"> 
        <Header>welcome {{ $auth.email }}!</Header>   
        <div class="movie-list">
            <div class="movie" v-for="movie in movies" :key="movie.id">
                <router-link :to="`/movie/${movie.id}`">
                    <h3>{{ movie.title }}</h3>
                    <img :src="`https://apigerard.herokuapp.com/img/movies/thumbnailmk2/img${movie.id}.jpg`">
                </router-link>
            </div>
        </div>
    </div>
    <div v-else>
        <p>Please login:</p>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
    </div>
</template>

<script>
import Header from '../components/HeaderHome.vue';
export default {
    components: {Header},
    created(){
        
        if(this.$auth.isAuthenticated){
            this.fetchMovies();
        }
    },
    data() {
        return {
            movies: [],
        }
    },
    methods: {
        async fetchMovies() {
            const response = await fetch('https://apigerard.herokuapp.com/api/peliculas', { headers: {Authorization: `Bearer ${this.$auth.access_token}`}});
            this.movies = (await (response.json())).data;
        },
    },
}
</script>

<style scoped>
.movie-list {
    margin-top: 70px;
    display: grid;
    grid-template-columns: repeat(4,400px);
    gap: 1em;
}

.movie {
    max-width: 400px;
}
img{
     width:400px;
}
</style>