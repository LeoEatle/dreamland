const appConfig = require('../cloud.config.json')
const app = require('@tencent/tcb-admin-sdk');
// 根据文档，这两项如果是在云函数中可以不填，但是目前还是需要的
// 负责人说一周内搞定
app.init(appConfig)
// secretId: '',
// secretKey: '',
// envName: 'dreamland-6e1ecf',
// mpAppId: 'wx31fdb7fb145c79bf',

// 云函数入口函数
exports.main = async (event, context) => {
    const db = app.database()
    const sceneCollection = db.collection('scene')
    const result = await sceneCollection.get()
    return result
}

// Promise 版本
// exports.main = (event, context) => {
//     const db = app.database()
//     const sceneCollection = db.collection('scene')
//     sceneCollection.get().then(res => {
//         resolve(res)
//     }).catch(err => {
//         console.error(err)
//     })
// }