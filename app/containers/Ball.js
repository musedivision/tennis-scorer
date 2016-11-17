var React = require('react')
var ReactDOM = require('react-dom')
var { Motion, StaggeredMotion ,spring} = require('react-motion')

class Ball extends React.Component {
  constructor(){
    super()
    this.state = {
      open: false
    }
  }

  rotate(){
    this.setState({open: !this.state.open})
  }

  handleTouchStart(e){
    e.preventDefault()
    this.rotate()
  }

  render() {

    // styling
    const mixins = {
      ballRadius: 300,
    }
    const ballStyle = {
      height: mixins.ballRadius,
      width: mixins.ballRadius,
      borderRadius: '50%',
      backgroundColor: 'yellow',
      boxShadow: '4px 4px',
    }

    return (
      <Motion style={{x: spring(this.state.open ? 360 : 0), y:spring(this.state.open ? 10 : 0)}}>
        {value =>
          <div onClick={this.handleTouchStart.bind(this)} className="ball-outer" style={{
              WebkitTransform: `rotate(${value.x}deg)`,
              transform: `rotate(${value.x}deg)`,
              boxShadow: `${value.y}px, 4px`,
            }}>
            <div style={ballStyle}>
            </div>
          </div>}
      </Motion>
    );
  }
}



module.exports = Ball
