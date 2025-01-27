import { lazy, Suspense} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';



const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const CatalogPage = lazy(() => import ('./pages/CatalogPage/CatalogPage'))

function App() {
  return (
    <>
  <Suspense>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
        </Routes> 
 </Suspense>
    </>
  );
}

export default App
