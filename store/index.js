/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// Define o estado inicial da aplicação.
// Este é o estado compartilhado que pode ser acessado por todos os componentes.
export const state = () => ({
  dadosCidade: null, // Armazena os dados da cidade.
  dadosTempLoc: null, // Armazena os dados do clima com base na localização do dispositivo.
  statusPrevisao: false, // Indica se a previsão está disponível.
  carregandoDados: false, // Indica se os dados estão sendo carregados.
  error: null, // Armazena qualquer erro que ocorra durante a requisição.
});

// Define as mutações que são usadas para alterar o estado.
// As mutações são sempre síncronas.
export const mutations = {
  SET_DADOS_CIDADE(state, data) {
    state.dadosCidade = data;
  },

  SET_STATUS_PREVISAO(state, status) {
    state.statusPrevisao = status;
  },

  SET_DADOS_TEMPO(state, data) {
    state.dadosTempLoc = data;
  },

  SET_CARREGANDO_DADOS(state, loading) {
    state.carregandoDados = loading;
  },

  SET_ERRO(state, erro) {
    state.error = erro;
  },
};

// Define as ações que podem ser assíncronas.
// As ações podem executar operações assíncronas e depois chamar mutações.
export const actions = {
  // Define a ação para buscar dados do clima.
  async fetchDataDodosCidade({ commit }, { cidade, uf }) {
    try {
      commit("SET_CARREGANDO_DADOS", true); // Define o estado de carregamento como verdadeiro.
      commit("SET_ERRO", null); // Reseta qualquer erro anterior.

      // Faz uma requisição GET para a API OpenWeatherMap com a cidade e código do estado fornecidos.
      const resposta = await this.$axios.$get(
        `/geo/1.0/direct?q=${cidade},${uf},BR&limit=1&appid=${this.$config.apiKey}`
      );
      if (resposta.length > 0) {
        commit("SET_DADOS_CIDADE", resposta[0]);
        commit("SET_STATUS_PREVISAO", true);
      } else {
        commit("SET_STATUS_PREVISAO", false);
        commit("SET_ERRO", "Cidade não encontrada");
      }
    } catch (error) {
      console.error("Erro ao buscar dados da cidade:", error);
      commit("SET_ERRO", error);
      commit("SET_STATUS_PREVISAO", false);
    } finally {
      commit("SET_CARREGANDO_DADOS", false); // Define o estado de carregamento como falso.
    }
  },

  async fetchDadosTempo({ commit }, { latitude, longitude }) {
    try {
      commit("SET_CARREGANDO_DADOS", true); // Define o estado de carregamento como verdadeiro.
      commit("SET_ERRO", null); // Reseta qualquer erro anterior.

      const resposta = await this.$axios.$get(
        `/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=pt&appid=${this.$config.apiKey}`
      );
      commit("SET_DADOS_TEMPO", resposta);
    } catch (error) {
      console.error("Erro ao buscar dados do tempo:", error);
      commit("SET_ERRO", error);
    } finally {
      commit("SET_CARREGANDO_DADOS", false); // Define o estado de carregamento como falso.
    }
  },

  // Nova ação para obter a localização do dispositivo e buscar dados do clima.
  fetchDadosTempoPorLocalizacao({ commit, dispatch }) {
    try {
      commit("SET_CARREGANDO_DADOS", true); // Define o estado de carregamento como verdadeiro.
      commit("SET_ERRO", null); // Reseta qualquer erro anterior.

      // Obtém a localização do dispositivo usando a API de Geolocalização do navegador.
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          // Faz a chamada para buscar os dados do clima usando a latitude e longitude obtidas.
          await dispatch("fetchDadosTempo", { latitude, longitude });

          commit("SET_STATUS_PREVISAO", true);
        },
        (error) => {
          commit("SET_STATUS_PREVISAO", false);
          console.error("Erro ao obter a localização:", error);
          commit("SET_ERRO", "Erro ao obter a localização: " + error.message);
          commit("SET_CARREGANDO_DADOS", false);
        }
      );
    } catch (error) {
      console.error("Erro na ação fetchDadosTempoPorLocalizacao:", error);
      commit("SET_ERRO", error);
    }
  },
};

// Define os getters para acessar o estado de uma maneira mais conveniente.
// Getters são como propriedades computadas para a store.
export const getters = {
  dadosCidade: (state) => state.dadosCidade, // Retorna os dados do clima.
  dadosTempLoc: (state) => state.dadosTempLoc, // Retorna os dados do clima com base na localização do dispositivo.
  carregandoDados: (state) => state.carregandoDados, // Retorna o estado de carregamento.
  error: (state) => state.error, // Retorna o estado de erro.
  statusPrevisao: (state) => state.statusPrevisao, // Retorna o estado da previsão.
};
