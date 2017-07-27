import React, { Component } from 'react'
// import BookList from '../containers/book-list'
import BookList2 from '../containers/book-list2'
import BookDetail from '../containers/book-detail'
class App extends Component {
  render () {
    return <div>
      <BookList2 />
      <BookDetail />
    </div>
  }
}

export default App
