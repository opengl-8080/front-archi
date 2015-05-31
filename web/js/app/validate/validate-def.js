define(function(require) {
    require('jquery.validate');
    require('jquery.validate.jp');
    var _ = require('underscore');
    var $ = require('jquery');
    
    $.validator.addMethod('length', function(value, ele, param) {
        return _.isString(value) && value.length === param;
    }, '{0} 桁で入力してください。');
    
    $.validator.addMethod('halfSizeAlphaNum', function(value) {
        return _.isString(value) && /^[0-9a-zA-Z]*$/.test(value);
    }, '半角英数字で入力してください。');
    
    return {
        rules: {
            userName: {
                required: true,
                maxlength: 20,
                halfSizeAlphaNum: true
            },
            age: {
                required: true,
                number: true,
                min: 0,
                max: 150
            }
        }
    };
});
