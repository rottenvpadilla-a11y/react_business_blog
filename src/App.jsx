import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
