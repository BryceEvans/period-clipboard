import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Periods from '../Periods/Periods';
import Students from '../Students/Students';
import { Grid, Segment, Menu, Icon } from 'semantic-ui-react';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    let currentRoute = props.location.pathname.slice(11, props.location.pathname.length) // Grab the name of the current route
    currentRoute = currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1) // Capitalize the first letter 

    this.state = { 
      active: currentRoute //set active menu item to current route
    }

    this.links = [
      { url: `/dashboard/periods`, name: 'Periods', icon: 'clipboard outline' },
      { url: `/dashboard/students`, name: 'Students', icon: 'address book' },
      { url: `/dashboard/reports`, name: 'Reports', icon: 'clipboard list' },
      { url: `/dashboard/settings`, name: 'Settings', icon: 'setting' },
    ]
  }

  handleClick = (event) => {
    this.setState({ active: event.target.innerHTML });
  }

  render() { 

const { active } = this.state;

    return ( 
      <Grid>
        <Grid.Column width='4'>
          <Menu fluid vertical tabular>
            {this.links.map((link, index) => (
              <Link key={index} to={ link.url } onClick={this.handleClick}>
              <Icon name={link.icon} size='big' style={{marginTop: "15px"}}/>
                <Menu.Item as='a'>
                  { link.name }
                </Menu.Item>
              </Link>
            ))}
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width='12'>
          <Segment>
            <Route exact path='/dashboard/periods' component={ Periods }/>
            <Route exact path='/dashboard/periods/classexample' component={ Students }/>
          </Segment>
        </Grid.Column>
      </Grid>    
    );
  }
}

export default Dashboard;