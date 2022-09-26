import React from 'react'

class Header extends React.Component {
  render() {
    return (
        <>
        <header className="top">
          <h1>Klopa
            <span className="ofThe">
              <span className="of">kao</span>
              <span className="the">kod</span>
            </span>
            kuce
          </h1>
          <h3 className="tagline">
            <span>{this.props.tagLine}</span>
          </h3>
        </header>
        </>
    )
  }
}

export default Header