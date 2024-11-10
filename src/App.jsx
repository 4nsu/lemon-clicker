import Balance from './components/Balance'
import Booster from './components/Booster'
import Lemon from './components/Lemon'
import './App.css'

function App() {

  return (
    <>
      <div>
        <Balance total="27" />
        <Lemon />
        <Booster value="3.2" />
      </div>  
    </>
  )
}

export default App