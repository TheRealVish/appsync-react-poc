import React, { Component } from 'react';
import './App.css';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const ListMedia = gql`
query mediaQuery{
    media {
      total
  }
}
`

class App extends Component {
  render() {
    return (
      <div>
          <p>
           Reactjs appsync poc -- {this.props.listmedia}
          </p>
      </div>
    );
  }
}

export default graphql(ListMedia, {
    options: {
      fetchPolicy: 'cache-and-network'
    },
    props: props => ({
      listmedia: props.data.media.total
    })
  })(App);
