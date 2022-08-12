console.log('App.js is running');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visible: false
        };
    }
    toggleVisibility(){
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visible && <p>Hey. These are some details you can now see!</p>}
            </div>
        );
    }
}

const appRoot = ReactDOM.createRoot(document.getElementById('app'));

appRoot.render(<App />)