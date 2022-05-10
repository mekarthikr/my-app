import logo from './logo.svg';
// import './App.css';
import UseStateReact from './components/useState';
import UseEffect from './components/useEffect';
import EventContainer from './components/eventContainer';
import { PostList } from './components/Axios/postlist';

function App() {
  return (
    <div className="App">
      <PostList/>
    </div>
  );
}

export default App;
