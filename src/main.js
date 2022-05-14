import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Card from 'primevue/card'

import "primevue/resources/themes/saga-blue/theme.css" // テーマ
import "primevue/resources/primevue.min.css" // ベース
import "primeicons/primeicons.css" // アイコン
import "primeflex/primeflex.css" // primeflex

createApp(App).mount('#app')
  .use(PrimeVue)
  .component("Card", Card)

