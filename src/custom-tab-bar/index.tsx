import { Component } from "react";

import { CoverImage, CoverView, ITouchEvent } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

export default class CustomTabBar extends Component {
  state = {
    show: true,
    selected: 0,
    color: "#000000",
    selectedColor: "#000000",
    list: [
      {
        pagePath: "/pages/accompany/accompany",
        iconPath: "../assets/tabs/accompany.png",
        selectedIconPath: "../assets/tabs/accompany_checked.png",
        text: "陪伴",
      },
      {
        pagePath: "/pages/shop/index",
        iconPath: "../assets/tabs/shop.png",
        selectedIconPath: "../assets/tabs/shop_checked.png",
        text: "商城",
      },
      {
        pagePath: "/pages/chat/chat",
        iconPath: "../assets/tabs/chat.png",
        selectedIconPath: "../assets/tabs/chat_checked.png",
        text: "AI聊天",
      },
      {
        pagePath: "/pages/user/my",
        iconPath: "../assets/tabs/user.png",
        selectedIconPath: "../assets/tabs/user_checked.png",
        text: "我的",
      },
    ],
  };

  selectNotes?: () => void;

  switchTab(event: ITouchEvent, item: any, index: number) {
    event.stopPropagation();
    this.setSelected(index);
    Taro.switchTab({ url: item.pagePath });
  }

  homePage() {
    if (this.state.selected === 0) {
      if (this.selectNotes) {
        this.selectNotes();
      }
    } else {
      this.setSelected(0);
      Taro.switchTab({ url: "/pages/index/index" });
    }
  }

  setCallBack(cb: () => void) {
    this.selectNotes = cb;
  }

  setSelected(idx: number) {
    this.setState({
      selected: idx,
    });
  }

  hideTab() {
    this.setState({
      show: false,
    });
  }

  showTab() {
    this.setState({
      show: true,
    });
  }

  render() {
    const { list, selected, color, selectedColor, show } = this.state;
    return (
      show && (
        <CoverView className="tab-bar">
          <CoverView className="tab-bar-container">
            {list.map((tab) => (
              <CoverView
                onClick={(event) => this.switchTab(event, tab, 0)}
                className="tab-bar-item"
              >
                <CoverImage
                  className="tab-icon"
                  src={selected === 0 ? tab.selectedIconPath : tab.iconPath}
                />
                <CoverView
                  style={{ color: selected === 0 ? selectedColor : color }}
                >
                  {tab.text}
                </CoverView>
              </CoverView>
            ))}
          </CoverView>
          <CoverView className="safe-area" />
        </CoverView>
      )
    );
  }
}
