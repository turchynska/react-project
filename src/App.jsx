import { lazy, Suspense} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CardReviews from './components/CardReviews/CardReviews';
import Features from './components/Features/Features';



const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const DetailsPage = lazy(()=> import('./pages/DetailsPage/DetailsPage'));

function App() {
  return (
    <>
  <Suspense fallback={null}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path="/catalog/:camperId" element={<DetailsPage />}>
            <Route path='features' element={<Features />} />
            <Route path='reviews' element={<CardReviews/>}/>
          </Route>
        </Routes> 
 </Suspense>
    </>
  );
}

export default App
