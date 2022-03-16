import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Paragraph } from "./components/Paragraph";
// import Paragraph from "./components/Paragraph";
import { Input } from "./components/Input";
import { MySelf } from "./components/MySelf";
import {Counter} from "./components/Counter"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Paragraph />
      {/* <Paragraph /> */}
      <Input />
      <MySelf name="Joshua" age={20} gender="male" />
      <MySelf name="Mary" age={19} gender="female" />
      <MySelf name="Josh" age={18} gender="male" />
      <MySelf name="Efua" age={23} gender="female" />
      <MySelf name="John" age={14} gender="male" />
      <Counter />
    </div>
  );
}

export default App;
