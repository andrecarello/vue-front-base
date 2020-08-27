<template>
  <container view="auth" class="pt:50">

    <h1 class="font:xl weigth:900 text:center">
      LOGIN
    </h1>

    <FormulateForm @submit="submitMsisdn" v-if="msisdnForm">
      <FormulateInput
        class="group"
        type="tel"
        name="msisdn"
        placeholder="MSISDN"
        v-model="msisdn"
        validation="bail|required|msisdn|min:15|max:15"
        :validation-rules="{
					msisdn: ({value}) => this.msisdn = Masks.msisdn(value),
				}"
        :validation-messages="{
            required: 'Campo obrigatório',
						msisdn: 'Preencha o campo corretamente',
						min: 'Preencha o campo corretamente',
						max: 'Preencha o campo corretamente'
				}"
        error-behavior="submit"
      />

      <button
        type="submit"
        class="button orange text:yellow"
        :class="this.loading && 'disabled'"
      >{{ this.loading ? 'AGUARDE ...' : 'CONTINUAR' }}</button>
    </FormulateForm>

    <FormulateForm @submit="submitPin" v-if="pinForm">
      <FormulateInput
        class="group"
        type="tel"
        name="pin"
        placeholder="* * * *"
        v-model="pin"
        validation="bail|required|pin|min:4,length|max:4,length"
        :validation-rules="{
					pin: ({value}) => this.pin = Masks.pin(value),
				}"
        :validation-messages="{
            required: 'Campo obrigatório',
						pin: 'Preencha o campo corretamente',
						min: 'Preencha o campo corretamente',
						max: 'Preencha o campo corretamente'
				}"
        error-behavior="submit"
      />

      <div class="md:flex(center:center)">
        <button
          type="submit"
          class="button blue text:white"
          :class="this.loading && 'disabled'"
        >{{ this.loading ? 'AGUARDE ...' : 'CONTINUAR' }}</button>

        <a href @click.prevent.stop="resendPin()" class="button vivid-red outline font:xs">
          <v-icon name="refresh-cw" width="15px" height="15px" class="mr:5"></v-icon><strong class="font:900 mr:5"> Não recebeu?</strong> Enviar novo código
        </a>
        <a
          href
          @click.prevent.stop="changeMsisdn()"
          class="button orange outline font:xs"
        >Trocar número</a>
      </div>
    </FormulateForm>
  </container>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
