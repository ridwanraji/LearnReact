import React from "react";
// import CheckboxComponent from './Components/CheckboxComp'
import NavComponent from "./Components/NavComponent";
import MyInfo from "./Components/MyInfo";
import SchoolGrades from "./Components/SchoolGradesComponent";
import ProductsData from "./Data/SchoolProduct";
import ProductComponent from "./Components/ProductComponent";

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      products: ProductsData
    }
  }

  render() {
    // A function that renders a product component for each product data in the array of products using HOF map()
    const renderProduct = this.state.products.map(function(product) {
      return (
        <ProductComponent
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      );
    });

    return (
      <div>
        <NavComponent />

        <MyInfo />

        <h5> Grades </h5>
        <SchoolGrades course="CMPT355" grade="88" />

        <SchoolGrades course="CMPT380" grade="85" />

        <h1> PRODUCT TABLE </h1>
        {renderProduct}
      </div>
    );
  }
}

export default App;
