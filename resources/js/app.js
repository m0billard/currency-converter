import './bootstrap';
import {createApp} from 'vue';
import FirstComponent from "../components/FirstComponent.vue"

const app = createApp({
  components: {
    FirstComponent
  }
});

app.mount('#app');