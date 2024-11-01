//@ts-nocheck

import { createApp } from "vue"
import App from "./App.vue"
import "./style.css"

import Button from "@radiant-ui/components/button"
import "@radiant-ui/theme-chalk"

const plugins = [Button]
const app = createApp(App)
plugins.forEach(plugin => app.use(plugin))

app.mount("#app")
