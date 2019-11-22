/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/

import React from 'react'

class ProductComponent extends React.Component{
    render(){
        let styles = {
            color: "#8b6e53",
            paddingLeft: "50px",
            paddingBottom: "10px"
        }
        return(
            <div style={styles}>
                <h3> Name: {this.props.name}</h3>
                <p>Description: {this.props.description}</p>
                <h4>Price: ${this.props.price}</h4>
            </div>
        )
    }
}

export default ProductComponent