exports.createResult = function(success, data) {
    var result = {};
    result.success = success;
    result.data = data;
    if(!!success){
        result.status = 0 ;
    }else{
        result.status = 300;
    }
    return result;
};