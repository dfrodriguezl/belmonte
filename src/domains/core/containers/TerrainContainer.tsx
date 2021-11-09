import { Grid, makeStyles, createStyles, Typography, IconButton, Divider, Input, Button } from "@material-ui/core";
import { ArrowBackIos, CloudUpload, Add, Close } from "@material-ui/icons";
import { PageContainer } from ".";
import { LocationMenu, UrbanismMenu } from "../components";
import { Densities, Density, Location, LocationSimple, Terrain } from "../models";
import { getLocations, saveTerrain } from 'domains/core/coreSlice';
import { Fragment, useEffect, useRef, useState } from "react";
import { withRouter } from "react-router";
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { RootState } from "app/store";
import _ from 'lodash';

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bolder'
    },
    backIcon: {
      color: 'white'
    },
    backText: {
      color: 'white',
      fontWeight: 'bolder'
    },
    containerText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'lighter'
    },
    backgroundProject: {
      background: '#FFFFFF1A 0% 0% no-repeat padding-box',
      width: '100%',
      marginTop: 20,
      display: 'flex',
      padding: '15px 50px',
      '&:hover': {
        backgroundColor: '#FFFFFF33'
      },
    },
    backgroundProjectWhite: {
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      width: '100%',
      marginTop: 20,
      display: 'flex',
      padding: '15px 50px',
      marginBottom: 50,
      borderRadius: 31
    },
    uploadIcon: {
      background: '#FF6C6C',
      color: 'white'
    },
    containerWhiteTextBold: {
      color: '#000000',
      fontWeight: 'bolder'
    },
    containerWhiteText: {
      color: '#00000080'
    },
    containerWhiteTextSmall: {
      color: '#00000080',
      fontSize: 15
    },
    dividerStyle: {
      width: '100%',
      marginTop: 10
    },
    fieldDivider: {
      backgroundColor: 'black',
      height: '100%'
    },
    searchBox: {
      marginTop: 10,
      marginLeft: 70,
      marginRight: 70,
      background: 'rgba(255, 255, 255, 0.9)',
      borderRadius: 32,
      boxShadow: '4px 4px 3px #00000029',
      border: '1px solid #707070'
    },
    button: {
      cursor: 'pointer',
      borderRadius: 20,
      backgroundColor: '#FF6C6C',
      color: 'white',
      textTransform: 'none',
      margin: '30px 0px',
      '&:hover': {
        backgroundColor: '#FF6C6C'
      },
      padding: '10px 30px'
    },
    infoContainer: {
      padding: '0px 20px'
    },
    titleContainer: {
      color: "white"
    },
    rigthContainer: {
      borderLeft: '0.5px solid #ffffff33',
      paddingLeft: 30,
      paddingRight: 30
    }
  })
);

interface StateProps {
  locations: Location[];
}

interface DispatchProps {
  getLocations: typeof getLocations;
  saveTerrain: typeof saveTerrain;
}

