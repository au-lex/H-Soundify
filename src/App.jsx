import { useState } from 'react'
import './App.css'

import Task1 from './Component/Task1'
import Task2 from './Component/Task2'
import Task3 from './Component/Task3'
import Task4 from './Component/Task4'
import Featurepro from './Component/Featurepro'
import Newarrival from './Component/Newarrival'

function App() {
 

  return (
  <>
 <Task1 />
 <Newarrival/>
  <Task2 />
 <Featurepro/>
  <Task3 />
  <Task4 />
  </>
  )
}

export default App
