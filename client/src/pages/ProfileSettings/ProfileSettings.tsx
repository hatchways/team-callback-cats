import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs(): JSX.Element {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<Record<string, unknown>>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        className={classes.tabs}
      >
        <Tab label="Edit Profile" {...a11yProps(0)} />
        <Tab label="Profile Photo" {...a11yProps(1)} />
        <Tab label="Payment" {...a11yProps(2)} />
        <Tab label="Security" {...a11yProps(3)} />
        <Tab label="Settings" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Edit profile page
        {/* <Box display="d-flex" justifyContent="flex-start" m={10} p={20} bgcolor="teal" width={900} height={600}>
          <Grid item xs={4} alignItems="center">
            <Grid container direction="row" alignItems="center" item xs={4}>
              <Typography className={classes.typograhphy} component="h1" variant="h5">
                First Name:
              </Typography>
              <TextField id="first-name" label="John" variant="outlined" />
            </Grid>
            <Grid container direction="row" alignItems="center">
              <Typography className={classes.typograhphy} component="h1" variant="h5">
                Last Name:
              </Typography>
              <TextField id="last-name" label="Doe" variant="outlined" />
            </Grid>
            <Grid container direction="row" alignItems="center">
              <Typography className={classes.typograhphy} component="h1" variant="h5">
                Gender:
              </Typography>
              <TextField id="gender" label="Male" variant="outlined" />
            </Grid>
            <Grid container direction="row" alignItems="center">
              <Typography className={classes.typograhphy} component="h1" variant="h5">
                Birthday:
              </Typography>
              <TextField id="bday-month" label="June" variant="outlined" />
              <TextField id="bday-date" label="15" variant="outlined" />
              <TextField id="bday-year" label="1988" variant="outlined" />
            </Grid>
            <Grid container direction="row" alignItems="center">
              <Typography className={classes.typograhphy} component="h1" variant="h5">
                Phone Number:
              </Typography>
              <TextField id="phone" label="Phone Number" variant="outlined" />
            </Grid>
            <Grid container direction="row" alignItems="center">
              <Typography className={classes.typograhphy} component="h1" variant="h5">
                Location:
              </Typography>
              <TextField id="location" label="Address" variant="outlined" />
            </Grid>
            <Grid container direction="row" alignItems="center">
              <Typography className={classes.typograhphy} component="h1" variant="h5">
                About you:
              </Typography>
              <TextField id="description" label="About you" variant="outlined" />
            </Grid>
          </Grid>
        </Box> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Edit profile Photo page
      </TabPanel>
      <TabPanel value={value} index={2}>
        Payment page
      </TabPanel>
      <TabPanel value={value} index={3}>
        Security page
      </TabPanel>
      <TabPanel value={value} index={4}>
        Settings page
      </TabPanel>
    </div>
  );
}
