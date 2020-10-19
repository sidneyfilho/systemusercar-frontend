import Vue from 'vue';
import Vuetify from 'vuetify';
import { Ripple } from 'vuetify/lib/directives'
import pt from 'vuetify/es5/locale/pt';
import 'vuetify/dist/vuetify.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify, {
  directives: {
    Ripple
  }
})

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#D03E35',
        secondary: '#FFE9BB',
        accent: '#49A0FD',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        neutral: '#FEFEFE',
        background: '#EFF2F6'//'#F5F6FA'
      },
    },
  },
    lang: {
      locales: { pt },
      current: 'pt',
    },
  icons: {
    iconfont: 'md',
  }
});
