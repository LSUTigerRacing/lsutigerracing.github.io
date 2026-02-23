import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import ScrollToTop from './hooks/ScrollToTop'
import { HelmetProvider } from 'react-helmet-async'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <AppRoutes/>
      </BrowserRouter>
    </HelmetProvider>
  )
}