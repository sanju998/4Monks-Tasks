import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SignIn from './pages/SignIn/SignIn';
import ShortsVideo from './pages/ShortsVideo/ShortsVideo';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={
            <div className='main-div'>
              <Button className='mx-4 fw-semibold py-2 px-4 bg-success'> <Link className='text-white' to="/SignIn">Task 1 </Link></Button>
              <Button className='mx-4 fw-semibold py-2 px-4 bg-success'><Link className='text-white' to="/ShortsVideo">Task 2 </Link></Button>
            </div>
          }>
          </Route>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/ShortsVideo" element={<ShortsVideo />} />
        </Routes>
      </Router>



    </>
  );
}

export default App;