var titleCase  = function(input) {
    var word_array = input.split(' ');
    var output= [];
    word_array.forEach(function(word) {
        output.push(word.charAt(0).toUpperCase() + word.slice(1));
    });
    var final_output = output.join(' ');
    return final_output;
};


// for(var i=0; i < input.length; i++){
//     var word = word_array[i];
//     word.charAt[0].toUpperCase() + word.slice(1);
