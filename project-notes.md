Combo maker  
L  
- jab  
- body jab  
- hook  
- body hook  
- lead upper  
- lead elbow  
- slip  
- reset  
- switch kick  
- teep  
- switch knee  
R  
- cross  
- body cross  
- overhand  
- rear body hook  
- rear upper  
- rear elbow  
- slip  
- reset  
- kick  
- rear teep  
- rear knee  
LR or RL  
- roll


The only move that can double up is the jab. Other moves need at least a reset before they repeat.

Can only slip after certain strikes.  
Can only roll after certain strikes.

After a step-out, you can start up with either L or R.

I think almost anything can come after a teep


## To do

- account for spacing differences
    - You need to step in before elbows and knees and step out before regular strikes. Some can go either way, like you can step before a hook, or not. Stepping after kicks is easiest.
    - Track distance separately? And use a second matrix? Or just tack on additional rules \- that's easier. List the moves that cannot be done at x or y distance. Make it all optional.  
    - Step in and step out cannot come after or before reset.  
- block certain moves from starting the combo
- block certain moves from ending the combo
- account for sided resets - you don't want a reset and then a move on the alternate side.
- limit the consecutive jabs and body jabs to 2
* Optional rule to eliminate resets. If you turn this off and turn off spacing management, you'll have continual combos  
* Turn off slips too and you'll have continual striking
- A later implementation can store probability information instead of booleans. So instead of checking "true" it checks "is my randomly generated value greater than the registered probability value".

