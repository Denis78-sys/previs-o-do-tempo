<template>
  <div
    class="max-w-sm mx-auto sm:w-full bg-gray-200 rounded-lg shadow-lg p-6 flex items-center justify-between"
  >
    <div>
      <h2 class="text-xl font-semibold text-blue-900">Goiânia - GO - BR</h2>
      <p class="text-sm text-blue-900 mt-2">Segunda 06</p>
      <p class="text-4xl font-bold text-blue-900 mt-2">25 °C</p>
      <p class="text-blue-900 mt-2">Possibilidade de chuva 10%</p>
    </div>
    <div class="flex flex-col items-center">
      <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="Weather icon" class="w-16 h-16" />
      <p class="text-blue-900 mt-2">Sol</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherCard",
};
</script>

<style scoped>
/* Estilos adicionais, se necessários */
</style>
