import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  }
  addFish = (fish) => {
    console.log (`Adding the fish${Date.now()}`)
    const fishes = { ...this.state.fishes }
    fishes[`fish${Date.now()}`] = fish
    this.setState({
      fishes: fishes
    })
  }
  render() {
    return (
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagLine={"i bolja nego domaca"} />
          </div>
          <Order />
          <Inventory addFish={this.addFish} />
        </div>
    )
  }
}

export default App