import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@mantine/carousel/styles.css';
import HomePage from './components/pages/HomePage';
import FindJobs from './components/pages/FindJobs';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import FindTalentPage from './components/pages/FindTalentsPage';
import TalentProfilePage from './components/pages/TalentProfilePage';

function App() {
  return (
    <MantineProvider defaultColorScheme='dark'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='*' element={<HomePage />} />
          <Route path='/find-jobs' element={<FindJobs />} />
          <Route path='/find-talent' element={<FindTalentPage />} />
          <Route path='/talent-profile' element={<TalentProfilePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
