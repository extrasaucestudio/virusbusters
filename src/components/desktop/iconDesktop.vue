<script>

export default {
  name: 'IconFile',
  props: {
    title: { required: false, type: String, default: 'Untitled icon' },
    action: { required: false, type: String, default: '' },
    image: { required: false, type: String, default: '@/assets/images/twitter-logo.svg' },
    private: { required: false, type: Boolean, default: false }
  },
  data () {
    return {
    }
  },
  mixins: [],
  computed: {
    activeWindow: {
      set (val) { this.$store.commit('Desktop/setActiveWindow', val) },
      get () { return this.$store.state.Desktop.activeWindow }
    },
    settingsWindow: {
      set (val) { this.$store.commit('Desktop/setSettingsWindow', val) },
      get () { return this.$store.state.Desktop.settingsWindow }
    },
    customizationWindow: {
      set (val) { this.$store.commit('Desktop/setCustomizationWindow', val) },
      get () { return this.$store.state.Desktop.customizationWindow }
    },
    computersWindow: {
      set (val) { this.$store.commit('Desktop/setComputersWindow', val) },
      get () { return this.$store.state.Desktop.computersWindow }
    },
    quickLinksWindow: {
      set (val) { this.$store.commit('Desktop/setQuickLinksWindow', val) },
      get () { return this.$store.state.Desktop.quickLinksWindow }
    },
    collectionWindow: {
      set (val) { this.$store.commit('Desktop/setCollectionWindow', val) },
      get () { return this.$store.state.Desktop.collectionWindow }
    },
    blenderWindow: {
      set (val) { this.$store.commit('Desktop/setBlenderWindow', val) },
      get () { return this.$store.state.Desktop.blenderWindow }
    },
    riskyClickWindow: {
      set (val) { this.$store.commit('Desktop/setRiskyClickWindow', val) },
      get () { return this.$store.state.Desktop.riskyClickWindow }
    },
    popupFighterWindow: {
      set (val) { this.$store.commit('Desktop/setPopupFighterWindow', val) },
      get () { return this.$store.state.Desktop.popupFighterWindow }
    },
    rigHubWindow: {
      set (val) { this.$store.commit('Desktop/setRigHubWindow', val) },
      get () { return this.$store.state.Desktop.rigHubWindow }
    },
    leaderboardWindow: {
      set (val) { this.$store.commit('Desktop/setLeaderboardWindow', val) },
      get () { return this.$store.state.Desktop.leaderboardWindow }
    },
    contactsWindow: {
      set (val) { this.$store.commit('Desktop/setContactsWindow', val) },
      get () { return this.$store.state.Desktop.contactsWindow }
    }
  },
  methods: {
    launchAction (action) {
      // console.log('launch', action)
      if (action) {
        this.activeWindow = action
        // console.log('launch', this.activeWindow)
        if (action === 'settings') {
          this.settingsWindow = false
          this.settingsWindow = true
        } else if (action === 'customization') {
          this.customizationWindow = false
          setTimeout(() => {
            this.customizationWindow = true
          }, 100)
        } else if (action === 'quicklinks') {
          this.quickLinksWindow = false
          setTimeout(() => {
            this.quickLinksWindow = true
          }, 100)
        } else if (action === 'collection') {
          this.collectionWindow = false
          setTimeout(() => {
            this.collectionWindow = true
          }, 100)
        } else if (action === 'blender') {
          this.blenderWindow = false
          setTimeout(() => {
            this.blenderWindow = true
          }, 100)
        } else if (action === 'risky') {
          this.riskyClickWindow = false
          setTimeout(() => {
            this.riskyClickWindow = true
          }, 100)
        } else if (action === 'fighter') {
          this.popupFighterWindow = false
          setTimeout(() => {
            this.popupFighterWindow = true
          }, 100)
        } else if (action === 'computer') {
          this.rigHubWindow = false
          setTimeout(() => {
            this.rigHubWindow = true
          }, 100)
        } else if (action === 'leaderboard') {
          this.leaderboardWindow = false
          setTimeout(() => {
            this.leaderboardWindow = true
          }, 100)
        } else if (action === 'contacts') {
          this.contactsWindow = false
          setTimeout(() => {
            this.contactsWindow = true
          }, 100)
        }
      }
    }
  }
}
</script>
<template lang='pug'>
  .icon-desktop.pointer(@click='launchAction(action)')
    .image-wrapper
      div.fallback-image(v-if='private') ?
      v-img(v-else, :src="require('@/assets/images/icons/' + image)", contain, height='50px')
      //- div(v-else) X
    .text-wrapper {{title}}
</template>
<style lang='sass'>
  .icon-desktop
    user-select: none
    padding: 8px 10px 5px 10px
    margin: 10px
    position: relative
    display: flex
    flex-direction: column
    align-items: center
    width: 95px

    &::after
      content: ''
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background-color: rgba(255,255,255,0.25)
      opacity: 0
      border: solid 1px rgba(0,0,0,0.5)
    &:hover
      &::after
        opacity: 1
    .image-wrapper
      filter: drop-shadow(2px 3px 2px #000000CC)
      width: 50px
      height: 50px
      // background-color: white
      .fallback-image
        font-family: $display-font
        font-size: 35px
        text-align: center
        color: var(--v-accent-base)
    .text-wrapper
      font-weight: 500
      margin-top: 8px
      color: white
      font-size: 13px
      text-align: center
      line-height: 1.25
      text-shadow: 1px 1px 4px #000, 1px 1px 1px #000
      word-break: break-word

</style>
