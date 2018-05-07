import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';

import Button from './Button';
import ButtonClose from './ButtonClose';

const UnitWrapper = styled.div`
  margin: 16px;
  width: calc(25% - 32px);

  header {
    position: relative;
    padding: 8px;
    background-color: ${({army}) => army === 'Empire' ? 'red' : 'blue'}
  }

  i {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 2px 4px 2px 0;
    text-align: right;
    border-color: white;
    width: 2em;
    height: 2em;
    z-index: 1;

    button {
      margin-top: -2px;
    }

    &:after {
      position: absolute;
      content: "";
      right: 0;
      top: 0;
      z-index: -1;
      width: 0;
      height: 0;
      background-color: transparent !important;
      border-top: 0 solid transparent;
      border-right: 2em solid transparent;
      border-bottom: 2em solid transparent;
      border-left: 0 solid transparent;
      border-right-color: #dedede;
    }
  }

  section {
    border: 1px solid #333;
    border-top: 0;
    margin-top: 0;
    padding: 16px 16px 0;
  }

  li {
    text-align: left;
    border: 1px solid #333;
    list-style: none;
    border-bottom: 0;
    padding: 2px 4px;

    &:last-child {
      border-bottom: 1px solid #333;
    }
  }
`;

class Unit extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false,
      showPointBreakdown: false,
      currentUpgrades: [],
      totalUpgradeCost: 0
    }

    this.toggleDetails = this.toggleDetails.bind(this);
    this.togglePointBreakdown = this.togglePointBreakdown.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  toggleDetails() {
    const { showDetails } = this.state;
    this.setState({ showDetails: !showDetails });
  }

  togglePointBreakdown() {
    const { showPointBreakdown } = this.state;
    this.setState({ showPointBreakdown: !showPointBreakdown });
  }

  renderUpgrade() {

  }

  handleOnChange(event) {
    const { addUpgrade } = this.props;
    const { currentUpgrades, totalUpgradeCost } = this.state;
    const upgradeDetails = {
      name: event.target.value.split(':')[0],
      cost: parseInt(event.target.value.split(':')[1], 10)
    }

    addUpgrade(event);
    console.log('boo', upgradeDetails);
    this.setState({
      currentUpgrades: [upgradeDetails, ...currentUpgrades],
      totalUpgradeCost: totalUpgradeCost + upgradeDetails.cost
    })
  }

  render() {
    const { addUpgrade, name, pointValue, rank, army, health, armor, specialAbilities, weapons, unarmed, removeUnit, unitIndex, unitType, upgrades } = this.props;
    const { showDetails, showPointBreakdown, currentUpgrades, totalUpgradeCost } = this.state;

    return (
      <UnitWrapper army={army}>
        <header>
          <i><ButtonClose aria-label="remove unit" data-totalupgradecost={totalUpgradeCost} data-unit={unitIndex} data-unittype={unitType} onClick={removeUnit}>x</ButtonClose></i>
          <h2>{name}</h2>
          <p><b>{army}</b></p>
          <p><b>{rank}</b></p>
          <p><b>{pointValue + totalUpgradeCost}</b></p>
          <p><button style={{textDecoration: "underline"}} onClick={this.togglePointBreakdown}>see point breakdown</button></p>
          { showPointBreakdown && (
            <Fragment>
              <p><small><b>base points:</b> {pointValue}</small></p>
              <p><small><b>upgrades points:</b> {totalUpgradeCost}</small></p>
            </Fragment>
          )}
          <Button onClick={this.toggleDetails}>{showDetails ? 'hide details' : 'show details'}</Button>
        </header>
        { showDetails && (
          <section>
            <h3>unit details:</h3>
            <ul>
              <li><b>health</b>: {health}</li>
              <li><b>armor</b>: {armor}</li>
              <li><b>special abilities</b>: {specialAbilities}</li>
              {/* <li><b>{weapons}</li> */}
              <li><b>unarmed</b>: {unarmed}</li>
            </ul>
            {upgrades && (
              <div>
                <h3>upgrades:</h3>
                <select onChange={this.handleOnChange}>
                  <option value>choose an upgrade</option>
                  {
                    upgrades.map(upgrade => 
                    (<option value={`${upgrade.name}:${upgrade.pointValue}`}>{upgrade.name} : {upgrade.pointValue}</option>))
                  }
                </select>
                { currentUpgrades && (
                  <ul>
                    { currentUpgrades.map(currentUpgrade => (
                      <li>{currentUpgrade.name} : {currentUpgrade.cost}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </section>
        )}
      </UnitWrapper>
    );
  }
} 



export default Unit
