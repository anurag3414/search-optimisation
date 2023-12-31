import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Navbar from "./component/navbar"
import P1 from "./pages/P1"
import P2 from "./pages/P2";
import P3 from "./pages/P3";
import FoodForm from "./Food_Registration/Food";
import EventForm from "./Events_Registration/Events";
import MovieForm from "./Movie_Registration/Movie";
import AdventureForm from "./Adventure_Registration/Adventure";
import SSForm from "./SightSeeing_Registration/SightSeeing";
import MoocForm from "./Mooc_Registration/Mooc";
import MovieSearch from "./Search/Movie";
import FoodSearch from "./Search/Food";
import SSSearch from "./Search/Sightseeing";
import AdventureSearch from "./Search/Adventure";
import MoocSearch from "./Search/Mooc";
import EventSearch from "./Search/Events";

const App = () => {
  return(
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {
          <Home />
          } />
          <Route path = "/p1" element = {<P1 />} />
          <Route path = "/p2" element = {<P2 />} />
          <Route path = "/p3" element = {<P3 />} />
          <Route path = "/movie/register" element = {<MovieForm />} />
          <Route path = "/movie/search" element = {<MovieSearch />} />
          <Route path = "/food/register" element = {<FoodForm />} />
          <Route path = "/food/search" element = {<FoodSearch />} />
          <Route path = "/event/register" element = {<EventForm />} />
          <Route path = "/event/search" element = {<EventSearch />} />
          <Route path = "/adventure/register" element = {<AdventureForm />} />
          <Route path = "/adventure/search" element = {<AdventureSearch />} />
          <Route path = "/sight-seeing/register" element = {<SSForm />} />
          <Route path = "/sight-seeing/search" element = {<SSSearch />} />
          <Route path = "/mooc/register" element = {<MoocForm />} />
          <Route path = "/mooc/search" element = {<MoocSearch />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App