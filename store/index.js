/* eslint-disable no-unused-vars */
// Define o estado inicial da aplicação.
// Este é o estado compartilhado que pode ser acessado por todos os componentes.
export const state = () => ({
  dadosTempo: null, // Armazena os dados do clima.
  carregandoDados: false, // Indica se os dados estão sendo carregados.
  error: null, // Armazena qualquer erro que ocorra durante a requisição.
});

// Define as mutações que são usadas para alterar o estado.
// As mutações são sempre síncronas.
export const mutations = {
    SET_DADOS_TEMPO(state, data){
        state.dadosTempo = data
    },

    SET_CARREGANDO_DADOS(state, loading){
        state.carregandoDados = loading
    },

    SET_ERRO(state, erro){
        state.error = erro
    }
}



// Define as ações que podem ser assíncronas.
// As ações podem executar operações assíncronas e depois chamar mutações.

export const actions ={
     // Define a ação para buscar dados do clima.
     async fetchDataDodosTempo({commit}, {cidade, uf}){
        try{
            const chaveApi = "732cde9e868e4cef9a585a83eb9114ce";
              // Faz uma requisição GET para a API OpenWeatherMap com a cidade e código do estado fornecidos.
            const resposta = await this.$axios.$get(`https://api.openweathermap.org/geo/1.0/direct?q=${cidade},${uf},BR&limit=1&appid=${chaveApi}`)
            commit('SET_CARREGANDO_DADOS', resposta)
        }catch(error){
           commit('SET_ERRO', error)
        }
     }
}


// Define os getters para acessar o estado de uma maneira mais conveniente.
// Getters são como propriedades computadas para a store.
export const getters = {
    dadosTempo: (state) => state.dadosTempo, // Retorna os dados do clima.
    carregandoDados: (state) => state.carregandoDados,         // Retorna o estado de carregamento.
    error: (state) => state.erro,             // Retorna o estado de erro.
  };