var titleCase  = function(input) {
    var lower_case = input.toLowerCase();
    var word_array = lower_case.split(' ');
    var output= [];
    var exceptions = ["of", "the", "in", "a", "and", "an", "at", "to", "on"];
    // word_array.forEach(function(word) {
    //     //IF(it's the first or last word)
    //     // output.push(word.charAt(0).toUpperCase() + word.slice(1));
    //     //else if...
    //
    //     if ($.inArray(word, exceptions) != -1) {
    //         output.push(word.charAt(0) + word.slice(1));
    //     }
    //     else {
    //     output.push(word.charAt(0).toUpperCase() + word.slice(1));
    //         }
    // });
    console.log(word_array[0]);
    output.push(word_array[0].charAt(0).toUpperCase() + word_array[0].slice(1));


    for (var i=1; i < word_array.length; i++){
        //FIRST AND LAST WORDS
        if (word_array[i] === 0 || word_array[i] === word_array.length + 1){
        output.push(word_array[i].charAt(0).toUpperCase() + word_array[i].slice(1));
            }
        //EXCEPTIONS
        else if ($.inArray(word_array[i], exceptions) != -1){
            output.push(word_array[i]);
        }
        //PUSH ANYTHING ELSE
        else {
            output.push(word_array[i].charAt(0).toUpperCase() + word_array[i].slice(1));
        }
    }
    // var last = word_array.length;
    // var last_word = last.charAt(0).toUpperCase() + word_array[last].slice(1));
    // output.push(last_word);

    var final_output = output.join(' ');
    return final_output;


};

// STRIP PUNCTUATION
    // var s = "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation";
    // var punctuationless = s.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    // var finalString = punctuationless.replace(/\s{2,}/g," ");


// for (var i=0; i < word_array.length; i++){
//     //FIRST AND LAST WORDS
//     if (word_array[i] === 0 || word_array[i] === word_array.length + 1){
//     output.push(word_array[i].charAt(0).toUpperCase() + word_array[i].slice(1));
//         }
//     //EXCEPTIONS
//     else if ($.inArray(word_array[i], exceptions) != -1){
//         output.push(word_array[i].charAt(0).toUpperCase() + word_array[i].slice(1));
//     }
//     //PUSH ANYTHING ELSE
//     else {
//         output.push(word_array[i]);
//     }
// }
