// 云函数入口函数
exports.main = (event, context) => {
    console.log("Hello World")
    console.log(event)
    console.log(event["non-exist"])
    console.log(context)
    
    return "Hello World";
}