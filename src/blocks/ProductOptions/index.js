import React from "react";
import { View, Text } from "react-native";

import style from "./style";

const ProductOptions = ({ options, lang }) => {
  return (
    <View style={style.wrapper}>
      {options && options.main &&
        options.main.length > 0 && (
          <View style={style.optionsRow}>
            <Text style={style.optionsTitle}>
              {lang["product.general_characteristics"]}
            </Text>
            {options.main.map((item, key) => {
              let right;
              if (item.option.name === "Цвет") {
                right = (
                  <Text
                    style={[
                      style.optionsOptionColor,
                      {
                        backgroundColor: item.value,
                      },
                    ]}
                  ></Text>
                );
              } else {
                right = (
                  <Text style={style.optionsOptionText}>
                    {item.value}
                  </Text>
                );
              }
              return (
                <View style={style.optionsOption} key={key}>
                  <View style={style.optionsOptionLeft}>
                    <Text style={style.optionsOptionName}>
                      {item.option.name}
                    </Text>
                  </View>
                  <View style={style.optionsOptionRight}>{right}</View>
                  <View style={style.line}></View>
                </View>
              );
            })}
          </View>
        )}

      {options && options.additional &&
        options.additional.length > 0 && (
          <View style={style.optionsRow}>
            <Text style={style.optionsTitle}>
              {lang["product.additional_information"]}
            </Text>
            {options.additional.map((item, key) => {
              let right;
              if (item.option.name === "Цвет") {
                right = (
                  <View
                    style={[
                      style.optionsOptionColor,
                      {
                        backgroundColor: item.value,
                      },
                    ]}
                  ></View>
                );
              } else {
                right = (
                  <Text style={style.optionsOptionText}>
                    {item.value}
                  </Text>
                );
              }
              return (
                <View style={style.optionsOption} key={key}>
                  <View style={style.optionsOptionLeft}>
                    <Text style={style.optionsOptionName}>
                      {item.option.name}
                    </Text>
                  </View>
                  <View style={style.optionsOptionRight}>{right}</View>
                  <View style={style.line}></View>
                </View>
              );
            })}
          </View>
        )}
    </View>
  )
}

export default ProductOptions;