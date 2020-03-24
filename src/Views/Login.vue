<template>
  <Container>
    <h1>Login</h1>
  </Container>
</template>

<script>

import Settings from '../Settings';

import Container from "./Components/Layout/Container";

export default {
  name: 'Login',
    components: {
        Container
    },
    mounted() {
      Settings.title('Login')
    }
}
</script>
