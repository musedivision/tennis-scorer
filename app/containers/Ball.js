var React = require('react')
var ReactDOM = require('react-dom')

class Ball extends React.Component {


  render() {

    // styling
    const mixins = {
      ballRadius: 300
    }
    const ballStyle = {
      height: mixins.ballRadius,
      width: mixins.ballRadius,
      borderRadius: '50%',
      backgroundColor: 'yellow',
      boxShadow: '4px 4px',
      ":hover": {
        backgroundColor: "red"
      }
    }

    return (
      <div>
        <div className="ball-outer" style={ballStyle}>
          <div>

          </div>
        </div>
      </div>
    );
  }
}



module.exports = Ball
