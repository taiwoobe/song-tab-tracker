<template>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Registration form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="registerUser" autocomplete="off">
                  <v-text-field label="Email Address" name="register" prepend-icon="email" type="email" v-model="email"></v-text-field>
                  <v-text-field id="password" label="Password" name="password" prepend-icon="lock" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" type="submit" @click="registerUser"> Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
import AuthenticationService from '../services/authenticationService'
    export default {
        name: 'register',
        data() {
            return {
                email: '',
                password: '',
                error: ''
            }
        },
        methods: {
            async registerUser() {
                try {
                    const response = await AuthenticationService.register({
                        email: this.email,
                        password: this.password
                    })
                    this.email = '';
                    this.password = '';
                    this.error = '';
                } catch (error) {
                    this.error = error.response.data.error;
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.spinner-holder {
    display: flex;
    align-items: center;  
}
.v-content {
  min-height: 90vh;
}

// MEDIA QUERIES //
@media (max-width: 767px) {

}
</style>
