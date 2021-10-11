import Calculator from "./App"

console.log("项目入口")
if(module.hot) {
    module.hot.accept(error => {
        if(error) {
            console.log("热替换出错")
        }
    })
}