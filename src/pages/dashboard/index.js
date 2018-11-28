import React, { Component } from 'react';
import { connect } from "react-redux";
import { Grid, Image } from 'semantic-ui-react';
import CompanyCard from '../../components/companyCard';
import RecentActivity from '../../components/recentActivity';


class Dashboard extends Component {
    render() {
        return (
            <Grid columns={3} divided padded>
                <Grid.Row>
                <Grid.Column>
                    <CompanyCard />
                </Grid.Column>
                <Grid.Column>
                    <RecentActivity />
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({});
  
  const mapDispatchToProps = {};
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard);
