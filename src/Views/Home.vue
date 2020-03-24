<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import Settings from '../Settings';

export default {
  name: 'Home',
    mounted() {
      Settings.title('Home')
    }
}
</script>
