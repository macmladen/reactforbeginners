import React from 'react'
import {formatPrice} from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group"

class Order extends React.Component {
  renderOrder = (key) => {
    const fish = this.props.fishes[key]
    const count = this.props.order[key]

    if (!fish) return null

    const isAvailable = fish.status === "available"
    const transitionOptions = {
      classNames: "order",
      key,
      timeout: { enter: 500, exit: 500 }
    };

    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            Sorry, { fish ? fish.name : "fish" } is no longer available
          </li>
        </CSSTransition>
      )
    }

    return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            <span className="count">
              <TransitionGroup component={null} className="count">
              <CSSTransition
                  classNames="count"
                  key={count}
                  timeout={{enter: 500, exit: 500}}
              >
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
              x {fish.name}
            </span>
            <span>{formatPrice(count * fish.price)}</span>
            <button onClick={() => this.props.removeFromOrder(key)}>
              &times;
            </button>
          </li>
        </CSSTransition>
    )
  }
  render() {
    const orderIds = Object.keys(this.props.order)
    const total = orderIds.reduce( (prevTotal, key) => {
      const fish = this.props.fishes[key]
      const count = this.props.order[key]
      const isAvailable = fish && fish.status === "available"
      if (isAvailable) {
        return prevTotal + ( count * fish.price )
      }
      return prevTotal
    }, 0)
    return (
        <div className="order">
          <h2>Order</h2>
          <TransitionGroup component="ul" className="order">
            {orderIds.map(this.renderOrder)}
          </TransitionGroup>
          <div className="total">
            Total:
            <strong>{formatPrice(total)}</strong>
          </div>
        </div>
    )
  }
}

export default Order
