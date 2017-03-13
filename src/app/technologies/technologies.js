module.exports = {
  template: require('./technologies.html'),
  controller: function () {
    var io = require('socket.io-client')('http://localhost:9001', {reconnect: true});
    var socket = io.connect();
    var userId = Math.floor((Math.random() * 6) + 1);
    this.check1 = this.check2 = this.check3 = false;
    this.selectOption = function (option) {
      switch (option) {
        case 1:
          this.check1 = !this.check1;
          break;
        case 2:
          this.check2 = !this.check2;
          break;
        case 3:
          this.check3 = !this.check3;
          break;
        default:
          this.check1 = this.check2 = this.check3 = false;
      }
      var dataToSend = {userId: userId, option1: this.check1, option2: this.check2, option3: this.check3};
      socket.emit('technologies', dataToSend);
    };
  }
};
