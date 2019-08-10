<template>
  <div>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <shared-panel title="Registration form">
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
            </shared-panel>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import AuthenticationService from '../services/authenticationService'
import sharedPanel from './shared/sharedPanel';
    export default {
        name: 'register',
        components: {
          sharedPanel
        },
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
                    this.$store.dispatch('setToken', response.data.token);
                    this.$store.dispatch('setUser', response.data.user);
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
