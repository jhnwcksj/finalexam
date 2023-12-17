import './App.css';
import { useState } from 'react';
import Authentication from './login';
import Register from './register';
import Token from './Token';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import SearchPage from './1/SearchPage.js';
import ForumPage from './1/ForumPage.js';
import OrderRating from './1/OrderRating.js';
import Button from 'react-bootstrap/Button';
import Header from './header.js';
import YoutubeSearch from './1/YoutubeSearch';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { Button, Navbar, Container } from 'react-bootstrap';
// import Nav from './1/nav';

function App() {
  
  const [isOpen, setOpen] = useState(false);
  
  return (
  
  
    <Router>
    {/* <div className="App-header">

      <div className='logo-parent'>
        <a href='/'><img src={logo} alt='logo'></img></a>
        
      </div>

      <div className='links-parent'>
        <a href="/token" id="nav-help"><i className="fa fa-life-bouy"></i> Check Token</a>
        <a href="/orderrating" id="nav-help"><i className="fa fa-life-bouy"></i> Ratings</a>
        <a href="/forum" id="nav-forums"><i className="fa fa-group"></i> Forum</a>
        <a href="/search" id="nav-search"><i className="fa fa-search"></i> Search</a>
        <a href="/authenticate" id="nav-member"><i className="fa fa-users"></i> Login</a>
        <a href="/register" id="nav-help"><i className="fa fa-life-bouy"></i> Sign up</a>
        
        
      </div>
    </div> */}
      <Header />
                           
      <div className='main-content'>
        <Routes>

        
        <Route path="/" element={<>
          
          <div class="discordlogoandtext">
          <div class="container">
            <div class="input-container">
                
                <h1>To order an edit</h1>
                <input type="text" placeholder="Write your login or phone number.." id="inputBox"/>
                <input type="button" value="Send" id="addBtn"/>
                {/* <Button>Send</Button> */}
            </div>
            <script src="script.js"></script>
            </div>
        </div>

          <a class="label">
  <div class="label__column" id="lanner">
      <div class="column_words" id="column_lanner">
          <span class="label__letter" id="l">L</span>
          <span class="label__letter" id="a">A</span>
          <span class="label__letter" id="n">N</span>
          <span class="label__letter" id="n1">N</span>
          <span class="label__letter" id="e">E</span>
          <span class="label__letter" id="r">R</span>
      </div>
  </div>
  <div class="label__lanner_studios">
      <div class="label__lanner_studios__row" id="lanner">
          <div class="words" id="word_lanner">
              <span class="label__letter" id="l">L</span>
              <span class="label__letter" id="a">A</span>
              <span class="label__letter" id="n">N</span>
              <span class="label__letter" id="n1">N</span>
              <span class="label__letter" id="e">E</span>
              <span class="label__letter" id="r">R</span>
          </div>
      </div>
      <div class="label__lanner_studios__row" id="studios">
          <div class="words" id="word_studios">
              <span class="label__letter" id="s">S</span>
              <span class="label__letter" id="t">T</span>
              <span class="label__letter" id="u">U</span>
              <span class="label__letter" id="d">D</span>
              <span class="label__letter" id="i">I</span>
              <span class="label__letter" id="o">O</span>
              <span class="label__letter" id="s1">S</span>
          </div>
      </div>
  </div>
  <div class="label__column" id="studios">
      <div class="column_words" id="column_studios">
          <span class="label__letter" id="s">S</span>
          <span class="label__letter" id="t">T</span>
          <span class="label__letter" id="u">U</span>
          <span class="label__letter" id="d">D</span>
          <span class="label__letter" id="i">I</span>
          <span class="label__letter" id="o">O</span>
          <span class="label__letter" id="s1">S</span>
      </div>
  </div>
</a>
              </>} />

          <Route path="/register" element={<>
                <Register/>
                </>} />



          <Route path="/token" element={<>
                <Token/>
                </>} />

          <Route path="/authenticate" element={<>
                <Authentication/>
                </>} />


          
          <Route path="/search" Component={SearchPage} />
          
            
          <Route path="/forum" element={<>
                <ForumPage/>
                {/* {jsxTitle} */}
                {/* <link href="https://fonts.googleapis.com/css?family=Droid+Sans" rel="stylesheet" type="text/css" /> */}
      {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css" integrity="sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=" crossorigin="anonymous"></link> */}
            
      <link rel="stylesheet" href="https://bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
    


      {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" /> */}
{/*       
      <link type="text/css" rel="stylesheet" href="https://sampforum.blast.hk/cache/themes/theme3/global.css?t=1628341445" />
      <link type="text/css" rel="stylesheet" href="https://sampforum.blast.hk/cache/themes/theme3/css3.css?t=1625923460" />
      <link type="text/css" rel="stylesheet" href="https://sampforum.blast.hk/cache/themes/theme3/responsive.css?t=1625923460" />
      <link type="text/css" rel="stylesheet" href="https://sampforum.blast.hk/cache/themes/theme3/grey.css?t=1628447859" />
       */}
                {/* <Nav /> */}
                </>} />
                <Route path="/orderrating" element={<>
                <OrderRating />
                </>} />
                
                <Route path="/movies" element={<YoutubeSearch />} />
                
              
        </Routes>
      </div>
    </Router>
  );
  
}




// function App() {

//   return(
   
 
//         <Router>
//           <div>
//             <Routes>
//               <Route path="/" element={<>
//               <Register />
//               }
//             </Routes>
//           </div>
//         </Router>

      
 
    
//   )
  
//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //     </header>
//   //   </div>
//   // );
// };

export default App;
