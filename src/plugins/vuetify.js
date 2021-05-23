import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: { 
        dark: true,
        options: { customProperties: true }, 
        themes: {
            light: {
              primary: '#009688',
              secondary: '#4db6ac',
              tertiary: '#e0f2f1',
              accent: '#8c9eff',
              error: '#b71c1c',
            },
            dark: {
                primary: '#263238',
                secondary: '#37474f',
                tertiary: '#455a64',
                accent: '#8c9eff',
                error: '#b71c1c',
              },
          },
        
    },
});
