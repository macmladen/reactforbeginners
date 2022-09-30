import React from "react"
import PropTypes from "prop-types"

class FishFormEdit extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      status: PropTypes.string,
    }),
    index: PropTypes.string,
    deleteFish: PropTypes.func,
    updateFish: PropTypes.func,
  }

  handleChange = (event) => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    }
    this.props.updateFish(this.props.index, updatedFish)
  }
  render() {
    return (
        <div className="fish-edit">
          <input name="name" onChange={this.handleChange} value={this.props.fish.name} type="text" />
          <input name="price" onChange={this.handleChange} value={this.props.fish.price} type="text" />
          <select name="status" onChange={this.handleChange} value={this.props.fish.status}>
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
          </select>
          <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
          <input name="image" onChange={this.handleChange} value={this.props.fish.image} type="text" />
          <button onClick={() => this.props.deleteFish(this.props.index)}>Remove the fish</button>
        </div>
    )
  }
}

export default FishFormEdit
