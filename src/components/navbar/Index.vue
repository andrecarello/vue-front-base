<template>
    <nav>
        <div class="bars">
            <v-icon name="menu" class="v-icon"></v-icon>
        </div>
        <div class="right">{{ user }}</div>
    </nav>
</template>
<script>
export default {
  name: "NavbarDefault",
  props: {
    user: {
      type: String,
      required: false
    }
  }
};
</script>
<style lang="scss" scoped>

</style>