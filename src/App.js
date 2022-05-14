
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Categories from './Components/Categories/Categories'
import Read from './Components/Read/Read'
import Topics from './Components/Topics/Topics'
import Faq from './Components/Faq/Faq'
import Video from './Components/Video/Video'
function App() {
  return (
    <div className="App">
      <div className="body-bg"></div>
      <Navbar/>
      <Categories/>
      <Video/>
      <Faq/>
      <Read/>
      <Topics/>
      <Footer/>
    </div>
  );
}

export default App;
