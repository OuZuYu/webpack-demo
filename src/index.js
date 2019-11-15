import '#/index.less'
alert('我被打包了')
alert(`我是常量 VERSION：${VERSION}`)

// 这个图片小于 10kb 将会打包成 base64的格式
const smallImg = document.createElement('img')
smallImg.src = require('../images/small.jpg')
document.body.appendChild(smallImg)

const bigImg = document.createElement('img')
bigImg.src = require('../images/big.jpg')
document.body.appendChild(bigImg)
