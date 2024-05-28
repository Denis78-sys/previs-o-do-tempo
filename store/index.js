/* eslint-disable no-unused-vars */
// Define o estado inicial da aplicação.
// Este é o estado compartilhado que pode ser acessado por todos os componentes.
export const state = () => ({
  dadosCidade: null, // Armazena os dados da cidade.
  dadosTempLoc: null,
  statusPrevisao: 0,
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
        commit("SET_STATUS_PREVISAO", 1);
      } else {
        commit("SET_STATUS_PREVISAO", 2);
        commit("SET_ERRO", "Cidade não encontrada");
      }
    } catch (error) {
      commit("SET_ERRO", error);
      commit("SET_STATUS_PREVISAO", 2);
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
      commit("SET_ERRO", error);
    } finally {
      commit("SET_CARREGANDO_DADOS", false); // Define o estado de carregamento como falso.
    }
  },
};

// Define os getters para acessar o estado de uma maneira mais conveniente.
// Getters são como propriedades computadas para a store.
export const getters = {
  dadosCidade: (state) => state.dadosCidade, // Retorna os dados do clima.
  dadosTempLoc: (state) => state.dadosTempLoc,
  carregandoDados: (state) => state.carregandoDados, // Retorna o estado de carregamento.
  error: (state) => state.erro, // Retorna o estado de erro.
  statusPrevisao: (state) => state.statusPrevisao,
};
