import React from "react"
// why we write super prps
class UserClass extends React.Component {
    constructor(props) {
        super({ props });
        this.state = {
            userinfo: {
                name: "Dummy0",
                location: "Dummy",
            }
        };
        // console.log(props.name + "child constructor")
    }
    async componentDidMount() {
        // console.log(this.props.name + "child component did mount")
        const data = await fetch("https://api.github.com/users/Mayank1909");
        const json = await data.json();
        this.setState({
            userinfo: json,
        });
        // console.log(json);
    }

    render() {
        // console.log(this.props.name + "child render")
        const { count, count2 } = this.state;
        const { login, location, avatar_url } = this.state.userinfo;

        return (
            <div className="user-card">
                <h1>Count={count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}>Count increase</button>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count - 1,
                    });
                }}>Count decrease</button>
                <img src={avatar_url} alt="myimage" />
                <h2>Name:{login}</h2>
                <h3>Location:{location}</h3>
                <h3>contact: 6396877650</h3>
            </div>
        )
    }
}
export default UserClass;