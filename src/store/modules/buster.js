// import VueCookies from 'vue-cookies'
const state = {
  selectedBusterTemplate: null,
  busterTemplates: [],
  ownedBusterTemplates: [],
  ownedCursorTemplates: [],
  ownedThemeTemplates: [],
  ownedGameTemplates: [],
  ownedWallpaperTemplates: {
    wallpapers: [],
    busters: []
  },
  bustersData: [
    {
      template_id: '338184',
      bgColor: '#000000',
      dark: true,
      type: 'buster',
      name: 'Mesh Buster',
      disabled: false,
      public: false
    },
    {
      template_id: '339377',
      bgColor: '#ab5236',
      dark: false,
      type: 'buster',
      name: 'Pumpkin Buster',
      disabled: false,
      public: false
    },
    {
      template_id: '363872',
      bgColor: '#1D2B53',
      dark: false,
      type: 'buster',
      name: 'Gambler Buster',
      disabled: false,
      public: false
    },
    {
      template_id: '363854',
      bgColor: '#FE76A6',
      dark: false,
      type: 'buster',
      name: 'Pop-up Buster',
      disabled: false,
      public: false
    },
    {
      template_id: '391715',
      bgColor: '#29adff',
      dark: false,
      type: 'buster',
      name: 'Snowman Buster',
      disabled: false,
      public: false
    },
    {
      template_id: '404447',
      bgColor: '#ff004d',
      dark: false,
      type: 'buster',
      name: 'Nutcracker Buster',
      disabled: false,
      public: false
    },
    {
      template_id: '405745',
      bgColor: '#29adff',
      dark: false,
      type: 'buster',
      name: 'Booster Buster',
      disabled: false,
      public: false
    },
    {
      template_id: '489638',
      bgColor: '#ffec27',
      textColor: '#ffc04e',
      dark: true,
      type: 'buster',
      name: 'Easter Buster',
      disabled: false,
      public: false
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
  },
  setOwnedCursorTemplates (state, payload) {
    state.ownedCursorTemplates = payload
  },
  setOwnedThemeTemplates (state, payload) {
    state.ownedThemeTemplates = payload
  },
  setOwnedWallpaperTemplates (state, payload) {
    state.ownedWallpaperTemplates = payload
  },
  setOwnedGameTemplates (state, payload) {
    state.ownedGameTemplates = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
