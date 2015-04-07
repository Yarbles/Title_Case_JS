var titleCase  = function(input) {
    var lower_case = input.toLowerCase();
    var word_array = lower_case.split(' ');
    var output= [];
    word_array.forEach(function(word) {
        output.push(word.charAt(0).toUpperCase() + word.slice(1));
    });
    var final_output = output.join(' ');
    return final_output;



};
