import { View } from "@tarojs/components";

import type CustomTabBar from "../../custom-tab-bar";
import Taro, { useDidShow } from "@tarojs/taro";
import { useMemo } from "react";
import "./index.scss";

export default function shopPage() {
  const page = useMemo(() => Taro.getCurrentInstance().page, []);

  useDidShow(() => {
    const tabbar = Taro.getTabBar<CustomTabBar>(page);
    console.log("tabbar", tabbar);

    tabbar?.setSelected(1);
  });
  return (
    <View className="bg-default">
      <View>sfsdlfk</View>
    </View>
  );
}
