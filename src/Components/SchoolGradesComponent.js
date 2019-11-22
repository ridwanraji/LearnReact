import React from 'react'

class SchoolGrades extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.course} : {this.props.grade}</p>
            </div>
        )
    }
}

export default SchoolGrades