import React from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


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
        <ReactEcharts option={{
          tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
          },
          toolbox: {
            feature: {
            }
          },
          series: [
            {
              name: 'Voltmetr',
              type: 'gauge',
              min: 0,
              max: 18,
              radius: '90%',
              splitNumber: 18,
              detail: { formatter: '{value}V' },
              axisLine: {
                lineStyle: {
                  width: 8
                }
              },
              axisTick: {
                length: 12,
                lineStyle: {
                  color: 'auto'
                }
              },
              splitLine: {
                length: 20,
                lineStyle: {
                  color: 'auto'
                }
              },
              pointer: {
                width: 5
              },
              data: [{ value: 12, name: 'Test' }]
            }
          ]
        }}
        />
      </CardContent>
      <CardActions>
        <Button size="small">Historie</Button>
      </CardActions>
    </Card>
  );
};

BasicControll.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicControll);
