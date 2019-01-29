import React, { Component } from 'react'
import '../../../resources/styles.css';
import SideDrawer from '../../SideDrawer/SideDrawer';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


export default class Header extends Component {
  state = {
    isDrawerOpen: false,
    isShowingHeader: false,
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { isShowingHeader } = this.state;

    if (window.scrollY > 0 && !isShowingHeader) {
      this.setState({ isShowingHeader: true });
    } else if (window.scrollY === 0 && isShowingHeader) {
      this.setState({ isShowingHeader: false });
    }
  }


  setDrawer = value => {
    this.setState({ isDrawerOpen: value });
  }

  render() {
    const { isDrawerOpen, isShowingHeader } = this.state;

    return (
      <AppBar
        position='fixed'
        style={{
          backgroundColor: isShowingHeader ? '#2f2f2f' : 'transparent',
          padding: '10px 0',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <div className='header_logo'>
            <div className='font_righteous header_logo_venue'>The Venue</div>
            <div className='header_logo_title'>Musical events</div>
          </div>

          <IconButton
            aria-label='Menu'
            color='inherit'
            onClick={() => this.setDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        <SideDrawer
          anchor='right'
          open={isDrawerOpen}
          onClose={this.setDrawer}
        />
      </AppBar>
    );
  }
}