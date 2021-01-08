import React, { useState, useEffect } from "react";
import { View, Animated } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import PropTypes from "prop-types";

import style from "./style";

const Slider = ({ itemWidth, margin, children }) => {
  const [itemActive, setItemActive] = useState(0);
  const [leftPos, setLeftPos] = useState(
    new Animated.Value((itemWidth + margin * 2) * itemActive * -1)
  );

  useEffect(() => {
    Animated.timing(leftPos, {
      toValue: (itemWidth + margin * 2) * itemActive * -1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [itemActive]);
  return (
    <GestureRecognizer
      onSwipeRight={() => {
        if (itemActive > 0) {
          setItemActive(itemActive - 1);
        }
      }}
      onSwipeLeft={() => {
        if (itemActive < children.length - 1) {
          setItemActive(itemActive + 1);
        }
      }}
      style={[
        style.container,
        margin && { marginLeft: margin * -1, marginRight: margin * -1 },
      ]}
    >
      <Animated.View
        style={[
          style.wrapper,
          {
            width: (itemWidth + margin * 2) * children.length,
            position: "relative",
            left: leftPos,
          },
        ]}
      >
        {children.map((item, id) => {
          return (
            <View
              key={id}
              style={[
                style.item,
                itemWidth && { width: itemWidth },
                margin && { marginLeft: margin, marginRight: margin },
              ]}
            >
              {item}
            </View>
          );
        })}
      </Animated.View>
    </GestureRecognizer>
  );
};

Slider.propTypes = {
  children: PropTypes.array.isRequired,
  itemWidth: PropTypes.number.isRequired,
};

export default Slider;
