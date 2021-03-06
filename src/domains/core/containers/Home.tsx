import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import { PageContainer } from 'domains/core/containers';
import { Slogan } from 'domains/common/components';
import { connect } from 'react-redux';
import { RootState } from 'app/store';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


interface StateProps {
  searchClick?: Object;
}

type Props = RouteComponentProps & StateProps;
const Home = (props: Props) => {

  const { searchClick } = props;
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Fragment>
      <PageContainer background={!smallScreen ? "home" : searchClick ? "home-black" : "home"}>
        <Grid container justify="center">
          <Grid item xs={smallScreen ? 12 : 8}>
          </Grid>
          <Grid item container xs={12} direction="row" style={{ marginTop: '38vh' }}>
            <Grid item xs={12} style={{ alignSelf: 'flex-end' }}>
              <Slogan />
            </Grid>
          </Grid>
        </Grid>
      </PageContainer>
      {/* <HomeSub2 />
      <HomeSub3 />
      <HomeSub1 /> */}
    </Fragment>
  )
}

const container = connect<{}, {}, {}, RootState>(
  (state: RootState) => ({
  })
)(Home);

export default container;
