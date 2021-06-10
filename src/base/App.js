import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";



library.add(fab)

export function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
