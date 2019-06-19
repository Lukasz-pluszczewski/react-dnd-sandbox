import React, { Component } from 'react';

import Hooks from '../components/Hooks/Hooks';
import Hooks2 from '../components/Hooks2/Hooks2';
import Hooks3 from '../components/Hooks3/Hooks3';
import Hooks4 from '../components/Hooks4/Hooks4';
import Hooks5 from '../components/Hooks5/Hooks5';
import Hooks6 from '../components/Hooks6/Hooks6';
import Layout from '../components/Layout/Layout';

class HooksPage extends Component {
  static propTypes = {};

  render() {
    return (
      <Layout>
        <Hooks/>
        <hr/>
        <Hooks2/>
        <hr/>
        <Hooks3/>
        <hr/>
        <Hooks4/>
        <hr/>
        <Hooks5/>
        <hr/>
        <Hooks6/>
      </Layout>
    );
  }
}

export default HooksPage;
