<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">Sobre</router-link>|
      <router-link to="/user">Usuários</router-link>
    </div>
    <router-view />
  </div>
</template>
