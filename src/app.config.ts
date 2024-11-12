export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/shop/index",
    "pages/chat/chat",
    "pages/user/user",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#000",
    selectedColor: "#000",
    backgroundColor: "#fff",
    borderStyle: "white",
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "assets/tabs/accompany.png",
        selectedIconPath: "assets/tabs/accompany_checked.png",
        text: "首页",
      },
      {
        pagePath: "pages/shop/index",
        iconPath: "assets/tabs/shop.png",
        selectedIconPath: "assets/tabs/shop_checked.png",
        text: "商城",
      },
      {
        pagePath: "pages/chat/chat",
        iconPath: "assets/tabs/chat.png",
        selectedIconPath: "assets/tabs/chat_checked.png",
        text: "AI聊天",
      },
      {
        pagePath: "pages/user/user",
        iconPath: "assets/tabs/user.png",
        selectedIconPath: "assets/tabs/user_checked.png",
        text: "我的",
      },
    ],
  },
});
