<template>
  <v-container>
      <p class="text-faded">Desculpe, página não encontrada <strong>(404)</strong></p>
      <v-btn
              color="primary"
              class="white--text"
              @click="$router.push('/')"
      >
        Voltar
        <v-icon right dark>refresh</v-icon>
      </v-btn>
  </v-container>
</template>
<script>
export default {
    data () {
        return {
        }
    },
}
</script>