import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo/DialogDemo.vue";
import TabsDemo from "./components/TabDemo/TabsDemo.vue";
import InputDemo from "./components/InputDemo/InputDemo.vue";
import TableDemo from "./components/TableDemo/TableDemo.vue";

import { h } from 'vue';
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
const history = createWebHashHistory();
const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect: '/doc/intro' },
        { path: "intro", component: md(intro) },
        { path: "get-started", component: md(getStarted) },
        { path: "install", component: md(install) },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
        { path: "input", component: InputDemo },
        { path: "table", component: TableDemo }
      ],
    },
  ],
});
router.afterEach(() => {
});
