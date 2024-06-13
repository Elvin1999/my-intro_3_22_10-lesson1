import { Button, Container, Row, Col } from "reactstrap";
import "./App.css";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import Func from "./Func";

let titleCategory = "Category List Component";
let product = { title: "Product List", count: 10 };
function App() {
  return (
    // <section className="App">
    //   <h1>Hello our React Technology</h1>
    //   <h2>Hello second one</h2>
    // </section>




    // <section
    //   style={{
    //     backgroundColor: "deepskyblue",
    //     padding: "10px",
    //   }}
    // >
    //   <Navi></Navi>
    //   <h3>Hello React by me</h3>

    //   <ProductList product={product}></ProductList>

    //   <CategoryList title={titleCategory} info="My special info" />
    // </section>




    // <section>
    //   <Button color="primary">Click Me</Button>
    // </section>



    <section>
      <Container>
        <Row>
          <Navi></Navi>
          <Func myinfo={1200}></Func>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList title={titleCategory} info="My special info" />
          </Col>
          <Col xs="9">
            <ProductList product={product}></ProductList>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default App;
