module.exports = {
  template: require('./hello.html'),
  controller: function () {
    var io = require('socket.io-client')('http://localhost:9001', {reconnect: true});
    var socket = io.connect();
    var previousQuestion;
    this.check1 = null;
    this.check2 = null;
    this.showFirstPage = true;
    this.goAhead = function () {
      this.showFirstPage = false;
    };
    this.selectOption = function (selection) {
      if (selection !== previousQuestion) {
        var dataToSend = {selection: selection, previous: previousQuestion};
        socket.emit('question', dataToSend);
        previousQuestion = selection;
      }
      if (selection === 1) {
        this.check1 = true;
        this.check2 = false;
      }
      if (selection === 2) {
        this.check1 = false;
        this.check2 = true;
      }
    };
  }
};
