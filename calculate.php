<?php 
    //get data from client
    $json = file_get_contents('php://input');
    //decoding data from jcon
    $expression = json_decode($json);

    //get numbers array from expression
    $numbers = preg_split('/\-|\+|\*|\//', $expression);
    
    //get operators array from expression
    $reg = '/\d/';
    $operators = str_split(preg_replace($reg,'',$expression));
    
    
    //first operation is divide
    $divide = array_search('/', $operators);
    //check all divite sign in array and make a calculation
    //while array has divide sign...
    while ($divide !== false) {
        //make divide operation between numbers near divide sign
        array_splice($numbers, $divide, 2,$numbers[$divide] / $numbers[$divide+1]);
        //remove divide operator from operators array
        array_splice($operators,$divide,1);
        //if array has any divide sign assigment to divide variable new value
        $divide = array_search('/', $operators);
    }
    //the same operation for multiply operator...
    $multiply = array_search('*', $operators);
    while ($multiply !== false) {
        //make miltuply operation between numbers near multiply sign
        array_splice($numbers, $multiply, 2,$numbers[$multiply] * $numbers[$multiply+1]);
        //remove multiply operator from operators array
        array_splice($operators,$multiply,1);
        //if array has any multiply sign assigment to multiply variable new value
        $multiply = array_search('*', $operators);
    } 
    //...for subtract...
    $subtract = array_search('-', $operators);
    while ($subtract !== false) {
        array_splice($numbers, $subtract, 2,$numbers[$subtract] - $numbers[$subtract+1]);
        array_splice($operators,$subtract,1);
        $subtract = array_search('-', $operators);
    }
    $add = array_search('+', $operators);
    while ($add !== false) {
        array_splice($numbers, $add, 2,$numbers[$add] + $numbers[$add+1]);
        array_splice($operators,$add,1);
        $add = array_search('+', $operators);
    }
    //the last number in array is result
    $res = $numbers[0];
    //open or create file
    //add new data in the end of file
    $fp = fopen("file.txt", "a");
    //adding & and @ for separate result from expression and recording from
    //each other
    fwrite($fp, $expression . '=' . $res  . "\n");
    //and close 
    fclose($fp);
    //read and save data from file
    $data = file_get_contents("file.txt");
    //create result array width result and operation history file data
    
    //return result
    
    echo json_encode("$res");
?>