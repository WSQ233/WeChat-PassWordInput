Component({
  data: {
    Length: 6,
    Value: '',
    ispassword: false,
    isFocus: true,
  },
  methods: {
    Focus(e) {//将值绑定至Value变量中
      var inputValue = e.detail.value;
      this.setData({
        Value: inputValue
      })
    },
    Tap() {//将光标绑定至隐藏的input中
      this.setData({
        isFocus: true,
      })
    }
  }

})