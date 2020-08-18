<template>
  <div view="auth">
	  <container>
      <HeadersAuth title="PAPER_CLIP" subtitle="Bem-vindo" />
      
      <form action="">
        <div class="group">
          <input 
            type="text" 
            id="email"
            name="email"
          >
          <label for="email">Email</label>
        </div>
        
        <div class="group">
          <input 
            type="password" 
            id="password"
            name="password"
          >
          <label for="password">Password</label>
        </div>
      </form>
    </container>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
