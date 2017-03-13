module.exports = {
  template: require('./messages.html'),
  controller: function () {
    var io = require('socket.io-client')('http://localhost:9001', {reconnect: true});
    var socket = io.connect();
    this.haveTheName = false;
    this.message = null;
    this.myName = null;
    this.chooseName = function (name) {
      this.myName = name;
      this.haveTheName = true;
    };
    this.sendMessage = function () {
      var dataToSend = {user: this.myName, message: this.message};
      socket.emit('messages', dataToSend);
      this.message = null;
    };
  }
};
