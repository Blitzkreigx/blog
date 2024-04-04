import { Routes, Route } from 'react-router-dom';
import Header from "./components/header"
import Footer from "./components/footer"
import BlogPost from "./components/blog"
import AcercaDe from "./components/acerca"
import Article from "./components/article"
import OneArticle from './articles/one-article';
import TwoArticle from './articles/two-article';
import ThreeArticle from './articles/three-article';
import './styles/input.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>          
          <Route path="/" element={ <BlogPost /> } />
          <Route path="acerca-de" element={ <AcercaDe /> } />
          <Route path="one-article" element={ <OneArticle /> } />
          <Route path="two-article" element={ <TwoArticle /> } />
          <Route path="three-article" element={ <ThreeArticle /> } />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App