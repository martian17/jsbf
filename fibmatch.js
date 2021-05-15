require("./fuck.js");





/*
# 11 1 1 (fib1) (fib2) (root) ((diff))
+>+>+>+
# fF r d
#      ^

# end loop when diff 0
[
    [-] # reset the flag (garbage collection)
    
    # fF r 0
    #      ^
    # advance one step in fibonacci sequence
    <<<[->>>+<<<]
    # 0F r f
    # ^
    >[-<+>>>+<<]
    # F0 r F'
    #  ^
    >>[-<<+>>]
    # FF' r 0
    #       ^

    # first task is the catching up of root to fib2
    # resulting state from this code block will result in output like the following
    ## fF r' 0
    ##       ^


    # fF r 0
    #      ^

    +
    [
        # fF r 1
        #      ^
	-
	<[->+>+>+<<<]
	>[-<+>]>
        # fF r 0 rr
        #        ^
        ## insert multiplication code here
	# fF r 0 P
        #        ^
	<<<[->>+>>+<<<<]
	>>>>[-<<<<+>>>>]<<
        # fF r FP 0
        #      ^
        ## insert the comparison code here
        ## c == 0 iff P>F
	# fF r c
        #      ^
	<+> # increment r
    ]
    <--
    # fF r' 0
    #    ^
    [->+>+>+<<<]
    >>>[-<<<+>>>]<<
    # fF r rr
    #      ^
    ## insert multiplication code here
    # fF r P
    #      ^
    <<[->>>+>+<<<<]
    >>>>[-<<<<+>>>>]<<
    # fF r PF
    #      ^
    ## insert equal comparison code here
    ## c == 0 iff P == F
    # fF r c
    #      ^
]
<<.
*/



