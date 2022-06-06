import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from '../routes/';

const AppRouter = () => {

    const {isAuth} = useContext(AuthContext)

    return (
        <Routes>
            {isAuth 
            ? privateRoutes.map(route => 
                <Route
                    element={route.component}
                    path={route.path}
                    exact={route.exact}
                    key = {route.path}
                />
            )
            : publicRoutes.map(route => 
                <Route
                    element={route.component}
                    path={route.path}
                    exact={route.exact}
                    key = {route.path}
                />
            )
            }
            
            
            

            {/* <Route exact path='/posts' element={<Posts />} />
            <Route exact path='/posts/:id' element={<PostIdPage/>}/>
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Posts />} /> */}
            {/* <Route path='*' element={<Error />} /> */}
        </Routes>
    );
}

export default AppRouter;