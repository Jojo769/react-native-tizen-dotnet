/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 * @providesModule LayoutExample
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = ReactNative;

var RNTesterBlock = require('./RNTesterBlock');
var RNTesterPage = require('./RNTesterPage');

class Circle extends React.Component {
  render() {
    var size = this.props.size || 20;
    var backgroundColor = this.props.bgColor || '#527fe4';
    return (
      <View
        style={{
          borderRadius: size / 2,
          backgroundColor: backgroundColor,
          width: size,
          height: size,
          margin: 1,
        }}
      />
    );
  }
}

class CircleBlock extends React.Component {
  render() {
    var circleStyle = {
      flexDirection: 'row',
      backgroundColor: '#f6f7f8',
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      marginBottom: 2,
    };
    return (
      <View style={[circleStyle, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

class LayoutExample extends React.Component {
  static title = 'Layout - Flexbox';
  static description = 'Examples of using the flexbox API to layout views.';
  static displayName = 'LayoutExample';

  render() {
    var fiveColoredCircles = [
      <Circle bgColor="#527fe4" key="blue" />,
      <Circle bgColor="#D443E3" key="violet" />,
      <Circle bgColor="#FF9049" key="orange" />,
      <Circle bgColor="#FFE649" key="yellow" />,
      <Circle bgColor="#7FE040" key="green" />
    ];

    return (
      <RNTesterPage title={this.props.navigator ? null : 'Layout'}>
        <RNTesterBlock title="Flex Direction">
          <Text style={{color:'black'}}>row</Text>
          <CircleBlock style={{flexDirection: 'row'}}>
            {fiveColoredCircles}
          </CircleBlock>
          <Text style={{color:'black'}}>row-reverse</Text>
          <CircleBlock style={{flexDirection: 'row-reverse'}}>
            {fiveColoredCircles}
          </CircleBlock>
          <Text style={{color:'black'}}>column</Text>
          <CircleBlock style={{flexDirection: 'column'}}>
            {fiveColoredCircles}
          </CircleBlock>
          <Text style={{color:'black'}}>column-reverse</Text>
          <CircleBlock style={{flexDirection: 'column-reverse'}}>
            {fiveColoredCircles}
          </CircleBlock>
          <View style={[styles.overlay, {position: 'absolute', top: 15, left: 160}]}>
            <Text style={{color:'black'}}>{'top: 15, left: 160'}</Text>
          </View>
        </RNTesterBlock>

        <RNTesterBlock title="Justify Content - Main Direction">
          <Text style={{color:'black'}}>flex-start</Text>
          <CircleBlock style={{justifyContent: 'flex-start'}}>
            {fiveColoredCircles}
          </CircleBlock>
          <Text style={{color:'black'}}>center</Text>
          <CircleBlock style={{justifyContent: 'center'}}>
            {fiveColoredCircles}
          </CircleBlock>
          <Text style={{color:'black'}}>flex-end</Text>
          <CircleBlock style={{justifyContent: 'flex-end'}}>
            {fiveColoredCircles}
          </CircleBlock>
          <Text style={{color:'black'}}>space-between</Text>
          <CircleBlock style={{justifyContent: 'space-between'}}>
            {fiveColoredCircles}
          </CircleBlock>
          <Text style={{color:'black'}}>space-around</Text>
          <CircleBlock style={{justifyContent: 'space-around'}}>
            {fiveColoredCircles}
          </CircleBlock>
        </RNTesterBlock>
        <RNTesterBlock title="Align Items - Other Direction">
          <Text style={{color:'black'}}>flex-start</Text>
          <CircleBlock style={{alignItems: 'flex-start', height: 30}}>
            <Circle size={15} /><Circle size={10} /><Circle size={20} />
            <Circle size={17} /><Circle size={12} /><Circle size={15} />
            <Circle size={10} /><Circle size={20} /><Circle size={17} />
            <Circle size={12} /><Circle size={15} /><Circle size={10} />
            <Circle size={20} /><Circle size={17} /><Circle size={12} />
            <Circle size={15} /><Circle size={8} />
          </CircleBlock>
          <Text style={{color:'black'}}>center</Text>
          <CircleBlock style={{alignItems: 'center', height: 30}}>
            <Circle size={15} /><Circle size={10} /><Circle size={20} />
            <Circle size={17} /><Circle size={12} /><Circle size={15} />
            <Circle size={10} /><Circle size={20} /><Circle size={17} />
            <Circle size={12} /><Circle size={15} /><Circle size={10} />
            <Circle size={20} /><Circle size={17} /><Circle size={12} />
            <Circle size={15} /><Circle size={8} />
          </CircleBlock>
          <Text style={{color:'black'}}>flex-end</Text>
          <CircleBlock style={{alignItems: 'flex-end', height: 30}}>
            <Circle size={15} /><Circle size={10} /><Circle size={20} />
            <Circle size={17} /><Circle size={12} /><Circle size={15} />
            <Circle size={10} /><Circle size={20} /><Circle size={17} />
            <Circle size={12} /><Circle size={15} /><Circle size={10} />
            <Circle size={20} /><Circle size={17} /><Circle size={12} />
            <Circle size={15} /><Circle size={8} />
          </CircleBlock>
        </RNTesterBlock>
        <RNTesterBlock title="Flex Wrap">
          <CircleBlock style={{flexWrap: 'wrap'}}>
            {'oooooooo0000045454564564654651541564gfgdfgdf1564564564564564000000000000000000fsdfdsf00000ooohellpooooollpllpllpllp'.split('').map((char, i) => <Circle key={i} />)}
          </CircleBlock>
        </RNTesterBlock>
      </RNTesterPage>
    );
  }
}

var styles = StyleSheet.create({
  overlay: {
    backgroundColor: '#aaccff',
    borderRadius: 10,
    borderWidth: 0.5,
    opacity: 0.5,
    padding: 5,
  },
});

module.exports = LayoutExample;
