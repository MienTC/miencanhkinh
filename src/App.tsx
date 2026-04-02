import React, { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Intro from './features/home/components/Intro'
import Projects from './features/home/components/Projects'
import ProductList from './features/product/components/ProductList'
import ProductDetail from './features/product/components/ProductDetail'
import ContactForm from './features/contact/components/ContactForm'
import { Product } from './shared/types'

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  }

  const handleBack = () => {
    setSelectedProduct(null);
  }

  return (
    <div className="min-h-screen bg-white transition-all duration-700">
      <Navbar onHomeClick={handleBack} />
      <main className="animate-fade-in">
        {selectedProduct ? (
          <ProductDetail product={selectedProduct} onBack={handleBack} />
        ) : (
          <>
            <Intro />
            <Projects />
            <ProductList onProductClick={handleProductClick} />
            <ContactForm />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
