import { Component } from "react";
import CommentList from "./commentList";
import ListGroup from "react-bootstrap/ListGroup";

import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    idComment: this.props.elementID,
    comment: [],
    openmodal: false,
  };

  fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.state.idComment}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0ZWQ2YmEyNDc4ZDAwMTNhMDU3ZjYiLCJpYXQiOjE2NzU5NDczNzEsImV4cCI6MTY3NzE1Njk3MX0.ORNzFa4dL5pfhbd6IduZ6yMpi_k3DbESNK5SUyDHW68",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log(this.state.comment);
        this.setState({
          comment: data,
        });
      }
    } catch (error) {
      console.log("c'e un errore grave");
    }
  };
  componentDidMount() {
    console.log("DIDMOUNT");
    this.fetchComments();
    console.log("aaa", this.state.comment);
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({ openmodal: !this.state.openmodal });
          }}
        >
          Add Comment
        </button>

        {this.state.openmodal && <AddComment nuovoID={this.props.elementID} />}

        <ListGroup>
          <CommentList commentiM={this.state.comment} />
        </ListGroup>
      </>
    );
  }
}

export default CommentArea;
