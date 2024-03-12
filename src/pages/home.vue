<script setup>

const menu=[
    {
        name:"Genre",
        sub:[
            {
                name:"Action"
            },
            {
                name:"Drama"
            },
            {
                name:"Action"
            },
        ]
    },
    {
        name:"About",
        sub:null
    },
    {
        name:"Contact",
        sub:null
    },
]
</script>

<template>
    <nav>
        <div class="icon flex">
            <img src="/src/assets/Images/icon-dark-nav.png" alt="">
            <div class="title"><h1>BookShelf</h1></div>
        </div>
        <div class="search">
            <input type="text" placeholder="Search for Books "><span class="material-symbols-outlined">search</span>
        </div>
        <div class="menu" 
        v-for="item in menu"
        :key="item.name"
        >
            <div class="menu_item">
                {{ item.name }}
            </div>
        </div>
        <div class="cart">
            <span class="material-symbols-outlined">shopping_cart</span>
        </div>
    </nav>
</template>

<style scoped>
nav{
    top:0;
    background-color: #F4A261;
    height: 6rem;
    padding: 1rem;
    display: flex;
    align-items: ;
    .icon{
        align-items: center;
        img{
            height: 4rem;
            margin-right: .5rem;
        }
        .title{
            color: white;

        }
    }
    .search{
        margin: 1rem 3rem ;
        display: flex;
        align-items: center;
        /* width: 100%; */
        input{
            /* width: 100%; */
            width: 30rem;
            border: none;
            outline: 0;
            padding: 1rem;
            height: 100%;
            border-radius: 5px 0 0 5px;
        }
        span{
            background-color: white;
            height: 100%;
            align-items: center;
            justify-content: center;
            display: flex;
            padding: .2rem;
            border-radius: 0 5px 5px 0;
            /* padding: 1rem; */
            border-left: 2px solid #F4A261;
            cursor: pointer;
        }
    }
    .menu{
        display: flex;
        align-items: center;
        .menu_item{
            padding: 1rem 2rem;
            cursor:pointer;
            margin: 0 .2rem;
            border-radius: 5px;
            transition: background-color .2s ease;
        }
        .menu_item:hover{
            background-color: #e69350;
        }
    }
    .cart{
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
        span{
            cursor:pointer;
            font-size: 2.5rem;
        }
    }
}

.flex{
    display: flex;
}
</style>
