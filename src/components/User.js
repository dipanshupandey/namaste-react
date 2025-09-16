import React from "react";

class User extends React.Component {


    constructor(props){
        super(props);
        // console.log(this.props.name,"child constructor");
        this.state={
            count:0,
        }
    }

    componentDidMount(){
        // console.log(this.props.name,"child mounted");
    }
    componentWillUnmount()
    {
        // console.log("unmouted");
    }

    componentDidUpdate()
    {
        // console.log("update");
    }

    render(){
        // console.log(this.props.name,"child render");
        return (
            <>
            {/* <div>id-{this.state.count}</div> */}
            <img src="data:image/jpeg;base64,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"
             alt="" srcSet="" className="user-img"/>
            <div className="user-name">{this.props.name}</div>
            <div className="user-loc">{this.props.location}</div>
            <div className="user-company">{this.props.company}</div>
            {/* <button onClick={()=>{
                this.setState({
                    // coount:this.state.count+1
                    count:this.state.count+1
                })
                // console.log(this.state.coount);
            }}
            >click</button> */}
            </>
        )
    }
}

export default User;