import React, { Component } from 'react';

class LifecycleHooksClass extends Component {
    state = { name: 'jais', someval: '' }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps);
        //you can see the props that is coming from the parent here.

        return null;
    }
    theTimeoutVar;
    componentDidMount() {
        console.log('comp did mount')
        //here we can do the necessery things that we want.. like calling a backend api, subscribing etc..
        this.theTimeoutVar = setInterval(() => {
            alert('This alert will come once for every 7 seconds')
        }, 7000)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.name == 'jai') {
            return false;
            //if the name is jai, then do not update the component
        } else {
            return true;
            //if the name is not jai, then we can update the component
        }

    }



    componentWillUnmount() {
        console.log('...')
        try {
            clearInterval(this.theTimeoutVar);
            //remove this and the alerts will not stop even if you destroy the component. If you recreate the component again.. the alerts will double everytime.

        } catch{

        }
    }

    changeVal() {
        this.setState({ name: 'jai' })
    }

    render() {




        return (
            <div>

                <span>{this.state.name}</span>
                <button onClick={() => { this.changeVal() }} >click to change</button>
            </div>

        );
    }
}

export default LifecycleHooksClass;