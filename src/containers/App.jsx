import * as React from 'react';

import view1 from '../assets/view1.png'
import view2 from '../assets/view2.png'
import view3 from '../assets/view3.png'
import view4 from '../assets/view4.png'
import view5 from '../assets/view5.png'
import view6 from '../assets/view6.png'
import Legend from "../components/Legend/Legend";
import TabItem from "../components/Tabs/TabItem";
import TabList from "../components/Tabs/TabList";
import './App.scss';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <header>
          <h1>Finding inequality in the UK</h1>
        </header>
        <main>
          <div className="container">
            <h2>Gender Pay inequality by age group</h2>
          </div>
          <div className="container">
            <div className="tabs">
              <TabList>
                <TabItem id="0" label="18-21">
                  <div className="wrapper">
                    <img className="map" src={view1} alt="Gender inequality map for age group 18-21"/>
                  </div>
                </TabItem>
                <TabItem id="1" label="22-29">
                  <div className="wrapper">
                    <img className="map" src={view2} alt="Gender inequality map for age group 22-29"/>
                  </div>
                </TabItem>
                <TabItem id="2" label="30-39">
                  <div className="wrapper">
                    <img className="map" src={view3} alt="Gender inequality map for age group 30-39"/>
                  </div>
                </TabItem>
                <TabItem id="3" label="40-49">
                  <div className="wrapper">
                    <img className="map" src={view4} alt="Gender inequality map for age group 40-49"/>
                  </div>
                </TabItem>
                <TabItem id="4" label="50-59">
                  <div className="wrapper">
                    <img className="map" src={view5} alt="Gender inequality map for age group 50-59"/>
                  </div>
                </TabItem>
                <TabItem id="5" label="60+">
                  <div className="wrapper">
                    <img className="map" src={view6} alt="Gender inequality map for age group 60+"/>
                  </div>
                </TabItem>
              </TabList>
            </div>
          </div>
          <div className="container">
            <Legend/>
          </div>
        </main>
        <footer>
          <p>This app was developed for "Engine for equal exhibition" an internal company event organised by "Beyond her" to spread a vital message on gender equality.</p>
          <p>These maps include data from the Office for National Statistics (ONS) and Ordnance Survey (OS) </p>
          <p>Author: Alejandro Baeza | Github Repository: </p>
        </footer>
      </div>
    );
  }
}

export default App;
