import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
