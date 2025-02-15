import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css'
import CodeBox from './components/CodeBox'
import HomePage from './components/HomePage'


function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/CodeBox" element={<CodeBox />} />
      </Routes>
    </Router>
  )
}

export default App
