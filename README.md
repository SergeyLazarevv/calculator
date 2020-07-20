# calculator
test task

Реализация калькулятора на стеке js/php, стили scss, сборка webpack.
На стороне клиента выполняется составление выражения, данные хранятся в виде строки и выводятся на экран калькулятора. 
После нажатия на "=" c помощью fetch выполняется асинхронный POST запрос, данные отправляются на сервер.
Для реализации кросдоменных запросов использовалось API herokuapp.com. 
На стороне сервера происходит вычисление выражения в несколько шагов:
- строка разбирается на два массива - чисел и операторов.
- поочередно выполняюся циклы деления,умножения,вычитания и сложения.
- перед выполнением цикла переменной присваивается индекс необходимого математического оператора.
- в цикле из массива чисел удаляются числа до и после оператора с заменой результатом выражения.
- удаляется текущий оператор из массива операторов.
- далее проверяется наличие аналогичного оператора в массиве операторов, если такой есть операция повторяется.
- в завершении в массиве чисел остается одно число которое является результатом всего выражения.
- само выражение и результат вычислений записываются в file.txt
- результат возвращается и присваиватся как содержимое дисплея калькулятора.
Rалькулятор опубликован на github pages https://sergeylazarevv.github.io/calculator/
Backend разместил на хостинге Fornex.
