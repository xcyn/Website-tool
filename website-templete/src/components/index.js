import xcyPage from './index.vue'

/* istanbul ignore next */
xcyPage.install = function (Vue) {
  Vue.component(xcyPage.name, xcyPage)
}

export default xcyPage
