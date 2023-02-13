import { Component } from "react";
import CommentList from "./commentList";
import ListGroup from "react-bootstrap/ListGroup";

import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comment: [],
    openmodal: false,
  };

  fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.elementID}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0ZWQ2YmEyNDc4ZDAwMTNhMDU3ZjYiLCJpYXQiOjE2NzU5NDczNzEsImV4cCI6MTY3NzE1Njk3MX0.ORNzFa4dL5pfhbd6IduZ6yMpi_k3DbESNK5SUyDHW68",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        this.setState({
          comment: data,
        });
      }
    } catch (error) {
      console.log("c'e un errore grave");
    }
  };

  componentDidMount() {
    this.fetchComments();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.elementID !== this.props.elementID) {
      this.fetchComments();
    }
  }

  render() {
    return (
      <>
        <button
          className="catBtn"
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
