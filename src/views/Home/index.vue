<template>
  <div view="home">
    <navbar :user="`${user.name} ${user.lastName}`" />
  
    <container>
      <div v-for="user in users" :key="user.uuid">
        <card :title="user.name">{{ user.uuid }}</card>
      </div>
    </container>
  </div><!-- end: view[home] -->
</template>

<script src="./index.js"></script>
<style lang="scss" scoped src="./index.scss"></style>
