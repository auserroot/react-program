import React from 'react';
import './jsx.scss'
let arr = [
    { txt: '网页', id: 1 },
    { txt: '图片', id: 2 },
    { txt: '视频', id: 3 },
    { txt: '学术', id: 4 },
    { txt: '词典', id: 5 },
    { txt: '地图', id: 6 }
]
let box = ""
const jsxExample = () => {
    let list = arr.map((v) => (
        <li className="item" key={v.id}>{v.txt}</li>
    ))
    box = <div>
        <ul className="nav">
            {list}
        </ul>
    </div>
    return (
        box
    );
}

export default jsxExample;
