

import Adminhome from './Adminhome.jsx';
import Login from './Login';
import SignUp from './SignUp';
import Userhome from './Userhome.jsx';
import About from './About.jsx';
import './App.css';
import Post from './Post.jsx';
import PPost from './PPost.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (

    <Router>
      
      <Routes>
    
     
            <Route path="/" element={<Login />} /> 
           
           <Route path="/signup" element={<SignUp />} />
           <Route path="/userhome" element={<Userhome />} />
           <Route path="/adminhome" element={<Adminhome />} />
           <Route path="/about" element={<About />} />
           <Route path="/post" element={<Post />} />
           <Route path="/ppost" element={<PPost />} />
    

       
     
     </Routes>
        </Router>



   
  );
};

export default App;
