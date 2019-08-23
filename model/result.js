exports.createResult = function(success, data, mess) {
    var result = {};
    result.success = success;
    result.data = data;
    if(!!success && !!data){
        result.status = 0 ;
    }
    else{
        result.status = 300;
        if(!!mess){
            result.message = mess;
        }
    }
    return result;
};