import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {

    state = { lat: null, err: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ err: err.message })
        );
    }

    //render() is compulsory
    render() {
        if (this.state.err && !this.state.lat) {
            return <div>error:{this.state.err} </div>;
            
            }
        if (!this.state.err && this.state.lat) {
            return (
                <SeasonDisplay lat={this.state.lat} />
            );
        }
        return <div>Loading...</div>
    }
}
ReactDOM.render(<App />, document.querySelector('#root'))