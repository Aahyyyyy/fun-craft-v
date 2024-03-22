import { createApp } from 'vue'
// import { MessageEventListener } from '@/utils/functions'
import FunWidget from '@/plugins'
import App from './App.vue'
// import router from './router'

const app = createApp(App)
// app.use(router)
app.use(FunWidget)
app.mount('#mine-h5-ui')

// 接收数据
// MessageEventListener(path => {
//   app.config.globalProperties.$router.push({ path })
// })
