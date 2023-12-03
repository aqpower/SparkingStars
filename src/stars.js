//生成一些随机的文本
let texts = [
  '我最喜欢Aqours了!!!',
  '高海千歌激推🍊',
  '南昌航空大学',
  '信息工程学院',
  '计算机科学与技术',
  '努力成为一名优秀的Web开发工程师',
  'LLer',
  '不要关掉啊，你眼里的光!',
  '遂川中学',
  '君子之交淡如水',
  '它如同我的生命',
  '肖火火同学',
  '我不要你管啊！！！！！',
  '你管我啊！少管我！',
  '我们都是追梦人',
  '为闪耀的自我而生',
  '闪耀暖暖',
  '火铳QAQ',
  'Arch Linux 喜欢',
  '不要吃月亮',
  '来自江西吉安',
  'Catch Our Dream!^_^👋',
  '心里有火，眼里有光',
  'Mystery of Love',
  '命里有时终须有，命里无时某强求',
  '一切皆有命数',
  '喜欢狮子座',
  '勇敢做自己',
  '接单中...',
  '《我怀念的》',
  '梦想 + 未来 = 无限大',
  '闪闪发光心动不已',
  '理想遨游在蓝色的天空',
]

// 对 texts 数组中的每个元素添加星号前缀
texts = texts.map((text) => '⭐' + text)

// 随机排序 texts 数组
texts.sort(function () {
  return Math.random() - 0.5
})

let vAppear = 5
if (window.innerWidth > 500) {
  vAppear = 7
}

if(window.innerWidth > 700){
    texts = texts.concat(texts)
}

if (window.innerWidth > 1200) {
  vAppear = 9
  texts = texts.concat(texts)
}

// 获取容器元素
let container = document.querySelector('.container')
let windowHeight = window.innerHeight
let lever = Math.floor((windowHeight * 1) / 50)
let z = 0

// 定义一个函数，生成指定范围内的随机数（不重复）
function randomUnique(lever) {
  var numbers = []

  // 将数字从 0 到 lever 添加到数组中
  for (var i = 0; i < lever; i++) {
    numbers.push(i)
  }

  // 打乱数组顺序
  numbers.sort(() => {
    return Math.random() - 0.5
  })

  var index = 0

  // 返回不重复的随机数
  function getRandom() {
    if (index >= numbers.length) {
      index = 0
    }

    return numbers[index++]
  }

  return getRandom
}

// 创建 randomUnique 函数的实例
let getRandom = randomUnique(lever)

// 创建一个文档片段，用于批量添加元素
let fragment = document.createDocumentFragment()

// 遍历 texts 数组
texts.forEach(function (text, index) {
  // 创建一个 p 元素并设置内容
  let p = document.createElement('p')
  p.textContent = text
  p.className = 'text'
  p.style.height = '50px'

  // 根据 lever 获取一个不重复的随机数，并计算 bottom 属性值
  let randomLever = getRandom()
  let bottom = randomLever * 50
  p.style.bottom = bottom + 'px'

  // 根据索引计算动画延迟时间和动画时长
  let delay = (index / vAppear) * 2
  let t = screen.width / 60

  // 设置动画属性
  p.style.animation = `move ${t}s infinite cubic-bezier(0.4, 0, 1, 1)`
  p.style.animationDelay = delay + 's'
  p.style.zIndex = z++

  // 将 p 元素添加到文档片段中
  fragment.appendChild(p)
})

// 将文档片段中的元素一次性添加到容器中
container.appendChild(fragment)
