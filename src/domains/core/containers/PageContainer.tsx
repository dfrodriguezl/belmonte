import { Container, createStyles, Grid, makeStyles, Theme } from '@material-ui/core'
import { Header } from 'domains/core/components'
import { connect } from 'react-redux';
import { RootState } from 'app/store';
import HomeSup from './HomeSup';
import { useHistory } from 'react-router-dom';
import ListProducts from './ListProducts';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageContainer: {
      width: '100%',
      margin: 0,
      [theme.breakpoints.down('sm')]: {
      },
    },
    containerStyle: {
      paddingLeft: 0,
      paddingRight: 0
    }
  })
);


interface OwnProps {
  background?: string;
  noHeader?: boolean;
  children: any;
}

interface StateProps {
  expandAdvanced?: Object;
}



type Props = OwnProps & StateProps;
const PageContainer = (props: Props) => {
  const { noHeader, background, children } = props;
  const classes = useStyles();
  const history = useHistory();

  const isList = history.location.pathname.indexOf('list-products') > -1;

  return (
    <div className={background} style={{ overflow: 'none' }}>
      <Container className={classes.containerStyle}>
        <Grid container direction="column" className={classes.pageContainer} >
          {
            !noHeader &&
            <Grid item>
              <Header />
            </Grid>
          }
          <Grid item container direction="row">
            {!isList ? <HomeSup /> : children}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

const container = connect<{}, {}, {}, RootState>(
  (state: RootState) => ({
  }),
  {
  }
)(PageContainer);

export default container;


