import Header from "./components/Header";
import HeadlineCard from "./components/HeadlineCard";
import SidebarCard from "./components/SidebarCard";
import VideoCardSmall from "./components/VideoCardSmall";
import Footer from './components/Footer'
import Opinion from './components/Opinion'


function App() {
  return (
    <div>
      <Header />
      <HeadlineCard headline="Headlines" tag="World Economy" header="Cities have stopped being the engines of
      growth and opportunity they once were" text="The pandemic is dealing prodigious blows to cities across the country. But the world can’t hope to thrive again if its cities don’t—they’re the places that have historically supplied the keys for unlocking human potential. Though beset by racism and other injustices, cities not only provided shared, robust public infrastructure like schools, libraries and transit systems, they stirred together vast numbers of people from different cultures
      and classes." time="1 Hhour ago" imgfooter="Illustration: Karolis Strautniekas"/>
      <SidebarCard
      tag= "Future"
      header="Why is Uber selling its autonomous-vehicle division?"
      text = "Self-driving cars were meant to be its futures"  
      date = "25 Feb 2021" />
      <VideoCardSmall />
      <Opinion tag='Opinion' author='Brice Du Trieux' opiniontitle='India turns to private sector to boost sluggish Covid-19 vaccine drive' date='25 Feb 2021'/>
      <Footer />
    </div>
  );
}

export default App;
