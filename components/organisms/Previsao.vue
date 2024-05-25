<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="max-w-sm drop-shadow-md mx-auto sm:w-full bg-gray-200 rounded-lg shadow-lg p-6 flex items-center justify-between"
  >
    <div>
      <h2 class="text-xl font-semibold text-blue-900">
        {{ dadosCidade?.name }} - {{ dadosCidade?.state }} -
        {{ dadosCidade?.country }}
      </h2>
      <p class="text-sm text-blue-900 mt-2">{{ dataAtual }}</p>
      <p class="text-4xl font-bold text-blue-900 mt-2">
        {{ dadosTempLoc?.main.temp }} °C
      </p>
      <p class="text-blue-900 mt-2">Humidade {{dadosTempLoc?.main.humidity}}%</p>
    </div>
    <div class="flex flex-col items-center">
      <img
        :src="`https://openweathermap.org/img/wn/${dadosTempLoc?.weather[0].icon}@2x.png`"
        alt="Weather icon"
        class="w-16 h-16"
      />
      <p class="text-blue-900 mt-2">{{dadosTempLoc?.weather[0].description}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["dadosCidade"]),
    ...mapGetters(["dadosTempLoc"]), // Mapeia a variável
    dataAtual() {
      const options = { weekday: "long", day: "numeric" };
      return new Date().toLocaleDateString("pt-BR", options);
    },
  },
};
</script>

<style scoped>
/* Estilos adicionais, se necessários */
</style>
