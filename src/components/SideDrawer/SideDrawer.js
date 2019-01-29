import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const SideDrawer = props => {
  return (
    <Drawer
      anchor={props.anchor}
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component='nav'>
        <ListItem button>
          <ListItemText primary="Event starts in" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Venue Info" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Highlights" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Pricing" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Location" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default SideDrawer;
