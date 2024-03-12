<script setup>

</script>

<template>
    <div class="main">
        <div class="left">
            <!-- <img src="@/assets/Images/library_login.jpg" alt=""> -->
            <div class="text">
                <h1 class="title">Signup</h1>
                <div class="sub">Discover a world of books at BOOKSHELF – your literary haven.</div>
            </div>
            <div class="opacity"></div>
        </div>
        <div class="right">
            <div class="icon"><img src="/src/assets/Images/icon-light.png" alt=""></div>
            <div class="form">
                <div class="names">
                    <div class="first">
                        First Name:
                    <input type="text">
                    </div>
                    <div class="last">
                        Last Name:
                    <input type="text">
                    </div>
                </div>
                <div class="email">
                    Email:
                    <input type="text">
                </div>
                <div class="user_name">
                    Username:
                    <input type="text">
                </div>
                <div class="password">
                    Password:
                    <input type="password" name="" id="">
                </div>
                <div class="forget"></div>
                <div class="login_button">
                    <button>Login</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
*{
    margin: 0;padding: 0;box-sizing: border-box;
}
.main{
    max-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .left{
        height: 100vh;
        background-image: url('/src/assets/Images/library_login.jpg');
        display: flex;
        /* justify-content: center; */
        align-items: center;
        position: relative;
        .text{
            padding: 3rem;
            color: white;
            /* position: relative; */
            z-index: 10;
            padding: 1rem;
            .title{
                left: 0;
                font-size: 5rem;
                
            }
            .sub{
                left: 0;
                font-size: 1.2rem;
            }
        }
        .opacity{
            position: absolute;
            background-color:#F4A261;
            height: 100vh;
            width: 100%;
            opacity: 0.9;
        }
    }
    .right{
        background-color:#264653 ;
        /* padding: 2rem; */
        .icon{
            display: flex;
            justify-content: center;
            align-items: center;
            img{                
                height: 150px;
            }
        }
        .form{
            display: flex;
            flex-direction: column;
            padding: 0 8rem ;
            color: #fefae0;
            .names{
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 10px;
            }
            .user_name,.password,.email{
                display: flex;
                flex-direction: column;
                font-size: 1rem;
                margin-top: 1.5rem;
            }
                input{
                    margin-top: 5px;
                    height: 40px;
                    background-color: #447e9588;
                    outline: 0;
                    border: none;
                    border-radius: 5px;
                    padding: .5rem;
                    color: #fefae0;
                    width: 100%;
                }
            
            .login_button{
                margin-top: 1.5rem;
                button{
                    padding:.6rem .8rem;
                    width: 100%;
                    font-size: 1.2rem;
                    cursor: pointer;
                    background-color: #F4A261;
                    border: none;
                    border-radius: 5px;
                    transition: background-color .2s ease-in;
                }
                button:hover{
                    background-color: #E76F51;
                }
            }
        }
    }
}
</style>
