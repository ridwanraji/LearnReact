import React from 'react'

class TodoComponent extends React.Component {
    render(){
        return(
            <div>
                <input type="checkbox" checked={this.props.items.completed} onChange ={() => console.log("i was Changed")} />
                <p> {this.props.items.text} </p>
            </div>
        )
    }
}

export default TodoComponent