import './App.css'
import Header from './components/Header'
import Faq from './components/Faq'

function App() {

  return (
    <div className='bg-purple-100 min-h-screen'>
      <div className='relative'>
        <Header />
        <div className='absolute top-30 left-0 w-full h-full'>
          <Faq />
        </div>
      </div>
    </div>
  )
}

export default App
