import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fullscreen from '@material-ui/icons/Fullscreen';
import FullscreenExit from '@material-ui/icons/FullscreenExit';

import Led from './ledButton';

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '16px'
  },
  button: {
    minWidth: 'fit-content',
    padding: '8px',
    zIndex: 3,
    position: 'absolute'
  }
};

const Dashboard = (props) => {
  const { classes } = props;
  console.log(props)

  return (
    <Paper>
      <Button onClick={props.fullscreenChange} classes={{ root: classes.button }}>
        {props.isFullscreen ? <FullscreenExit /> : <Fullscreen />}
      </Button>
      <div style={styles.grid}>
        <ReactEcharts option={{
        series: [
          {
            name: 'Otáčky',
            type: 'gauge',
            radius: '80%',
            min: 0,
            max: 7,
            splitNumber: 7,
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                width: 8
              }
            },
            axisTick: { // 坐标轴小标记
              length: 12, // 属性length控制线长
              lineStyle: { // 属性lineStyle控制线条样式
                color: 'auto'
              }
            },
            splitLine: { // 分隔线
              length: 20, // 属性length控制线长
              lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            pointer: {
              width: 5
            },
            title: {
              offsetCenter: [0, '-30%'], // x, y，单位px
            },
            detail: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder'
            },
            data: [{ value: 5.5, name: 'x1000 rpm' }]
          }
        ]
      }}
        />

        <ReactEcharts option={{
        tooltip: {
          formatter: '{a} <br/>{c} {b}'
        },
        toolbox: {
          show: false
        },
        series: [
          {
            name: 'Speed',
            type: 'gauge',
            z: 3,
            min: 0,
            max: 12,
            splitNumber: 4,
            radius: '100%',
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                width: 10
              }
            },
            axisTick: { // 坐标轴小标记
              length: 15, // 属性length控制线长
              lineStyle: { // 属性lineStyle控制线条样式
                color: 'auto'
              }
            },
            splitLine: { // 分隔线
              length: 20, // 属性length控制线长
              lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            axisLabel: {
              backgroundColor: 'auto',
              borderRadius: 2,
              color: '#eee',
              padding: 3,
              textShadowBlur: 2,
              textShadowOffsetX: 1,
              textShadowOffsetY: 1,
              textShadowColor: '#222'
            },
            title: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              fontSize: 20,
              fontStyle: 'italic'
            },
            detail: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              formatter(value) {
                value = (`${value}`).split('.');
                value.length < 2 && (value.push('00'));
                return `${(`00${value[0]}`).slice(-2)
                  }.${(`${value[1]}00`).slice(0, 2)}`;
              },
              fontWeight: 'bolder',
              borderRadius: 3,
              backgroundColor: '#444',
              borderColor: '#aaa',
              shadowBlur: 5,
              shadowColor: '#333',
              shadowOffsetX: 0,
              shadowOffsetY: 3,
              borderWidth: 2,
              textBorderColor: '#000',
              textBorderWidth: 2,
              textShadowBlur: 2,
              textShadowColor: '#fff',
              textShadowOffsetX: 0,
              textShadowOffsetY: 0,
              fontFamily: 'Arial',
              width: 70,
              color: '#eee',
              rich: {}
            },
            data: [{ value: 10, name: 'km/h' }]
          }
        ]
      }}
        />
        <div>
          <Led />
          <Led />
          <Led />
          <Led />
          <Led />
          <Led />
          <Led />
          <Led />
          <Led />
        </div>
      </div>
    </Paper>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  fullscreenChange: PropTypes.func.isRequired,
  isFullscreen: PropTypes.bool,
};
Dashboard.defaultProps = {
  isFullscreen: false
};

export default withStyles(styles)(Dashboard);
