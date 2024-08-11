import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count : 0,
            count2: 1
        }
    
    }


    render(){
        const {name,location} = this.props;
        const {count} = this.state;
        return (
            <div className="user-card">
                <h1>Count = {count}</h1>
                <button onClick={()=>{
                      console.log(this.state.count)
                    this.setState = ({
                        count: this.state.count + 1
                    });
                    console.log(this.state.count)
                }}>Increase Count</button>
               
                <h3>Name:{name}</h3>
                <h4>Location:{location}</h4>
                <h5>Conatct Info:</h5>
            </div>
        )
    }
}

export default UserClass;