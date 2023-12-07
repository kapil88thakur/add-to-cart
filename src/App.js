import logo from './logo.svg';
import Shop from './Layouts/Shop';
import Home from './components/Home';
import './App.css';
import {createBrowserRouter, Link, RouterProvider,createRoutesFromElements,Route} from 'react-router-dom';
function App() {
 const router= createBrowserRouter([
 {     path:'/home',element:<Home /> },
 {     path:'/',element:<Shop /> }
 ]);


  return (<>

    <div className="App">
        <RouterProvider router={router} />
    </div>
  </>
  
  );
}

export default App;
