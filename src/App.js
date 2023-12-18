import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import HomeScreen from './screens/Home'
import PrivacyPolicyScreen from './screens/PrivacyPolicy'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
    errorElement: <HomeScreen />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicyScreen />,
    errorElement: <HomeScreen />,
  },
])

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
