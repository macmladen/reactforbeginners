import React from 'react'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  storeName = React.createRef()

  goToStore = (event) => {
    event.preventDefault()
    const storeID = this.storeName.current.defaultValue
    this.props.history.push(`/store/${storeID}`)
  }

  render() {
    return (
        <>
          {/*This is a store picker*/}
          <form action="" className="store-selector" onSubmit={this.goToStore}>
            <h2>Please input store name</h2>
            <input
                type="text"
                ref={this.storeName}
                required
                placeholder="Store Name"
                defaultValue={getFunName()}
            />
            <button type="submit">Visit store now -></button>
          </form>
        </>
    )
  }
}

export default StorePicker
