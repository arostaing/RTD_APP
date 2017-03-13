module.exports = {
  template: require('./questions.html'),
  controller: function ($http, $log) {
    this.callDone = false;
    this.update = function (user) {
      var data = {name: user.name, email: user.email, technical: user.technical};
      $http.post('http://localhost:3030/api/users', data).then(function () {
        $log.info('OK');
        this.callDone = true;
      }, function () {
        $log.info('KO');
      });
    };
  }
};
