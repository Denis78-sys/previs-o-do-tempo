<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="flex items-center">
      <!-- Dropdown de UF -->
      <div class="relative">
        <select
          v-model="selectedState"
          class="block appearance-none w-full bg-azul text-white px-4 py-2 pr-8 rounded-l-md leading-tight focus:outline-none focus:bg-azul focus:border-azul"
        >
          <option value="" disabled>UF</option>
          <option v-for="state in states" :key="state" :value="state">
            {{ state }}
          </option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white"
        >
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            />
          </svg>
        </div>
      </div>
  
      <!-- Campo de Entrada para Cidade com Ícone de Busca -->
      <div class="relative w-56">
        <input
          v-model="city"
          type="text"
          placeholder="Digite a cidade"
          class="appearance-none border w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white rounded-r-md"
        />
        <div class="absolute inset-y-0 right-0 flex items-center pr-3">
          <button
            class="text-gray-500 hover:text-gray-700 focus:outline-none"
            @click="search"
          >
            <svg
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M13.707 12.293a8 8 0 111.414-1.414l4.586 4.586a1 1 0 01-1.414 1.414l-4.586-4.586zM12 8a6 6 0 1112 12 6 6 0 01-12-12z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedState: "",
        city: "",
        states: [
          "AC",
          "AL",
          "AM",
          "AP",
          "BA",
          "CE",
          "DF",
          "ES",
          "GO",
          "MA",
          "MT",
          "MS",
          "MG",
          "PA",
          "PB",
          "PR",
          "PE",
          "PI",
          "RJ",
          "RN",
          "RS",
          "RO",
          "RR",
          "SC",
          "SP",
          "SE",
          "TO",
        ],
      };
    },
    methods: {
      search() {
        // eslint-disable-next-line no-console
        console.log(`UF: ${this.selectedState}, Cidade: ${this.city}`);
        // Adicione aqui a lógica de busca
        if (this.selectedState === "") {
          alert("Preencha o campo UF");
        } else if (this.city === "") {
          alert('Digite a cidade');
        } else {
          alert(`UF:${this.selectedState}, CIDADE:${this.city}`);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Adicione estilos adicionais aqui, se necessário */
  </style>
  