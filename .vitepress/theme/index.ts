import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './styles/vars.css'
import './styles/base.css'
import './styles/components.css'

export default {
  extends: DefaultTheme,
  Layout,
}
