<template>
  <Panel title="Register">
    <form name="registerForm" autocomplete="off">
      <label for="email">Email </label><v-text-field type="text" id="email" v-model="email" placeholder="Email"/>
      <label for="email">password </label><v-text-field type="password" id="password" v-model="password" placeholder="Password"/>
      <v-btn type="button" id="button" @click="register()">Register user</v-btn>
      <label for="authMessage" v-show="authenticationMessage">{{authenticationMessage}}</label>
      <div style="color:red" v-html="error"/>
    </form>
  </Panel>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  name: 'Register',
  components: {Panel},
  data () {
    return {
      email: '',
      password: '',
      authenticationMessage: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        this.error = null
        const response = await AuthenticationService.register({email: this.email, password: this.password})
        this.authenticationMessage = response.data.message
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<style>

</style>
