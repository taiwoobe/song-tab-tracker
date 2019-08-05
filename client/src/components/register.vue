<template>
    <div class="loginSection">
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3 loginForm">
                    <form @submit.prevent="registerUser">
                        <h2>Regstration Page</h2>
                        <label for="email"> Email Address: </label>
                        <input type="text" name="email" placeholder="Enter Email Address" v-model="email">
                        <br>
                        <label for="password"> Password: </label>
                        <input type="password" name="password" placeholder="Enter Password" v-model="password">
                        <br>
                        <div class="spinner-holder">
                            <button class="" type="submit">Register</button>
                        </div>
                     </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AuthenticationService from '../services/authenticationService'
    export default {
        name: 'register',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            async registerUser() {
                const response = await AuthenticationService.register({
                    email: this.email,
                    password: this.password
                })
                console.log(response.data);
            }
        },
    }
</script>

<style lang="scss" scoped>
.loginSection {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-image: url('../assets/blue-bg.png');
}
.loginForm {
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.2);
    padding: 35px 70px 35px 70px;
    background: aliceblue;
    border-radius: 5px;
    h2 {
        font-size: 1.7em;
        font-weight: bold;
        text-align: center;
        margin-bottom: 40px;
    }
    label {
        color: rgb(134, 131, 131);
        margin-bottom: 10px;
        font-size: 14px;
        display: block;
    }
    input {
        width: 100%;
        height: 40px;
        padding: 0px 5px;
        margin-bottom: 20px;
    }
}
.spinner-holder {
    display: flex;
    align-items: center;
}
@media (max-width: 767px) {
    .loginForm {
        margin: 15px;
        padding: 35px 15px;
    }
}
</style>