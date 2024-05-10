import logo from './logo.svg';
import './App.css';
import ImageSlider from './ImageSlider';

function App() {
  return (
    <div className="App">
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"2"}
        limit={"5"}
      />
    </div>
  );
}

export default App;
