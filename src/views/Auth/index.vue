<template>
  <div view="auth">
	  <container>
      <HeadersAuth title="PAPER_CLIP" subtitle="Bem-vindo" />
      
      <form action="">
        <FormulateInput 
          class="group"
          label="Email"
          type="email"
          name="email"
          validation="bail|required|email"
          :validation-messages="{
            required: 'Campo obrigatório',
            email: 'O Email informado é inválido'
          }"
          error-behavior="live"
        />

        <FormulateInput
          class="group"
          label="Password"
          type="tel"
          name="password"
          validation="^required|number|matches:/[0-9]{4}/"
          :validation-messages="{
            required: 'Campo obrigatório',
            min: '',
            max: '',
            matches: 'Código requer 4 números'
          }"
          error-behavior="live"
        />

        <FormulateInput type="submit">
          <div class="button success">Enviar</div>
        </FormulateInput>
      </form>
    </container>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
