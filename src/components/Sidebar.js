import React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AccountCircle from '@material-ui/icons/AccountCircle';
import Block from '@material-ui/icons/Block';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Home from '@material-ui/icons/Home';
import Info from '@material-ui/icons/Info';
import Notifications from '@material-ui/icons/Notifications';
import Timeline from '@material-ui/icons/Timeline';

function Sidebar() {

  const drawer = (
    <Container>
      <Divider/>
      <List>
        <ListItem button key='Element 1'>
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary='Element 1' />
        </ListItem>
        <ListItem button key='Element 2'>
          <ListItemIcon><AccountCircle /></ListItemIcon>
          <ListItemText primary='Element 2' />
        </ListItem>
        <ListItem button key='Element 3'>
          <ListItemIcon><CalendarToday /></ListItemIcon>
          <ListItemText primary='Element 3' />
        </ListItem><ListItem button key='Element 4'>
          <ListItemIcon><Timeline /></ListItemIcon>
          <ListItemText primary='Element 4' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key='Element 1'>
          <ListItemIcon><Notifications /></ListItemIcon>
          <ListItemText primary='Element 1' />
        </ListItem>
        <ListItem button key='Element 3'>
          <ListItemIcon><Info /></ListItemIcon>
          <ListItemText primary='Element 3' />
        </ListItem>
        <ListItem button key='Element 2'>
          <ListItemIcon><Block /></ListItemIcon>
          <ListItemText primary='Element 2' />
        </ListItem>
      </List>
    </Container>
  );

  return (
    <Container> { drawer } </Container>
  );
}

export default Sidebar;
