import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { useNavigate } from 'react-router-dom';
import BadgeIcon from '@mui/icons-material/Badge';
export default function TempDrawer() {

  const navigate = useNavigate();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* course */}
      <List>
        {['My Course'].map((course) => (
          <ListItem key={course} disablePadding>
            <ListItemButton onClick={() => navigate('/MyCourse')}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={course} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* live session */}
      <List>
        {['Live Session'].map((course) => (
          <ListItem key={course} disablePadding>
            <ListItemButton onClick={() => navigate('/Liveclass')}>
              <ListItemIcon>
                <CastForEducationIcon/>
              </ListItemIcon>
              <ListItemText primary={course} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* Assessment */}
      <List>
        {['Assessment'].map((course) => (
          <ListItem key={course} disablePadding>
            <ListItemButton onClick={() => navigate('/MyCourse')}>
              <ListItemIcon>
                <AssessmentIcon/>
              </ListItemIcon>
              <ListItemText primary={course} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* certifications */}
      <List>
        {['Certification'].map((course) => (
          <ListItem key={course} disablePadding>
            <ListItemButton onClick={() => navigate('/certi')}>
              <ListItemIcon>
                <BadgeIcon/>
              </ListItemIcon>
              <ListItemText primary={course} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
          {/* home */}
        {['Home'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigate('/Home')}>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
      {/* About */}
        {['About Us'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon onClick={() => navigate('/abo')}>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <InfoIcon/>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button ></Button> */}
          <IconButton
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon/>
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
