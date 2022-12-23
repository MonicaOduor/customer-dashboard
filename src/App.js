import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Accounts from './pages/Accounts/Accounts'
import Queries from './pages/Queries/Queries'
import Clients from './pages/Clients/Clients'
import Settings from './pages/Settings/Settings'
import New from './pages/New/New'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Dashboard />} />
          <Route path='/accounts' element={<Accounts />} />
          <Route path='/queries' element={<Queries />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/settings' element={<Settings />}/>
          <Route path='/new' element={<New />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
