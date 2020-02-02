import React from 'react';
import { PUBLIC_URL } from '../../settings.js';
import { AppBar, IconButton, Drawer, Toolbar, List } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './PageNav.module.scss';
import Link from './PageLink';

class PageNav extends React.Component {
  state = {
    showDrawer: false, 
  }

  hideDrawer = () => {
    this.setState({showDrawer: false});
  }

  renderLinks() {
    return (
      <div className={styles.drawer}>
        <List component="nav" aria-label="main mailbox folders">
          <Link onClick={this.hideDrawer} exact to={`${PUBLIC_URL}/`} >Home</Link>
          <Link onClick={this.hideDrawer} to={`${PUBLIC_URL}/login`} activeClassName='active'>Login</Link>
          <Link onClick={this.hideDrawer} to={`${PUBLIC_URL}/tables`} activeClassName='active'>Tables</Link>
          <Link onClick={this.hideDrawer} to={`${PUBLIC_URL}/ordering`} activeClassName='active'>Ordering</Link>
          <Link onClick={this.hideDrawer} to={`${PUBLIC_URL}/ordering/new`} activeClassName='active'>New Order</Link>            
          <Link onClick={this.hideDrawer} to={`${PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Link>
        </List>
      </div>
    );
  }

  render() {
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={() => {this.setState({showDrawer: true});}} edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.showDrawer} onClose={this.hideDrawer}>
          {this.renderLinks()}
        </Drawer>
      </>
    );
  }
}

export default PageNav;