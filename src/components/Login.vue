<template>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>OpenPaaS Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="email"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password" required></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    mounted() {
      console.log(this.$auth.redirect());
    },
    login() {
      this.$auth.login({
        url: 'jwt/generate',
        auth: {
          username: this.email,
          password: this.password
        },
        rememberMe: false,
        redirect: { name: 'Home' },
        fetchUser: false
      })
        .then((response) => {
          this.$store.dispatch('fetchUser');
          this.$store.dispatch('setJWTToken', response.data);
          return response.data;
        }, (err) => {
          console.log(err);
        });
    }
  }
};
</script>
