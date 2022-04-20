
<template>
        <router-link :to="`/movie/${movie.id}`">
            <h3>{{ movie.title }}</h3>
            <img :src="`https://apigerard.herokuapp.com/img/movies/thumbnailmk2/img${movie.id}.jpg`">
        <h3>{{ movie.title }}</h3>
        <img :src="`https://apigerard.herokuapp.com/img/movies/thumbnailmk2/img${movie.id}.jpg`">
        </router-link>
</template>
        
