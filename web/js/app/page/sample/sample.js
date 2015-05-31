define(function(require) {
    var $ = require('jquery');
    var validate = require('validate');
    var userService = require('UserService');
    
    var $myForm = $('#myForm'),
        $registerButton = $('#registerButton'),
        $userName = $('#userName'),
        $age = $('#age')
    ;
    
    $myForm.validate({
        rules: {
            userName: validate.rules.userName,
            age: validate.rules.age
        }
    });
    
    $registerButton.on('click', function() {
        var user = {
            userName: $userName.val(),
            age: $age.val()
        };
        
        userService.register(user)
                .done(function(msg) {
                    alert(msg);
                });
    });
});