type Props = StateProps & DispatchProps;
const TerrainContainer = (props: Props) => {
  const classes = useStyles();
  const { getLocations, locations, saveTerrain } = props;
  const [location, setLocation] = useState<Location>();
  const [density, setDensity] = useState<Density>();
  const fileInput = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [terrain, setTerrain] = useState<Terrain>();
  const [locationSimple, setLocationSimple] = useState<LocationSimple>();

  useEffect(() => {
    getLocations();
  }, [getLocations])

  const updateLocation = (value: string) => {
    const loc = _.find(locations, x => x.city === value);
    setLocation(loc);
  }

  const updateStep = (step: number) => {
    //TO DO
  }

  const updateDensity = (value: string) => {
    const den = _.find(Densities, x => x.label === value);
    setDensity(den);

    const densityLocal = den?.value === 0 ? "suburban" : "urban";

    setTerrain({
      ...terrain,
      location: {
        id: location?.id!,
        city: location?.city!,
        densityGeneral: location?.density!,
        description: location?.description!,
        maxPriFloors: location![densityLocal].maxPriFloors,
        maxSecFloors: location![densityLocal].maxSecFloors,
        streetFloors: location![densityLocal].streetFloors,
        windowPercentage: location![densityLocal].windowPercentage,
        unitsNumberType: location![densityLocal].unitsNumberType,
        density: location![densityLocal].density,
        flatSize: location![densityLocal].flatSize,
        flatType: location![densityLocal].flatType,
        regen: location![densityLocal].regen,
        lat: location![densityLocal].lat,
        lon: location![densityLocal].lon,
        p_vivs: location![densityLocal].p_vivs,
        axisSelection: location![densityLocal].axisSelection,
        typologies: location![densityLocal].typologies,
        emptySpaceSelection: location![densityLocal].emptySpaceSelection,
        undefinedTower: location![densityLocal].undefinedTower,
        streetDensity: location![densityLocal].streetDensity,
        islandSpacings: location![densityLocal].islandSpacings,
        floorsAlignment: location![densityLocal].floorsAlignment,
        unitsOrganization: location![densityLocal].unitsOrganization
      },
      densityGeneral: den?.value
    })

  }

  const handleFileUpload = () => {
    fileInput.current!.click();
  }

  const uploadDXF = (event: any) => {
    setSelectedFile(event.target.files[0]);
    setTerrain(
      {
        ...terrain,
        path: event.target.files[0].name
      }
    )
  }

  const handleClose = () => {
    setSelectedFile(null);
  }

  const saveTerrainForm = () => {
    saveTerrain(terrain!)
  }

  return (
    <PageContainer background="black-model">
      <Grid xs={12}>
        <Grid xs={12}>
          <IconButton>
            <ArrowBackIos className={classes.backIcon} />
            <Typography className={classes.backText}>Back</Typography>
          </IconButton>
          <Typography className={classes.title} >Upload terrain shape</Typography>
        </Grid>
        <Grid xs={12} container>
          <Grid xs={2} />
          <Grid xs={10} className={classes.backgroundProject}>
            <Grid xs={3}>
              <Typography className={classes.backText}>How to prepare your DXF file</Typography>
            </Grid>
            <Grid xs={3}>
              <Typography className={classes.containerText}>1.Open Autocad</Typography>
            </Grid>
            <Grid xs={3}>
              <Typography className={classes.containerText}>2.Draw your terrain shape</Typography>
            </Grid>
            <Grid xs={3}>
              <Typography className={classes.containerText}>3.Upload your file</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} item container>
          <Grid xs={3} />
          <Grid container xs={6} className={classes.backgroundProjectWhite}>
            <Grid xs={3} item container justify="center">
              <IconButton className={classes.uploadIcon} onClick={handleFileUpload}>
                <input
                  ref={fileInput}
                  type="file"
                  style={{ display: 'none' }}
                  onChange={(event) => uploadDXF(event)}
                  accept=".dxf"
                />
                {selectedFile ?
                  <Add fontSize="large"></Add> :
                  <CloudUpload fontSize="large"></CloudUpload>
                }
              </IconButton>
            </Grid>
            <Grid xs={9} item container justify="center">
              {selectedFile ?
                <Fragment>
                  <Grid xs={10} item container justify="center">
                    <Typography className={classes.containerWhiteTextBold} style={{ alignSelf: 'center' }}>
                      {selectedFile?.name}
                    </Typography>
                  </Grid>
                  <Grid xs={2} item container>
                    <IconButton style={{ alignSelf: 'center' }} onClick={() => handleClose()}>
                      <Close></Close>
                    </IconButton>
                  </Grid>
                </Fragment> :
                <Typography className={classes.containerWhiteTextBold}>Upload terrain shape
                  <br />
                  <span className={classes.containerWhiteText}>Add DXF file</span>
                </Typography>
              }

            </Grid>
            <Divider className={classes.dividerStyle} />
            <Grid xs={12}>
              <Typography className={classes.containerWhiteTextSmall}>Terrain name</Typography>
            </Grid>
            <Grid xs={12}>
              <Input style={{ height: '60px', width: '100%' }} onChange={(e) => {setTerrain({...terrain, name: e.target.value})}}/>
            </Grid>
            <Grid xs={12}>
              <Typography className={classes.containerWhiteTextSmall}>Terrain owner</Typography>
            </Grid>
            <Grid xs={12}>
              <Input style={{ height: '60px', width: '100%' }} onChange={(e) => {setTerrain({...terrain, owner: e.target.value})}}/>
            </Grid>
            <Grid xs={12} container justify="center" className={classes.searchBox}>
              <Grid item container direction="column" xs={5} justify="center" >
                <LocationMenu
                  updateLocation={updateLocation!}
                  location={location}
                  updateStep={updateStep!}
                />
              </Grid>
              <Grid item>
                <Divider orientation="vertical" variant="middle" className={classes.fieldDivider} />
              </Grid>
              <Grid item container direction="column" xs={5} justify="center">
                <UrbanismMenu
                  updateDensity={updateDensity}
                  density={density}
                  updateStep={updateStep}
                />
              </Grid>

            </Grid>
            <Grid xs={12} container justify="center">
              <Button
                size="large"
                className={classes.button}
                onClick={() => saveTerrainForm()}
                disabled={!terrain?.name || !terrain.owner || !selectedFile || !terrain.location || !density} 
              >
                Save
              </Button>
            </Grid>
            <a href="#" style={{ textAlign: 'center', width: '100%', textDecoration: 'underline' }}>Continue to building a project</a>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>)
}

const container = compose<Props, {}>(
  withRouter,
  connect<StateProps, DispatchProps, {}, RootState>(
    (state: RootState) => ({
      locations: state.domains.core.locations
    }),
    {
      getLocations,
      saveTerrain
    }
  )
)(TerrainContainer);

export default container;