import React, { Component } from "react";
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./iconfont.css";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import "./main.scss";
import Goods from "./Goods.jsx";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar, A11y]);

// swiper
class Swiperbar extends Component {
  getImg = (params) => {
    let Imgs = this.state.urls.map((v) => (
      <SwiperSlide key={v.id}>
        <img src={v.srclink} alt="banner" className="banner_img" />
      </SwiperSlide>
    ));
    return Imgs;
  };
  state = {
    Imgs: "",
    urls: [
      {
        id: 1,
        srclink:
          "https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/banner1.jpg",
      },
      {
        id: 2,
        srclink:
          "https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/banner2.jpg",
      },
      {
        id: 3,
        srclink:
          "https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/banner3.jpg",
      },
    ],
  };
  render() {
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={true}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {this.getImg()}
      </Swiper>
    );
  }
}

// nav
class Nav extends Component {
  getNavbar = (params) => {
    let navbar = this.state.navimgs.map((v) => (
      <a href=":;" key={v.id}>
        <img src={v.imglink} alt="nav" />
        <span className="nav_txt">{v.text}</span>
      </a>
    ));
    return navbar;
  };
  state = {
    navimgs: [
      {
        id: 1,
        text: "大聚惠",
        imglink:
          "https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/nav01.png",
      },
      {
        id: 2,
        text: "海外购",
        imglink:
          "https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/nav02.png",
      },
      {
        id: 3,
        text: "超市百货",
        imglink:
          "https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/nav03.png",
      },
      {
        id: 4,
        text: "厂家直销",
        imglink:
          "https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/nav04.png",
      },
      {
        id: 5,
        text: "美食娱乐",
        imglink:
          "https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/nav05.png",
      },
    ],
  };
  render() {
    return <div className="nav_item">{this.getNavbar()}</div>;
  }
}

//Cstore
class Cstore extends Component {
  getCstore = (params) => {
    let cstore = this.state.storeimgs.map((v) => (
      <a href=":;" key={v.id}>
        <img src={v.imglink} alt="nav" />
        <span className="item_text">{v.text}</span>
      </a>
    ));
    return cstore;
  };
  state = {
    storeimgs: [
      {
        id: 1,
        text: "海绵包包",
        imglink:
          "https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/scyh0.jpg",
      },
      {
        id: 2,
        text: "韩国代购",
        imglink:
          "https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/scyh3.png",
      },
      {
        id: 3,
        text: "ARC潮店",
        imglink:
          "https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/scyh4.png",
      },
      {
        id: 4,
        text: "欧力女装",
        imglink:
          "https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/scyh1.png",
      },
    ],
  };
  render() {
    return (
      <div className="cstore">
        <h1>商城客户</h1>
        <div className="cstore_item">{this.getCstore()}</div>
      </div>
    );
  }
}

//促销精选
class Actplan extends Component {
  render() {
    return (
      <div className="act">
        <h1>精选促销</h1>
      </div>
    );
  }
}

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="swiper">
          <Swiperbar />
        </div>
        <div className="nav">
          <Nav />
        </div>
        <div className="c_store">
          <Cstore />
        </div>
        <div className="actplan">
          <Actplan />
        </div>
        <Goods />
      </div>
    );
  }
}
