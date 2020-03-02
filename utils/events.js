import Vue from 'vue'

Vue.mixin({
  methods: {
    scrollToElement (el) {
      if (el) {
        this.$velocity(
          el,
          'scroll',
          {
            duration: 500,
            easing: 'ease-in'
          }
        )
      }
    }
  }
})