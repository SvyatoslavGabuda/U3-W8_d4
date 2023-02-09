import { Component } from "react";
import { Col, Button, Card } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selezionato: false,
    borderColor: "lightblue",
    addedToCart: null,
    buyed: null,
  };
  selected = () => {
    // if (this.state.borderColor === "lightblue") {
    //   this.setState({ borderColor: "red" });
    // } else {
    //   this.setState({ borderColor: "lightblue" });
    // }
    this.setState({
      selezionato: !this.state.selezionato,
    });
  };
  buy = () => {
    this.setState({ buyed: true });
  };
  addToCart = () => {
    this.setState({ addedToCart: true });
  };

  renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <Button onClick={this.buy}>buy now</Button>
    </Tooltip>
  );

  render() {
    return (
      <>
        <Col className="my-2" id={this.props.book.asin}>
          <Card
            className="myCard"
            style={{ borderColor: this.state.selezionato ? "red" : "lightblue" }}
          >
            <Card.Img onClick={this.selected} className="myCardImg" src={this.props.book.img} />
            <Card.Body className="myCardBody">
              <Card.Title>{this.props.book.title}</Card.Title>
              <Card.Text>
                $ - {this.props.book.price}{" "}
                {this.state.addedToCart && <span> Aggiunto al carello </span>} -
                {this.state.buyed && <span> Comprato! </span>}
              </Card.Text>

              <OverlayTrigger
                placement="right"
                delay={{ show: 150, hide: 800 }}
                overlay={this.renderTooltip}
              >
                <Button onClick={this.addToCart} className="bookBtn">
                  Add To Cart <i className="bi bi-cart4"></i>
                </Button>
              </OverlayTrigger>
              {this.state.selezionato && <CommentArea elementID={this.props.book.asin} />}
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}
export default SingleBook;
