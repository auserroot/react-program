import React, { Component } from "react";

import "./goods.scss";

//商品
class Goods extends Component {
  getGitem = (params) => {
    let Gitem = this.state.goods.map((v) => (
      <li key={v.id}>
        <a href=":;">
          <img src={v.pic} alt="goods" />
          <span className="tit">{v.tit}</span>{" "}
          <span className="price">
            {v.price}
            <i>{v.origin_price}</i>
          </span>
        </a>
      </li>
    ));
    return Gitem;
  };
  state = {
    goods: [
      {
        id: 1,
        pic:
          "https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/d_sp_01.jpg",
        tit: "收款海绵包包",
        price: "￥68.00",
        origin_price: "$75.00",
      },
      {
        id: 2,
        pic:
          "https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/d_sp_02.png",
        tit: "百搭学院风英伦背包单双肩包",
        price: "￥68.00",
        origin_price: "$176.00",
      },
      {
        id: 3,
        pic:
          "https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/d_sp_03.png",
        tit: "百搭学院风英伦",
        price: "￥68.00",
        origin_price: "$75.00",
      },
      {
        id: 4,
        pic:
          "https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/d_sp_04.png",
        tit: "收款海绵包包",
        price: "￥68.00",
        origin_price: "$75.00",
      },
      {
        id: 5,
        pic:
          "https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/d_sp_05.png",
        tit: "收款海绵包包",
        price: "￥68.00",
        origin_price: "$75.00",
      },
      {
        id: 6,
        pic:
          "https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/d_sp_06.png",
        tit: "收款海绵包包",
        price: "￥68.00",
        origin_price: "$75.00",
      },
    ],
  };
  render() {
    return <ul className="list">{this.getGitem()}</ul>;
  }
}

export default Goods;
