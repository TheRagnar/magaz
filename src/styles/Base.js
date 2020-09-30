import { StyleSheet } from 'react-native';

import st from '../const/styleConst';

const BaseStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  wrapper: {
    flex: 1,
    backgroundColor: st.whiteColor
  },
});

export default BaseStyle;