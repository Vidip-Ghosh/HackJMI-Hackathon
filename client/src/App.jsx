import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Dashboard from './components/Dashboard/Dashboard'
import Layout from './components/Layout'
import HomePage from './components/HomePage/HomePage'
import PdfExtractor from './components/PdfExtractor/PdfExtractor'
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index  />
    <Route path="dashboard"  element={<Dashboard />} />
    <Route path="homepage" element={<HomePage/>}/>
    <Route path='pdfextractor' element={<PdfExtractor/>}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
