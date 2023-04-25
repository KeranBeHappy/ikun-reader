// 配置路由表 

// 引入图标 
import { UserSetOutline, CompassOutline, ContentOutline } from 'antd-mobile-icons'


import { Navigate, } from "react-router-dom";

import Bookshelf from '@/pages/Bookshelf/Bookshelf'
import Discover from '@/pages/Discover/Discover'
import Mine from '@/pages/Mine/Mine'

// 二级路由表
export let mainRouter = [

]

// 一级路由表
const routes = [
    {
        path: "/",
        element: <Navigate to={"/bookshelf"} />,
    },
    {
        path: "/bookshelf",
        key: 'bookshelf',
        element: <Bookshelf></Bookshelf>,
        title: "书架",
        icon: < ContentOutline />
    },
    {
        path: "/discover",
        key: 'discover',
        element: <Discover></Discover>,
        title: "发现",
        icon: < CompassOutline />
    },
    {
        path: "/mine",
        key: 'mine',
        element: <Mine></Mine>,
        title: "我的",
        icon: < UserSetOutline />
    },
    {
        path: "*",
        to: "/"
    },
]

// 抛出路由表
export default routes