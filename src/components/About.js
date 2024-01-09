import React from 'react'
import User from './User'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext';

class About extends React.Component {
    constructor(props) {
        super(props);


        // console.log("Parent Constructor")
    }
    componentDidMount() {
        // console.log("Parent component did mount")
    }
    render() {
        // console.log("Parent Render")

        return (
            <div >
                <h1>About React Component</h1>
                <div>
                    LoggedIn userName
                    <UserContext.Consumer>
                        {({ loggedInUser }) => <h1 className="font-bold"> {loggedInUser}</h1>}

                    </UserContext.Consumer>
                </div>
                <h1>hello i am about</h1>
                {/* <User name={"Mayank Joshi"} /> */}
                <UserClass name={"Mayank Joshi"} />
                {/* <UserClass name={"Narendra Modi  "} /> */}

            </div>
        )
    }
}

export default About
