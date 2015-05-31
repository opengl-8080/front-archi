define(function(require) {
    var $ = require('jquery');
    
    function UserService() {
        this.register = function(user) {
            return $.ajax({
                url: '/fa/api/user',
                type: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(user)
            });
        };
    }
    
    return new UserService();
});
