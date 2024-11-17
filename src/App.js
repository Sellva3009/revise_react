// import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import Fakeapi from './components/Fakeapi';
// import Fetchdata from './components/Fetchdata';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Home from './components/Home';
import BlogPost from './components/BlogPost';
import Login from './components/Login';

const Navigation = ({ loggedIn }) => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/login">{!loggedIn ? `Login` : `LogOut`}</Link>
  </nav>
);

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
    });
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("loggedIn");
  };

  const handleLogin = () => {
    if (formData.username === 'user' && formData.password === 'password') {
      setLoggedIn(true);
      localStorage.setItem("loggedIn", 'true');
    } else {
      alert('Login failed');
    }
    
  };

  useEffect(() => {
      const storedLoginStatus = localStorage.getItem("loggedIn");
      if (storedLoginStatus === 'true') {
        setLoggedIn(true);
      }
     fetch("https://jsonplaceholder.typicode.com/posts")
       .then((res) => res.json())
       .then((result) => setData(result))
       .catch((err) => console.log(err));
  }, []);
  // return <Fetchdata />;
  return (
    // <><h1>heello</h1><Fakeapi /></>
    <Router>
      <Navigation
        loggedIn={loggedIn}
        formData={formData}
        handleInputChange={handleInputChange}
      />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/blog"
          element={<Fakeapi sharedData={data} loggedIn={loggedIn} />}
        />
        <Route path="/blog/:postId" element={<BlogPost sharedData={data} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/login"
          element={
            <Login
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              handleLogout={handleLogout}
              handleLogin={handleLogin}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
