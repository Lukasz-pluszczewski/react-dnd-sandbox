import React, { Component, Suspense, lazy } from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { Layout, Menu, Icon, Button } from 'antd';

import './App.scss';

const { Header } = Layout;

// lazy loaded routes
const HomePage = lazy(() => import(
  /* webpackChunkName: "HomePage" */
  '../../pages/HomePage'
));
const HooksPage = lazy(() => import(
  /* webpackChunkName: "HooksPage" */
  '../../pages/HooksPage'
));

class App extends Component {
  render() {
    let activePage;

    switch(window.location.pathname) {
      case '/example':
        activePage = 'example';
        break;
      default:
        activePage = 'home';
    }

    return (
      <Router>
        <Layout>
          <Header className="header">
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[activePage]}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="home">
                <Link to="/"><Icon type="home" />Home</Link>
              </Menu.Item>
              <Menu.Item key="hooks">
                <Link to="/hooks"><Icon type="align-left" />Hooks</Link>
              </Menu.Item>
            </Menu>
            <Button
              className="App__logout"
              type="primary"
              shape="circle"
              icon="logout"
              onClick={this.removePassword}
            />
          </Header>
          <Suspense fallback={<Loading withLayout/>}>
            <Switch>
              <Route
                exact
                path="/"
                component={HomePage}
              />
              <Route
                exact
                path="/hooks"
                component={HooksPage}
              />
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    );
  }
}

export default App;
