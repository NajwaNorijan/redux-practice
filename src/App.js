import Counter from "./features/counter/Counter";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";

function App() {
  return (
    <Router>
      <main className="App">
        <Routes>
          <Route exact path="/" element={<Counter />} />
          <Route exact path="/page1" element={<Page1 />} />
          <Route exact path="/page2" element={<Page2 />} />
          <Route exact path="/page3" element={<Page3 />} />
        </Routes>
        {/* <Counter /> */}
      </main>
    </Router>
  );
}

export default App;
