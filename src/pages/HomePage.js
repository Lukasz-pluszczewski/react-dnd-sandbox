import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import List from '../components/List/List';
import Layout from '../components/Layout/Layout';

class HomePage extends Component {
  static propTypes = {};

  render() {
    return (
      <Layout>
        <DragDropContextProvider backend={HTML5Backend}>
          <List
            initialItems={[
              { id: 'one', order: 1, name: 'Jeden'},
              { id: 'two', order: 2, name: 'Dwa'},
              { id: 'three', order: 3, name: 'Trzy'},
              { id: 'four', order: 4, name: 'Cztery'},
            ]}
          />
        </DragDropContextProvider>
      </Layout>
    );
  }
}

export default HomePage;
