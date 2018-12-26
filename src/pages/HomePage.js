import React, { Component } from 'react';

import { getAction, connect } from '../services/reduxBreeze';

import Layout from '../components/Layout/Layout';

class HomePage extends Component {
  static propTypes = {};

  render() {
    return (
      <Layout
        sider={<div>Sidebar</div>}
        breadcrumbs={['Home']}
      >
        Lorem ipsum home page
      </Layout>
    );
  }
}

export default connect(
  {
    defaultFoo: 'example.foo',
    defaultBar: 'example.bar',
  },
  {
    defaultExample: getAction('defaultExample'),
  }
)(HomePage);
