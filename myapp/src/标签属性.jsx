import React from 'react';
import './App.css'
const App = () => {
    let txt = "<h1 style='color:red'></h1>"
    let atr = {
        data: 1,
        msg: '(*^▽^*)/',
        style: {
            color: 'yellow'
        },
        class: 'red'
    }
    return (
        <div className='demo'>
            123 <br />

            <label htmlFor='text'>
                lable标签<input type="text" name='text' placeholder='input框' />
            </label>
            <br />
            {/* 富文本渲染 */}
            {txt}
            <div dangerouslySetInnerHTML={{ __html: txt }}></div>

            {/* 标签中传入多个属性 */}
            <h1 data={1} msg={'test'}>hi</h1>
            {/* es6 ...展开运算符 */}
            <h1 {...atr}>hi</h1>
        </div>

    );
}

export default App;