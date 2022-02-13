import React from 'react';
import { Container, Grid, Box, makeStyles, Theme, TableContainer, TableRow, TableCell, TableBody, Table } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { WhiteBuildings, Messages } from 'assets';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';

const styles = makeStyles((theme: Theme) => ({
  title: {
    paddingTop: 40,
    textAlign: 'center',
    marginBottom: 40
  },
  rootCell: {
    borderBottom: "1px solid black"
  },
  table: {
    "& .MuiTableCell-root": {
      border: "2px solid black"
    }
  },
  iconGray: {
    color: "#A0A0A0"
  }
}));

const HomeSub3 = () => {
  const classes = styles();

  const history = useHistory();

  const isWaiting = history.location.pathname.indexOf('register') > -1;


  return (
    <div className={isWaiting ? "home-sub-1" : "home-sub-1-waiting"}>
      <Container >
        <Grid container>
          <Grid item xs={6} className={classes.title} style={{ textAlign: 'justify' }}>
            <img src={WhiteBuildings} width="60%" style={{ position: 'relative' }} />
            <img src={Messages} width="60%" style={{ position: 'relative', left: '130px', top: '-100px' }} />
          </Grid>
          <Grid item xs={6} style={{ marginBottom: 40 }}>
            <Box component="h4" color="primary">REAL-TIME FEATURES</Box>
            <TableContainer>
              <Table size="small" className={classes.table}>
                <TableBody>
                  <TableRow >
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">Property & lot zoning info</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">Demographic zone data</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">Programatic 3D project</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">Units capacity</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">Project floor plans - PDF</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">3D Project facade</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">Project floors plans -</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <HighlightOffOutlinedIcon className={classes.iconGray} />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">3D Project custom facade</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <HighlightOffOutlinedIcon className={classes.iconGray} />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">Investor teaser - general</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">Client teaser - general PDF</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">Investor teaser - custom</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <HighlightOffOutlinedIcon className={classes.iconGray} />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">Client teaser - custom PDF</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <HighlightOffOutlinedIcon className={classes.iconGray} />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HomeSub3;
