function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function formatImgUrl(path) {
  if (!/^https?/.test(path) && !/^\/\//.test(path)) {
    // 这里暂时是固定的url地址，但是以后小程序云可能会变（——heyli）
    let fileName = path.split('/').slice(-1)[0]
    path = `https://dreamland-6e1ecf-1256746843.cos.ap-shanghai.myqcloud.com/scene/${fileName}`
  }
  return path
}

module.exports = {
  formatTime: formatTime,
  formatImgUrl: formatImgUrl
}
