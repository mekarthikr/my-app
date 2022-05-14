import logo from './logo.svg';
// import './App.css';
import UseStateReact from './components/useState';
import UseEffect from './components/useEffect';
import EventContainer from './components/eventContainer';
import { PostList } from './components/Axios/postlist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/list' element={<PostList/>}/>
              <Route path='/:id' element={<PostList/>}/>
            <Route/>
        </Routes>
      </BrowserRouter>
      

    </div>
    
  );
}

export default App;
