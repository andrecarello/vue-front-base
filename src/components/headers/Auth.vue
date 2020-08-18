<template>
  <header class="header">
    <v-icon name="paperclip" class="v-icon" style="width: 48px; height: 48px;"></v-icon>
    <h1 v-if="!!title">
      <small>{{ subtitle }}</small>
      {{ title }}
    </h1>
  </header>
</template>
<script>
export default {
  name: "HeadersAuth",
  props: {
    title: {
      type: String,
      required: false
    },
    subtitle: {
      type: String,
      required: false
    }
  },
};
</script>
<style lang="scss" scoped>
  .v-icon {
    fill: var(--secondary);

    * {
      fill: var(--secondary);
    }
  }
</style>