

import './App.css'
import { ThemeProvider } from './components/theme-provider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
function App() {

  return (
    <>
      <div className='min-h-screen bg-background text-foreground'>
      <Navbar/>
      <Hero/>
      </div>
    </>
  )
}

export default App
