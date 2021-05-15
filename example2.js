require("./fuck.js");

/*
# 12 1 1 (fib1) (fib2) (root) ((diff))
+>++>+>+

# end loop when diff 0
[
>+
# fF r 1 1 (caught up flag)
# end loop when caught up flag 0
[

# square the root and store next to caught up flag
# fF r 1 1 000
#        ^
<<[->>>+>+<<<<]
>>>>[-<<<<+>>>>]
# fF r 1 1 rP
#           ^
<<[-
# copy the second multoplicant
<<<<[->>>>+>+<<<<<]
>>>>>[-<<<<<+>>>>>]
# fF r 1 1 rP0
#            ^
]
>[-<+>]
# fF r 1 1 P00
#           ^
<<<<<[->>>>>+>+<<<<<<]
>>>>>>[-<<<<<<+>>>>>>]
>+
# fF r 1 1 PF01
#             ^
# if P bigger than F end loop (set second flag to 0)
<<[[-]<<]
# if P is equal to or smaller than F increment r
# after all that clean up then mems to 0

]

]


*/



/*

# multiplication example

++++>+++
<[
-
>[->+>+<<]
>>[-<<+>>]<<<
]
>>.

*/



/*

# initial value setting
# 121 1 (fib1) (fib2) (root) ((diff))
+>++>+>+

# main loop
# do until diff is 0
[

# increment the root until its square is bigger than (fib2) and subtract 1 (catching up with the fib)

# square the number
# current bytes
# 121 1
#     ^
# copy the values like this
# 121 1 1110
#   ^   ^^^
<[->>+>+>+<<<]
# now it's like this
# 120 1 1110
#   ^
# restore the root value
>>>>[-<<<<+>>>>]
# now it's like this
# 121 1 1100
#         ^
# now the multiplication
<<[-
# 121 1 0100
#       ^ 
# now copy the second value around
>[->+>+<<]
# 121 1 0011
#        ^
# restore the second value
>[-<+>]
# 121 1 0101
#         ^
]
# now reset the second parameter
<[-]
# 121 1 0001
#        ^
# the last bit is the result of multiplication
# copying the fib2
<<<<[->>>>+>+<<<<<]
# 101 1 0221
#  ^
# restore the fib2
>>>>[-<<<<+>>>>]
# 121 1 0021
#        ^



]

# main loop
# idx 3
[
# square the first number
# copy the (2) to (3) and (4) and (5)
<[->+>+>+<<<]
# restore and increment (2)
>>>[-<<<+>>>]
# 121 11100
#        ^
<<[
-
>[
->+>+<<
]
]

]

*/

/*

execute brainfuck as if it's native!
++++++>+>+.<<[>[->+>+<<]>[-<+>]>[-<+>]<.<<-]

*/
