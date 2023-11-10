import React from "react"
// why we write super prps
class UserClass extends React.Component {
    render() {
        return (
            <div className="user-card">
                <h2>Name:Mayank Joshi</h2>
                <h3>Location:Rampur</h3>
                <h3>contact: 6396877650</h3>
            </div>
        )
    }
}
export default UserClass;