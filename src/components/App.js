import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'

class App extends React.Component {
  render() {
    return (
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagLine={"i bolja nego domaca"} age={3356} mine={true}/>
          </div>
          <Order />
          <Inventory />
        </div>
    )
  }
}

export default App