import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Feed } from './pages/Feed.tsx'
import { Profile } from './pages/Profile.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
   <Routes>
      <Route path='/' Component={Feed} />
      <Route path='/profile' Component={Profile}/>
   </Routes>
  </BrowserRouter>,
)
