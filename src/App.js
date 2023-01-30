import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <TopNav />
      <SideNav />
      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
