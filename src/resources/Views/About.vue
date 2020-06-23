<template>
  <div class="home">
    <h1>About</h1>
  </div>
</template>

<script>
  import Settings from '../../Settings';

  export default {
    name: 'AboutView',
    mounted() {
      Settings.title('Sobre')
    }
  }
</script>
