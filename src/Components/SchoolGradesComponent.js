import React from 'react'

function SchoolGrades (props) {
    return(
        <div>
            <p>{props.course} : {props.grade}</p>
        </div>
    )
}

export default SchoolGrades