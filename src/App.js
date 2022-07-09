import Contact from "./contact/Contact";
import Head from "./head/Head";
import Profile from "./profile/Profile";
import Project from "./projectSection/Project";

function App() {
  return (
    <div className="App">
      <Head />
      <Profile />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
