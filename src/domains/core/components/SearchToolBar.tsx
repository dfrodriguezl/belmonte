import _ from 'lodash';
import React, { useEffect, useState, Fragment } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Box, Divider, Grid, makeStyles, Theme } from '@material-ui/core';
import { getLocations } from 'domains/core/coreSlice';
import { Densities, Density, Location } from 'domains/core/models';
import { ButtonWrapper, LocationMenu, SearchPill, UrbanismMenu } from 'domains/core/components';
import { setInitialParams } from 'domains/shapeDiver/slice';
import { RootState } from 'app/store';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  searchBox: {
    marginTop: theme.spacing(2),
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '5px 30px',
    borderRadius: 32,
    boxShadow: '4px 4px 3px #00000029',
    border: '1px solid #707070'
  },
  fieldDivider: {
    backgroundColor: theme.palette.common.black,
    height: '100%'
  }
}));
interface StateProps {
  locations: Location[];
}
interface DispatchProps {
  setInitialParams: typeof setInitialParams;
  getLocations: typeof getLocations;
}

type Props = DispatchProps & StateProps & RouteComponentProps;
const SearchToolBar = (props: Props) => {
  const { setInitialParams, history, locations, getLocations } = props;

  const classes = useStyles();
  const [location, setLocation] = useState<Location>();
  const [area, setArea] = useState<number>();
  const [density, setDensity] = useState<Density>();
  const [searchBoxSelected,setSearchBoxSelected] = useState(1);

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));


  useEffect(() => {
    getLocations();
  }, [getLocations])

  const updateLocation = (value: string) => {
    const loc = _.find(locations, x => x.city === value);
    setLocation(loc);
  }

  const updateArea = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArea(parseInt(event.target.value));
  }

  const updateDensity = (value: string) => {
    const den = _.find(Densities, x => x.label === value);
    setDensity(den);
  }

  const next = () => {
    setInitialParams({
      location,
      area: area!,
      density: density!
    });
    history.push('/shapediver/step1');
  }

  return (
    <Grid>
      <Box fontSize={23} style={{ marginLeft: 30, color: 'white' }}>
        Start building here
      </Box>
      <Grid container className={classes.searchBox} >

        {!smallScreen?
        <Fragment>
          <Grid item container direction="column" xs={3} justify="center" >
          <LocationMenu
            updateLocation={updateLocation}
            location={location}
          />
          </Grid>
          <Grid item>
            <Divider orientation="vertical" variant="middle" className={classes.fieldDivider} />
            </Grid>
            <Grid item container direction="column" xs={3} justify="center">
            <SearchPill
              label="Area square feet"
              placeholder="total terrain area"
              onChange={updateArea}
              value={area || ''}
              type="number"
            />
          </Grid>
          <Grid item>
            <Divider orientation="vertical" variant="middle" className={classes.fieldDivider} />
          </Grid>
          <Grid item container direction="column" xs={3} justify="center">
            <UrbanismMenu
              updateDensity={updateDensity}
              density={density}
            />
          </Grid>
          <Grid item container xs={1} justify="center">
            <ButtonWrapper
              label="Next"
              size="small"
              onClick={next}
              disabled={!area || !location}
            />
          </Grid>
        </Fragment>:
        searchBoxSelected === 1?
        <Fragment>
        <Grid item container direction="column" xs={12} justify="center" >
          <LocationMenu
            updateLocation={updateLocation}
            location={location}
          />
        </Grid>
        {/* <Grid item>
          <Divider orientation="vertical" variant="middle" className={classes.fieldDivider} />
        </Grid> */}
        </Fragment>:null
        }
        {/* {smallScreen && searchBoxSelected == 1?null:
          <Fragment>
            <Grid item container direction="column" xs={3} justify="center" >
              <LocationMenu
                updateLocation={updateLocation}
                location={location}
              />
            </Grid>
            <Grid item>
              <Divider orientation="vertical" variant="middle" className={classes.fieldDivider} />
            </Grid>
          </Fragment>    
        } */}

        {/* {smallScreen && searchBoxSelected == 1?null:
          <Fragment>
            <Grid item container direction="column" xs={3} justify="center" >
              <LocationMenu
                updateLocation={updateLocation}
                location={location}
              />
            </Grid>
            <Grid item>
              <Divider orientation="vertical" variant="middle" className={classes.fieldDivider} />
            </Grid>
          </Fragment>    
        } */}
        
        
        
        
      </Grid>
    </Grid>
  );
}

const container = compose<Props, {}>(
  withRouter,
  connect<StateProps, DispatchProps, Props, RootState>(
    (state: RootState) => ({
      locations: state.domains.core.locations,
    }),
    {
      getLocations,
      setInitialParams
    }
  )
)(SearchToolBar);

export default container;
