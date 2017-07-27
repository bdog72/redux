import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

import { Col, ListGroup, ListGroupItem } from 'react-bootstrap'

class BookList2 extends Component {
  renderList () {
    return this.props.books.map((book) => {
      return (
        <ListGroupItem
          onClick={() => this.props.selectBook(book)}
          className='leftSideList'
          key={book.title}>
          {book.title}
        </ListGroupItem>
      )
    })
  }
  render () {
    return (
      <Col sm={4}>
        <ListGroup>
          {this.renderList()}
        </ListGroup>
      </Col>
    )
  }
}
function mapStateToProps (state) {
  return {
    books: state.books
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList2)
