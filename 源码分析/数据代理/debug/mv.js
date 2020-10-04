function MVVM(option){
   this.$option = option
   this.data = this.$option.data
//  遍历data 拿值
  let me= this
 Object.keys(data).forEach(ele =>{
    //  添加对值的操作代理
    me.$property(ele)
 })

 
}