import SidebarCard from "./components/SidebarCard";
import VideoCardSmall from "./components/VideoCardSmall";

function App() {
  return (
    <div>
      <SidebarCard
      tag= "Future"
      header="Why is Uber selling its autonomous-vehicle division?"
      text = "Self-driving cars were meant to be its futures"  
      date = "25 Feb 2021" />
      <VideoCardSmall />
    </div>
  );
}

export default App;
