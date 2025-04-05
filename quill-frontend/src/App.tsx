

import './App.css'
import { ThemeProvider } from './components/theme-provider'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
     <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className='min-h-screen bg-background text-foreground'>
      <Navbar/>
      </div>
     </ThemeProvider>
    </>
  )
}

export default App
