import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageContainer from "./containers/PageContainer";
import CardDetail from "./pages/CardDetail";

export default function App() {
  return (
    <div className="App">
  <PageContainer>
    <BrowserRouter >
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/detail/:id" element={<CardDetail/>}/> 
    </Routes>
  </BrowserRouter>
</PageContainer>
    <Footer/>
    </div>

  )
}