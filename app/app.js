var React = require('react')
var ReactDOM = require('react-dom')
var Layout = require('./containers/Layout')

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
