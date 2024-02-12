import { Routes, Route } from 'react-router-dom';
import Header from "./components/header"
import Footer from "./components/footer"
import BlogPost from "./components/blog"
import AcercaDe from "./components/acerca"
import Article from "./components/article"
import './styles/input.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>          
          <Route path="/" element={ <BlogPost /> } />
          <Route path="acerca-de" element={ <AcercaDe /> } />
          <Route path="post" element={ <Article /> } />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App