import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './features/home/pages/HomePage'
import ProjectsPage from './features/projects/pages/ProjectsPage'
import ProductDetail from './features/product/components/ProductDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
