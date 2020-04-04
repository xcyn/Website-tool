import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import {
  Header,
  Container,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Row,
  Col,
  Button,
  Message,
  Tabs,
  TabPane,
  Form,
  FormItem,
  Input,
  Alert
} from 'element-ui';

Vue.use(Header)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Alert)


Vue.prototype.$message = Message



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
