import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import empire from './svg/empire.svg';
import rebels from './svg/rebels.svg';
import './App.css';
import { darthVader, stormTroopers, atst, speederBike, lukeSkywalker, atrt, rebelTroopers } from './data/unitData';
import Unit from './components/Unit';
import Grid from './components/Grid';
import Button from './components/Button';

const transformArmyName = name => name.replace(/\s+/g, '-');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      side: null,
      troopers: [],
      commanders: [],
      support: [],
      heavy: [],
      specialForces: [],
      totalPoints: 0,
      armyName: 'your army name'
    }

    this.loadStormtrooper = this.loadStormtrooper.bind(this);
    this.loadRebelTrooper = this.loadRebelTrooper.bind(this);
    this.loadDarthVader = this.loadDarthVader.bind(this);
    this.loadLukeSkywalker = this.loadLukeSkywalker.bind(this);
    this.loadSpeederbike = this.loadSpeederbike.bind(this);
    this.loadAtst = this.loadAtst.bind(this);
    this.loadAtrt = this.loadAtrt.bind(this);
    this.removeUnit = this.removeUnit.bind(this);
    this.setArmyName = this.setArmyName.bind(this);
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
    this.retrieveFromLocalStorage = this.retrieveFromLocalStorage.bind(this);
    this.chooseASide = this.chooseASide.bind(this);
    this.addUpgrade = this.addUpgrade.bind(this);
    this.reset = this.reset.bind(this);
  }

  setArmyName(event) {
    this.setState({
      armyName: event.target.value
    })
  }

  loadStormtrooper() {
    const { troopers, totalPoints } = this.state;

    this.setState({
      troopers: [stormTroopers, ...troopers],
      totalPoints: totalPoints + stormTroopers.pointValue
    })
  }

  loadRebelTrooper() {
    const { troopers, totalPoints } = this.state;

    this.setState({
      troopers: [rebelTroopers, ...troopers],
      totalPoints: totalPoints + rebelTroopers.pointValue
    })
  }

  loadDarthVader() {
    const { commanders, totalPoints } = this.state;

    this.setState({
      commanders: [darthVader, ...commanders],
      totalPoints: totalPoints + darthVader.pointValue
    })
  }

  loadLukeSkywalker() {
    const { commanders, totalPoints } = this.state;

    this.setState({
      commanders: [lukeSkywalker, ...commanders],
      totalPoints: totalPoints + lukeSkywalker.pointValue
    })
  }

  loadAtst() {
    const { heavy, totalPoints } = this.state;

    this.setState({
      heavy: [atst, ...heavy],
      totalPoints: totalPoints + atst.pointValue
    })
  }

  loadAtrt() {
    const { support, totalPoints } = this.state;

    this.setState({
      support: [atrt, ...support],
      totalPoints: totalPoints + atrt.pointValue
    })
  }

  loadSpeederbike() {
    const { support, totalPoints } = this.state;

    this.setState({
      support: [speederBike, ...support],
      totalPoints: totalPoints + speederBike.pointValue
    })
  }

  getUnitData(name) {
    const { troopers, commanders, support, heavy, specialForces } = this.state;
    let unitData;

    switch(name) {
      case 'troopers':
        return unitData = troopers;
      case 'commanders':
        return unitData = commanders;
      case 'support':
        return unitData = support;
      case 'heavy':
        return unitData = heavy;
      case 'specialforces':
        return unitData = specialForces;
    }

    return unitData;
  }

  removeUnit(event) {
    const { troopers, commanders, support, heavy, specialForces, totalPoints } = this.state;
    const unitIndex = parseInt(event.target.dataset.unit, 10);
    const unitName = event.target.dataset.unittype;
    const unitTotalUpgradeCost = event.target.dataset.totalupgradecost;
    const unitType = this.getUnitData(unitName);
    const unitPointValue = unitType[unitIndex].pointValue;
    const tempUnits = unitType;
    const remove = (items,index) => {
      return [...items.slice(0,index),
              ...items.slice(index+1, items.length)];
    };

    const newArray = remove(tempUnits, unitIndex);
    const unit = { unitType : newArray ? newArray : []}

    console.log('dafuq : ', unitTotalUpgradeCost);

    this.setState({
      troopers: unitName === 'troopers' ? (newArray ? newArray : []) : troopers,
      commanders: unitName === 'commanders' ? (newArray ? newArray : []) : commanders,
      heavy: unitName === 'heavy' ? (newArray ? newArray : []) : heavy,
      support: unitName === 'support' ? (newArray ? newArray : []) : support,
      specialForces: unitName === 'specialForces' ? (newArray ? newArray : []) : specialForces,
      totalPoints: totalPoints - unitPointValue - unitTotalUpgradeCost
    })
  }

  saveToLocalStorage() {
    const { troopers, armyName } = this.state;

    return localStorage.setItem(transformArmyName(armyName), JSON.stringify(troopers));
  }

  retrieveFromLocalStorage() {
    const { armyName } = this.state;

    this.setState({
      troopers: JSON.parse(localStorage.getItem(transformArmyName(armyName)))
    })
  }

  chooseASide(event) {
    this.setState({ side: event.currentTarget.dataset.side})
  }

  addUpgrade(event) {
    const { totalPoints } = this.state;

    this.setState({ totalPoints: totalPoints + parseInt(event.target.value.split(':')[1], 10)})
  }

  reset() {
    this.setState({
      side: null,
      troopers: [],
      commanders: [],
      support: [],
      heavy: [],
      specialForces: [],
      totalPoints: 0,
      armyName: 'your army name'
    })
  }

  render() {
    const { troopers, commanders, support, heavy, totalPoints, armyName, side } = this.state;
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Star Wars Legion - Army Builder</h1>
          {side === 'rebels' && <img src={rebels} className="App-logo" alt="logo" />}
          {side === 'empire' && <img src={empire} className="App-logo" alt="logo" />}
          {!side && 
            <div>
              <h2>Choose a side:</h2>
              <button data-side="empire" onClick={this.chooseASide}>
                <img src={empire} className="App-logo" alt="logo" />
              </button>
              {' '}
              <button data-side="rebels" onClick={this.chooseASide}>
                <img src={rebels} className="App-logo" alt="logo" />
              </button>
            </div>
          }
          <h2>{armyName}</h2>
          <p><Button onClick={this.retrieveFromLocalStorage}>load army</Button></p>

          <button style={{color: "white"}} onClick={this.reset}>reset</button>
        </header>
        <section className="App-intro">
          <div>
            <label>army name:</label> <input type="text" onChange={this.setArmyName} />
          </div>
          <p>total points: {totalPoints}</p>
          <Button onClick={this.saveToLocalStorage}>save</Button>
        </section>
        <hr />
        <h2>Commanders:</h2>
        { side === "empire" &&
          <Button onClick={this.loadDarthVader}>Darth Vader</Button>
        }
        { side === "rebels" &&
          <Button onClick={this.loadLukeSkywalker}>Luke Skywalker</Button>
        }
        <Grid>
          { commanders && commanders.map((unit, index) => <Unit addUpgrade={this.addUpgrade} removeUnit={this.removeUnit} unitType="commanders" unitIndex={index} {...unit} />) }
        </Grid>
        <hr />
        <h2>Troopers:</h2>
        { side === "empire" &&
          <Button onClick={this.loadStormtrooper}>Stormtrooper</Button>
        }
        { side === "rebels" &&
          <Button onClick={this.loadRebelTrooper}>Rebel Trooper</Button>
        }
        <Grid>
          { troopers && troopers.map((unit, index) => <Unit addUpgrade={this.addUpgrade} removeUnit={this.removeUnit} unitType="troopers" unitIndex={index} {...unit} />) }
        </Grid>
        <hr />
        <h2>Support:</h2>
        { side === "empire" &&
          <Button onClick={this.loadSpeederbike}>74-Z Speeder Bike</Button>
        }
        { side === "rebels" &&
          <Button onClick={this.loadAtrt}>AT-RT</Button>
        }
        <Grid>
          { support && support.map((unit, index) => <Unit addUpgrade={this.addUpgrade} removeUnit={this.removeUnit} unitType="support" unitIndex={index} {...unit} />) }
        </Grid>
        <hr />
        <h2>Heavy:</h2>
        { side === "empire" &&
          <Button onClick={this.loadAtst}>AT-ST</Button>
        }
        <Grid>
          { heavy && heavy.map((unit, index) => <Unit addUpgrade={this.addUpgrade} removeUnit={this.removeUnit} unitType="heavy" unitIndex={index} {...unit} />) }
        </Grid>
      </div>
    );
  }
}

export default App;
