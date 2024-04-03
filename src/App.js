import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BikeNavbar } from './component/BikeNavbar';
import { Home } from './component/home/Home';
import { BikeList } from './component/bikes/BikeList';
import { Review } from './component/reviews/Review';
import { AboutUs } from './component/aboutus/AboutUs';
import { useState } from 'react';
import { bikeData } from './data/bikeData';
import { HeroBikes } from './component/brands/HeroBikes';
import { HondaBikes } from './component/brands/HondaBikes';
import { BajajBikes } from './component/brands/BajajBikes';
import { KtmBikes } from './component/brands/KtmBikes';
import { TvsBikes } from './component/brands/TvsBikes';
import { RoyalEnfieldBikes } from './component/brands/RoyalEnfieldBikes';
import { YamahaBikes } from './component/brands/YamahaBikes';
import { SuzukiBikes } from './component/brands/SuzukiBikes';
import { PopularBrands } from './component/brands/PopularBrands';
import { ContactUsForm } from './component/contactus/ContactUsForm';

function App() {

  const [mode, setMode] = useState('light');

  const handleToggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1f1e4a';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BikeNavbar handleToggleMode={handleToggleMode} mode={mode} />}>
            <Route path='/' element={<Home homeMode={mode} />}></Route>
            <Route path='/bikeList' element={<BikeList bikeInfo={bikeData} bikeListMode={mode} />}></Route>
            <Route path='/popularBrands' element={<PopularBrands brandsMode={mode} />}>
              <Route path='' element={<HeroBikes bikeInfo={bikeData} bikeMode={mode} />}></Route>
              <Route path='hondaBikes' element={<HondaBikes bikeInfo={bikeData} bikeMode={mode} />}></Route>
              <Route path='bajajBikes' element={<BajajBikes bikeInfo={bikeData} bikeMode={mode} />}></Route>
              <Route path='ktmBikes' element={<KtmBikes bikeInfo={bikeData} bikeMode={mode} />}></Route>
              <Route path='tvsBikes' element={<TvsBikes bikeInfo={bikeData} bikeMode={mode} />}></Route>
              <Route path='royalEnfieldBikes' element={<RoyalEnfieldBikes bikeInfo={bikeData} bikeMode={mode} />}></Route>
              <Route path='yamahaBikes' element={<YamahaBikes bikeInfo={bikeData} bikeMode={mode} />}></Route>
              <Route path='suzukiBikes' element={<SuzukiBikes bikeInfo={bikeData} bikeMode={mode} />}></Route>
            </Route>
            <Route path='/reviews' element={<Review reviewsMode={mode} />}></Route>
            <Route path='/aboutUs' element={<AboutUs aboutMode={mode} />}></Route>
            <Route path='/contactUs' element={<ContactUsForm mode={mode} />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
