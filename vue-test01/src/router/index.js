import Vue from "vue";
import Router from "vue-router";

const Layout = () => import("@/layout/layout");

const Home = () => import("@/view/home");

Vue.use(Router)
export default new Router({
  mode: "hash", // https://router.vuejs.org/api/#mode
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: "/",
      redirect: "/home",
      name: "layout",
      component: Layout,
      children: [
        {
          path: "/home",
          name: "Home",
          component: Home,
          meta: {
            label: "首页",
          },
        },
      ],
    },
  ],
});
