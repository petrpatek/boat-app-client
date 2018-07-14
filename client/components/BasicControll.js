import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Led from './ledButton';

const styles = {
  card: {
    minWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
};

const BasicControll = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
        Základní rychlé ovádání
        </Typography>
        <Led />
      </CardContent>
      <CardActions>
        <Button size="small">Více ovladacích prvků</Button>
      </CardActions>
    </Card>
  );
};

BasicControll.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicControll);
