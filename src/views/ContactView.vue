<script setup>

</script>

<template>
<div class="container">
    <div class="main-box">
        <h5>Contact Us</h5>
        <div class="box">
            <div class="form">
                <div class="name">
                    Username:
                    <input type="text">
                </div>
                <div class="password">
                    Password:
                    <input type="password" name="" id="">
                </div>
                <div class="password">
                    Password:
                    <input type="password" name="" id="">
                </div>
                <div class="signup">
                    <RouterLink to="/signup" class="signup">Don't have an account? Signup</RouterLink>
                </div>
                <div class="login_button">
                    <RouterLink to="/home">
                        <button>Login</button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.container{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 84vh;
    .main-box{
        background-color: #E9C46A;
        width: 50vw;
        border-radius: 10px;
        padding: 1.5rem;
        h5{
            text-align: center;
            font-size: 2rem;
        }
        .box{
            margin-top: 1rem;
            .form{
                display: flex;
                flex-direction: column;
                color: #fefae0;
                .name,.password{
                    display: flex;
                    flex-direction: column;
                    font-size: 1rem;
                    margin-top: 1.5rem;
                    input{
                        margin-top: 5px;
                        height: 40px;
                        background-color: #447e9588;
                        outline: 0;
                        border: none;
                        border-radius: 5px;
                        padding: .5rem;
                        color: #fefae0;
                    }
                }
                .signup{
                    color:#F4A261;
                    margin-top:10px;
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
}
</style>