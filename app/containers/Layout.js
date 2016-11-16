var React = require('react')
var ReactDOM = require('react-dom')
var Ball = require('./Ball')

class Layout extends React.Component {
  render() {

    const grid = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      transition: "1s ease all"
    }

    return (
      <div>
        <div className="container" style={grid}>
          <h1>tennis-scorer</h1>
          <Ball />
        </div>
      </div>
    );
  }
}

module.exports = Layout
