<script>
import WindowsPaths from '@/mixins/windowsPaths.js'
import VirusDetails from '@/components/desktop/work/virusDetails'

export default {
  name: 'VirusNfts',
  components: {
    VirusDetails
  },
  props: {
    // activeWindow: { required: true, type: Object },
    // currentWindow: { required: false, type: Object, default: () => {}},
    currentPath: { required: false, type: Object, default: () => {} },
    windowId: { required: true, type: String }
  },
  data () {
    return {
      viruses: [
        {
          title: 'Spyware',
          rarity: 'Low Danger',
          detailsPath: {
            title: 'Spyware',
            routeName: 'spyware',
            type: 'Route',
            level: 2
          }
        },
        {
          title: 'Snail Loader',
          rarity: 'Low Danger',
          detailsPath: {
            title: 'Snail Loader',
            routeName: 'snail-loader',
            type: 'Route',
            level: 2
          }
        },
        {
          title: 'Bloater',
          rarity: 'Moderate Danger',
          detailsPath: {
            title: 'Bloater',
            routeName: 'bloater',
            type: 'Route',
            level: 2
          }
        },
        {
          title: 'Folder Worm',
          rarity: 'High Danger',
          detailsPath: {
            title: 'Folder Worm',
            routeName: 'folder-worm',
            type: 'Route',
            level: 2
          }
        },
        {
          title: 'Cursor Tracker',
          rarity: 'Critical Danger',
          detailsPath: {
            title: 'Cursor Tracker',
            routeName: 'cursor-tracker',
            type: 'Route',
            level: 2
          }
        }
      ]
    }
  },
  mixins: [WindowsPaths],
  mounted () {
  },
  computed: {
  },
  methods: {
  }
}
</script>
<template lang='pug'>
  .window-content
    template(v-if='currentPath.level === 1')
      .nfts__wrapper
        .nft-card(v-for='(virus,index) in viruses', @click='updateRoute(windowId, virus.detailsPath)')
          div.nft-preview()
            div.owned-qty
             span x210
            v-img(:src="require('@/assets/images/placeholders/common-virus-static.png')", contain)
          .nft-content
            div.status-chip DETECTED!
            span.nft-title {{virus.title}}
            div.nft-rarity {{virus.rarity}}
    template(v-else-if='currentPath.level === 2')
      //- pre {{currentPath}}
      virus-details(:id='currentPath.routeName')
      //- pre {{currentWindow}}
    //- div.header__wrapper
      //- v-btn(@click='$emit("goBack")', outlined) <
      div.header-title Viruses
</template>
<style lang='sass'>
  .nfts__wrapper
    display: flex
    flex-wrap: wrap
    justify-content: center
    .nft-card
      padding: 10px
      display: flex
      flex-direction: column
      .nft-preview
        width: 140px
        height: 170px
        position: relative
        // background-color: grey
        .owned-qty
          position: absolute
          top: -10px
          right: 10px
          height: 40px
          width: 40px
          font-size: 14px
          font-weight: bold
          background-color: var(--v-secondary-base)
          color: white
          border-radius: 20px
          z-index: 10
          display: flex
          align-items: center
          text-align: center
          justify-content: center
          transform: rotate(-15deg)
      .nft-content
        // font-family: $code-font
        text-align: center
        padding: 5px
        .status-chip
          padding: 2px
          border: solid 1px red
          color: red
          font-weight: bold
          border-radius: 15px
          font-size: 12px
          margin-bottom: 5px
        .nft-title
          font-family: $code-font
          font-size: 16px
          font-weight: bold
        .nft-rarity
          font-family: $code-font
          font-size: 12px
</style>
