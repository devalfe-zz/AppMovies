import Vue from 'vue'
import i18n from '~/plugins/i18n'

import '~/plugins'

Vue.config.productionTip = false

new Vue({
    i18n: i18n,
}).$mount('#app');