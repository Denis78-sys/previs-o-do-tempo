<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div
      v-if="statusPrevisao === 1"
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
    <div v-else-if="statusPrevisao === 2">
      <div class="text-erro">Dados não encontrados!</div>
    </div>
    <div v-else>
      <div
        class="lg:mt-12 md:mt-10 sm:mt-8 p-6 rounded text-center bg-azul px-4 mb-6"
      >
        <p class="text-lg text-cinza text-sm">
          <strong
            >Bem-vindo ao nosso site de previsão do tempo! Para obter as
            informações meteorológicas da sua cidade, siga as instruções
            abaixo:</strong
          >
          <br /><br />
          1. Selecione o estado (UF) da sua cidade no menu suspenso.
          <br />
          2. Digite o nome da cidade no campo de texto.
          <br />
          3. Clique no ícone de busca ou pressione Enter para visualizar a
          previsão do tempo.
          <br /><br />
          Esperamos que você tenha uma ótima experiência utilizando nosso
          serviço!
        </p>
        <div class="text-center text-cinza text-xs font-extralight mt-8">
          Desenvolvido por <span class="font-bold">Denis Marques</span>
        </div>
      </div>
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
};
</script>

<style scoped>
/* Estilos adicionais, se necessários */
</style>
