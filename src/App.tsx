import React from 'react'
import logo from './logo.svg'
import './App.css'
import { ShopListPage } from './pages/ShopListPage'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Body>
        <Sidebar />
        <ShopListPage />
      </Body>
    </div>
  )
}

export default App
