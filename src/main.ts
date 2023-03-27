import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import router from "@/router/router";
import Vintersection from "@/derectives/Vintersection";
import derectives from "@/derectives";
import store from "@/store";

const app = createApp(App);
components.forEach(component => app.component(component.name, component));

derectives.forEach(dir => {
    app.directive(dir.name,  dir)
})
app.directive('intersection', Vintersection);

app
    .use(router)
    .use(store)
    .mount('#app')
