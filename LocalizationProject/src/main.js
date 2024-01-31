import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from "vue-i18n";
import App from './App.vue'

import messages from "@intlify/unplugin-vue-i18n/messages";

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "fa",
    fallbackLocale: "fa",
    availableLocales: ["fa", "en"],
    messages: messages,
});

createApp(App).use(i18n).mount('#app')
