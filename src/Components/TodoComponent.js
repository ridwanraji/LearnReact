import React from 'react'

class TodoComponent extends React.Component {
    render(){
        return(
            <div>
                <input type="checkbox" checked={this.props.items.completed} />
                <p> {this.props.items.text} </p>
            </div>
        )
    }
}

export default TodoComponent