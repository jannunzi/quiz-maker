import React from 'react';

const MyContext = React.createContext();

class ClassB extends React.Component {
    render() {
        return(
            <div>
                <div>{this.props.valueB}</div>
                <MyContext.Consumer>
                    {(context) => {
                        return(
                            
                            <div>
                                {context.state.valueB}
                                <button onClick={context.setValue}>
                                    C
                                </button>
                            </div>
                        )
                    }}
                </MyContext.Consumer>
            </div>
        );
    }
}

class ClassA extends React.Component {
    render() {
        return(
            <ClassB valueB={this.props.valueA}/>
        );
    }
}

class MyProvider extends React.Component {
    state = {
        valueB: 'B'
    }
    render() {
        return(
            <MyContext.Provider value={{
                state: this.state,
                setValue: (oldValue) => {
                    this.setState({
                        valueB: 'C'
                    })
                }
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default class ContextAnswer extends React.Component {
    render() {
        return(
            <MyProvider>
                <ClassA valueA={'A'}/>
            </MyProvider>
        );
    }
}

