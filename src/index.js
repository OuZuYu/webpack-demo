import _get from 'lodash.get'
import html from '../src/html/h2m.html'
import '#/index.less'
console.log(_throttle)
console.log('这段 HTML 已经被 h2m-loader 转为 markdown 了', html)
alert('我被打包了')
alert(`我是常量 VERSION：${VERSION}`)

// 这个图片小于 10kb 将会打包成 base64的格式
const smallImg = document.createElement('img')
smallImg.src = require('../images/small.jpg')
document.body.appendChild(smallImg)

const bigImg = document.createElement('img')
bigImg.src = require('../images/big.jpg')
document.body.appendChild(bigImg)
