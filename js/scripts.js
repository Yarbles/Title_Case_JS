var titleCase  = function(input) {
    var lower_case = input.toLowerCase();
    var word_array = lower_case.split(' ');
    var output= [];
    var exceptions = ["of", "the", "in", "a", "and", "an", "at", "to", "on"];
    word_array.forEach(function(word) {
        if ($.inArray(word, exceptions) != -1) {
            output.push(word.charAt(0) + word.slice(1));
        } else {
        output.push(word.charAt(0).toUpperCase() + word.slice(1));
            }
    });
    var final_output = output.join(' ');
    return final_output;



};

// var exceptions = ['of','and', 'if','for', 'the'];
// var filter_function = function (x, idx) {
//    // document.writeln('['+idx+'] = '+x);
//    word_array.forEach(function(word) {
//        if (word === x) {
//            output.push(word.charAt(0) + word.slice(1));
//        } else {
//        output.push(word.charAt(0).toUpperCase() + word.slice(1));
//            }
//    });
//    exceptions.forEach(filter_function);
//
// }
