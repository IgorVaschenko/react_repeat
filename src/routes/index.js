import About from "../pages/About"
import Login from "../pages/Login"
import PostIDPage from "../pages/PostIdPage"
import Posts from "../pages/Posts"



export const privateRoutes = [
    {path:'/posts', component: <Posts/>, exact:true},
    {path:'/posts/:id', component: <PostIDPage/>, exact:true},
    {path:'/about', component: <About/>, exact:false},
    {path:'*', component: <Posts/>, exact:false},
] 

export const publicRoutes = [ 
    {path:'*', component: <Login/>, exact:false},
] 


