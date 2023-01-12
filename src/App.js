import "./App.css";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Articles from "./Components/Articles";
import SingleArticle from "./Components/SingleArticle"
import {Routes, Route} from  "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Routes>
    </div>
  );
}

export default App;
