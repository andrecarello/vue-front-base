<template>
  <div class="home">
    <h1>HOME</h1>
  </div>
</template>

<script>
  import Settings from '../../Settings';

  export default {
    name: 'HomeView',
    mounted() {
      Settings.title('Home')
    }
  }
</script>
