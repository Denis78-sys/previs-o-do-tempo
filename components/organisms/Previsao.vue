<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div
      v-if="statusPrevisao"
      class="max-w-sm drop-shadow-md mx-auto sm:w-full bg-azul rounded-lg shadow-lg p-6 flex items-center justify-between"
    >
      <div>
        <h2 class="text-xl font-semibold text-cinza">
          {{ dadosCidade?.name }} - {{ dadosCidade?.state }} -
          {{ dadosCidade?.country }}
        </h2>
        <p class="text-sm text-cinza mt-2 capitalize">{{ dataAtual }}</p>
        <p class="text-4xl font-bold text-cinza mt-2">
          {{ dadosTempLoc?.main.temp }} °C
        </p>
        <p class="text-cinza mt-2">
          Umidade <strong>{{ dadosTempLoc?.main.humidity }}%</strong>
        </p>
      </div>
      <div class="flex flex-col items-center">
        <img
          :src="`https://openweathermap.org/img/wn/${dadosTempLoc?.weather[0].icon}@2x.png`"
          alt="Weather icon"
          class="w-16 h-16"
        />
        <p class="text-cinza mt-2 capitalize">
          {{ dadosTempLoc?.weather[0].description }}
        </p>
      </div>
    </div>
    <div v-else>
      <div class="text-erro">Dados não encontrados!</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      dadosCidade: "dadosCidade",
      dadosTempLoc: "dadosTempLoc",
      statusPrevisao: "statusPrevisao",
    }),
    dataAtual() {
      const options = { weekday: "long", day: "numeric" };
      return new Date().toLocaleDateString("pt-BR", options);
    },
  },
  mounted() {
    this.getWeather(); // Chama a função para obter os dados do clima ao montar o componente
  },
  methods:{
    getWeather() {
      this.$store.dispatch('fetchDadosTempoPorLocalizacao');
    },
  }
};
</script>

<style scoped>
/* Estilos adicionais, se necessários */
</style>
