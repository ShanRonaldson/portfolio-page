import { Header } from "../components/Header";
import { NavRouter } from "../components/NavRouter";
import { Footer } from "../components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

export function App() {
  return (
    <div className="App">
     
        <Header className="App--header"/>
        <NavRouter className="App--content"/>
        <Footer className="App--footer"/>
    </div>
  );
}

export default App;
