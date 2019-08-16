<template>
  <div>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <shared-panel title="Registration form">
              <v-card-text>
                <v-form @submit.prevent="registerUser" autocomplete="off">
                  <v-text-field label="Email Address" v-validate="'required|email'" name="email" prepend-icon="email" type="email" v-model="email"></v-text-field>
                  <v-text-field id="password" label="Password" v-validate="'required'" name="password" prepend-icon="lock" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
             <div class="actions-section">
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" type="submit" @click="registerUser">Register</v-btn>
                </v-card-actions>
                <v-alert type="error" v-if="error">
                  {{ error }}
                </v-alert>
              </div>
            </shared-panel>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
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
      registerUser() {
        this.error = '';
        this.$validator.validate().then(response => {
        if (response) {
          AuthenticationService.register({
            email: this.email,
            password: this.password
          }).then(result => {
            this.$store.dispatch('setToken', result.data.token);
            this.$store.dispatch('setUser', result.data.user);
            this.$router.push({name: 'song'});
          }).catch (error => {
            this.error = 'The email you entered already exists.'
          })
        } else {
          this.error = 'Please fill in all fields correctly.'
        }
      }).catch(error => {
        this.error = error;
        console.log(error);
      });
      }
    }
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
.v-card {
  padding-bottom: 16px;
}
.actions-section {
  padding: 0 15px;
  display: flex;
}
.v-alert {
  margin: 16px;
  padding: 8px;
  font-size: 14px;
}

</style>