import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render () {
        return (
            <div>Book Detail!</div>
        );
    }
}

function mapStateToProps (state) {
    // whatever gets returned from here will show up as props in BookDetail
    return {
        book: state.activeBook
    };
}

// Promote BookDetail from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps)(BookDetail);