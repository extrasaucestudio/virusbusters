<script>
// import WindowsPaths from '@/mixins/windowsPaths.js'

export default {
  name: 'AirdropStatus',
  components: {
  },
  props: {
    // activeWindow: { required: true, type: Object },
    // windowId: { required: true, type: String }
  },
  data () {
    return {
      currentStatus: {
        type: 'error',
        color: 'red',
        icon: 'mdi-alert',
        description: 'You are missing components to receive weekly airdrops. Go check in Computer Status for more infos'
      }
    }
  },
  // mixins: [WindowsPaths],
  mounted () {
  },
  computed: {
  },
  methods: {

  }
}
</script>
<template lang='pug'>
  .airdrop-status__banner
    v-alert(:color='currentStatus.color', dark='', :icon='currentStatus.icon', border='left', dense)
      | {{currentStatus.description}}
</template>
<style lang='sass' scoped>
</style>
