<template>
  <div class="home">
    <h1>Login</h1>
  </div>
</template>

<script>
  import Settings from '../../Settings';

  export default {
    name: 'LoginView',
    mounted() {
      Settings.title('Login')
    }
  }
</script>
