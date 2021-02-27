import React, { Component } from "react";

import "./iconfont.css";
import "./cart.scss";

import Headitem from "./Headitem";
import Footer from "./Footer";

//列表
class Goodslist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPrice: 0,
      goods: [
        {
          id: 1,
          checked: false,
          title: "首款海绵包包",
          img:
            "https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/cp_gg.png",
          color: "颜色：黑色",
          price: 68.0,
          num: 1,
        },
        {
          id: 2,
          checked: false,
          title: "首款海绵包包",
          img:
            "https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/cp_gg.png",
          color: "颜色：黑色",
          price: 68.0,
          num: 1,
        },
      ],
    };
  }

  //商品选中
  checkItem = (e) => {
    let { index } = e.currentTarget.dataset;
    let goods = this.state.goods;
    goods[index].checked = !goods[index].checked;

    //传值
    let allprice = this.state.allPrice;
    this.state.goods.map((v) => {
      if (v.checked) {
        allprice = v.num * v.price;
      }
      return allprice;
    });
    this.props.getMsgHandler(allprice, this.state.goods);

    //更新goods checked
    this.setState({
      goods: goods,
      allPrice: allprice,
    });
  };
  //减少商品
  numSub = (index) => {
    console.log(index);
    let goods_num = this.state.goods;

    if (goods_num[index].num > 1) {
      --goods_num[index].num;
    } else {
      alert("再减就没了");
    }

    //传值
    let allprice = this.state.allPrice;
    this.state.goods.map((v) => {
      if (v.checked) {
        allprice = v.num * v.price;
      }
      return allprice;
    });
    this.props.getMsgHandler(allprice, this.state.goods);

    this.setState({
      goods: goods_num,
      allPrice: allprice,
    });
  };
  //添加商品
  numAdd = (index) => {
    console.log(index);
    let goods_num = this.state.goods;
    ++goods_num[index].num;

    //传值
    let allprice = this.state.allPrice;
    this.state.goods.map((v) => {
      if (v.checked) {
        allprice = v.num * v.price;
      }
      return allprice;
    });
    this.props.getMsgHandler(allprice, this.state.goods);

    this.setState({
      goods: goods_num,
      allPrice: allprice,
    });
  };

  getGoods = (params) => {
    let goodslist = this.state.goods.map((v, index) => (
      <div className="goods" key={v.id}>
        <i
          data-index={index}
          onClick={this.checkItem.bind(this)}
          className={
            "iconfont " + (v.checked ? "icon-check" : "icon-gouxuanzhong")
          }
        ></i>
        <img src={v.img} alt="goods" />
        <div className="titlebox">
          <span className="title">{v.title}</span>
          <span className="col">{v.color}</span>
          <span className="pricebox">
            ￥{v.price.toFixed(2)}
            <div className="num">
              <i
                className="iconfont icon-jian"
                onClick={this.numSub.bind(this, index)}
              ></i>
              <span className="goods_num">{v.num}</span>
              <i
                className="iconfont icon-jia"
                onClick={this.numAdd.bind(this, index)}
              ></i>
            </div>
          </span>
        </div>
      </div>
    ));
    return goodslist;
  };
  render() {
    return <div>{this.getGoods()}</div>;
  }
}

//合计
class Cartfooter extends Component {
  state = {
    checked: "",
  };
  checkItem = () => {
    let check = this.state.checked;
    check = !this.props.checked;
    this.props.getCheck(check);
    this.setState({
      checked: check,
    });
    console.log(this.props.checked);
  };
  render() {
    return (
      <div className="footerbox">
        <i
          onClick={this.checkItem}
          className={
            "iconfont " +
            (this.props.checked ? "icon-check" : "icon-gouxuanzhong")
          }
        ></i>
        <div className="allpirbox">
          <div className="f_left">
            合计：￥{" "}
            <span className="addprice">{this.props.price.toFixed(2)}</span>
          </div>
          <div className="f_right">
            <button className="btn">去结算</button>
          </div>
        </div>
      </div>
    );
  }
}

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPrice: 0,
      checked: false,
      goods: [],
    };
  }
  render() {
    return (
      <div className="cartbox">
        <div className="header_box">
          <Headitem />
        </div>
        <div className="list_box">
          <Goodslist
            getMsgHandler={this.getMsgHandler}
            checked={this.state.checked}
            goods={this.state.goods}
          />
          <Cartfooter
            getCheck={this.getCheck}
            price={this.state.allPrice}
            checked={this.state.checked}
          />
        </div>
        <div className="footer_box">
          <Footer />
        </div>
      </div>
    );
  }
  getMsgHandler = (val, b) => {
    console.log(val);
    let totalprice = 0;
    let check = this.state.checked;
    b.map((p) => {
      if (p.checked) {
        totalprice += p.num * p.price;
        check = p.checked;
      }
      return { check: check, price: totalprice };
    });
    this.setState({
      allPrice: totalprice,
      checked: check,
      goods: b,
    });
  };
  getCheck = (v) => {
    this.setState({
      checked: v,
    });
  };
}
