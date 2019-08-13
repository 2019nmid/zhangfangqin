const good = "hello";
import ReactDom from 'react-dom';
import React from 'react';


import HelloReact from './HelloReact.jsx';

import img1 from './img/pic_1.png';
import img2 from './img/pic_2.png';

import './test.scss'

//async function sayHello() {
//    const result = await fetch(SERVICE_URL);
//    console.log(result);
//}
//sayHello();

ReactDom.render(<HelloReact />, document.getElementById('good'))