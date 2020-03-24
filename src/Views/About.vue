<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
    // -> config
    import Settings from '../Settings';

    export default {
        name: 'About',
        mounted() {
            Settings.title('About')
        }
    }
</script>
