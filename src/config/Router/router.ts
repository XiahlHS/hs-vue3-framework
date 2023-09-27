import hs from "hs-vue3";
import { Login, Analysis, Workplace, Pdf, AgGrid } from "@/views";

const Layout = hs.Layout

export const constantRouterMap = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard/analysis",
    name: "Root",
    meta: {
      hidden: true,
    },
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
    meta: {
      hidden: true,
      title: "t.common.login",
      noTagsView: true,
    },
  },
];

export const asyncRouterMap = [
  {
    path: "/dashboard",
    component: Layout,
    redirect: "/dashboard/analysis",
    name: "Dashboard",
    meta: {
      title: "t.router.dashboard",
      icon: "ant-design:dashboard-filled",
      alwaysShow: true,
    },
    children: [
      {
        path: "analysis",
        component: Analysis,
        name: "Analysis",
        meta: {
          title: "t.router.analysis",
          noCache: true,
          affix: true,
        },
      },
      {
        path: "workplace",
        component: Workplace,
        name: "Workplace",
        meta: {
          title: "t.router.workplace",
          noCache: true,
        },
      },
    ],
  },
  {
    path: "/doc",
    redirect: "/doc/pdf",
    name: "Document",
    meta: {
      title: "t.router.document.title",
      icon: "solar:document-bold",
      alwaysShow: true,
    },
    children: [
      {
        path: "pdf",
        component: Pdf,
        name: "Pdf",
        meta: {
          title: "t.router.document.pdf",
          noCache: true,
        },
      },
    ],
  },
  {
    path: "/table",
    component: Layout,
    redirect: "/table/ag-grid",
    name: "AgGrid",
    meta: {
      title: "t.router.table.title",
      icon: "clarity:table-line",
      alwaysShow: true,
    },
    children: [
      {
        path: "ag-grid",
        component: AgGrid,
        name: "AgGrid",
        meta: {
          title: "t.router.table.agGrid",
          noCache: true,
        },
      },
    ],
  },
];

const routes = {
  constant: constantRouterMap,
  async: asyncRouterMap,
};

const permission = () => {
  return {
    beforeEach: (...params: any[]) => {
      let [to, from, next] = params;
      // next();
    },
    afterEach: (...params: any[]) => {
      let [to, from, failure] = params;
    },
  };
};

export default {
  routes,
  permission,
};
