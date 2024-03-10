import React from 'react'
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Questionnaire from './Questionnaire'
import StemResultsPage from './ResultsPages/StemResultsPage';
import LiteratureArtsResultsPage from './ResultsPages/LiteratureArtsResultsPage';
import BusinessResultsPage from './ResultsPages/BusinessResultsPage';
import DesignResultsPage from './ResultsPages/DesignResultsPage';
import NotFoundPage from './NotFoundPage'
import { Route, Routes, useNavigate } from 'react-router-dom';


const App = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<Home />}> */}
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/questionnaire' element={<Questionnaire />} />
        <Route path='/stemResultsPage' element={<StemResultsPage />} />
        <Route path='/literatureArtsResultsPage' element={<LiteratureArtsResultsPage />} />
        <Route path='/businessResultsPage' element={<BusinessResultsPage />} />
        <Route path='/designResultsPage' element={<DesignResultsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      {/* </Route> */}
    </Routes>
  )
}

export default App