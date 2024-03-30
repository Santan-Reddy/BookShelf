<script setup>
import NavBar from '@/components/NavBar.vue';
import {ref} from 'vue'

const genres=ref([
    {
        id:0,
        title:'Thriller',
        image:'https://m.media-amazon.com/images/I/81axCL7Y38L._AC_UF1000,1000_QL80_.jpg'
    },
    {
        id:1,
        title:'Action',
        image:'https://thecomicbookstore.in/storage/2022/09/TCBS2585.jpg'
    },
    {
        id:2,
        title:'Adventure',
        image:'https://i.ebayimg.com/images/g/OA4AAOSwvr5jzXkY/s-l1200.webp'
    },
    {
        id:3,
        title:'Puzzle',
        image:'https://bab204e6998b029da4a0-574e0397baee2d5cf8baf2396ea57e9d.ssl.cf3.rackcdn.com/book-15f45951-83dd-45a7-b9cd-9d570950c45a.medium.png'
    },
])
</script>

<template>
    <!-- <NavBar/> -->
    <div class="container">
        <div class="genres">
            <h3>Explore Genres</h3>
            <div class="genres_list">
                <div class="genres_item" v-for="item in genres" :key="item.id">
                    <h4>{{ item.title }} </h4>
                    <img :src="item.image" alt="image">
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
    .genres{
        height: 100vh;
        margin: 3rem 2rem 1rem;
        h3{
            font-size: 2rem;
        }
        .genres_list{
            margin-top: 1rem;
            display: grid;
            grid-template-columns: repeat(4,1fr);
            gap: 1rem;
            .genres_item{
                cursor: pointer;
                max-width: 22vw;
                background-color: #E9C46A;
                padding: 1rem;
                display: flex;
                flex-direction: column;
                gap: .5rem;
                border-radius: 5px;
                align-items: center;
                h4{
                    font-size: 1.5rem;
                }
                img{
                border-radius: 5px;
                width: 90%;
                    height: 400px;
                    object-fit: cover;
                }
            }
        }
    }
}
</style>