import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../../components/layout/Navbar'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import ProductList from '../../product/components/ProductList'
import ContactForm from '../../contact/components/ContactForm'
import Footer from '../../../components/layout/Footer'

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen bg-white transition-all duration-700">
      <Navbar onHomeClick={handleBack} />
      <main className="animate-fade-in">
        <Intro />
        <Projects />
        <ProductList />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
