import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

class SingleComment extends Component {
  render() {
    return (
      <>
        <ListGroup.Item key={this.props.commento._id}>
          <span>{this.props.commento.author}</span>
          <Badge bg="warning" text="dark">
            {this.props.commento.rate}
          </Badge>
          <span> {this.props.commento.comment}</span>
        </ListGroup.Item>
      </>
    );
  }
}
export default SingleComment;
