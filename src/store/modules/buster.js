// import VueCookies from 'vue-cookies'
const state = {
  selectedBusterTemplate: null,
  busterTemplates: [],
  ownedBusterTemplates: [],
  bustersData: [
    {
      id: '338184',
      background: '#000000'
    },
    {
      id: '339377',
      background: '#ab5236'
    }
  ]
}

const getters = {}

const actions = {
  // async fetchFavoris ({ commit, dispatch }) {
  //   try {
  //     await apolloClientV2.query({
  //       query: require('@/graphql/queries/v2/searchCommunFavoris.gql'),
  //       // variables: { filtre: { types: ['BOUTIQUE_ITEM'] } },
  //       fetchPolicy: 'network-only'
  //     }).then(({ data }) => {
  //       commit('initFavoris', data.searchCommunFavoris.resultat)
  //       commit('setFavTotal', data.searchCommunFavoris.total)
  //       dispatch('fetchMoreFav', 1)
  //     })
  //   } catch (e) {
  //     console.error('erreur lors de la récupération des favoris')
  //   }
  // },
}

const mutations = {
  setSelectedBusterTemplate (state, payload) {
    state.selectedBusterTemplate = payload
  },
  setBusterTemplates (state, payload) {
    state.busterTemplates = payload
  },
  setOwnedBusterTemplates (state, payload) {
    state.ownedBusterTemplates = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}