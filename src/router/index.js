// 配置路由表 
 
// 路由懒加载
import { lazy} from "react";
 
// 引入图标 
import { UserSetOutline, CompassOutline, ContentOutline } from 'antd-mobile-icons'
 
// 二级路由表
export let mainRouter = [
    
]
 
// 一级路由表
const routes = [
    // {
    //     path: "/home",
    //     element: lazy(() => import('@/pages/home/Index')),
    //     // children: mainRouter
    // },
    {
        path: "/bookshelf",
        key:'bookshelf',
        element: lazy(() => import('@/pages/bookshelf/Index')),
        title: "书架",
        icon: < ContentOutline />
    },
    {
        path: "/discover",
        key:'discover',
        element: lazy(() => import('@/pages/discover/Index')),
        title: "发现",
        icon: < CompassOutline />
    },
    {
        path: "/mine",
        key:'mine',
        element: lazy(() => import('@/pages/mine/Index')),
        title: "我的",
        icon: < UserSetOutline />
    },
    {
        path: "*",
        to: "/"
    },
    {
        path: "/",
        to: "/bookshelf"
    },
]
 
// 抛出路由表
export default routes