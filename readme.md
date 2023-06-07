# Combo maker

This is a Python script that generates unique combinations of strikes and other movements in Muay Thai kickboxing.

As I've been taking Muay Thai lessons, I've noticed that there are patterns to the kinds of combinations the instructors set up for us. Certain strikes typically follow certain other strikes. The fundamental pattern, demonstrated in the [Dutch drill](https://www.youtube.com/watch?v=aVZnAogUyVU&loop=0), is that the body alternates turning left and right on each move. So, in an orthodox stance, a jab (left hand strike, shoulders turn to the right) is often followed by a cross (right hand strike, shoulders turn to the left).

## How it works

I listed the moves I wanted to include in the script, and I filled out a matrix to signify which moves can follow which other moves. The main function picks a move randomly, checks if it is allowed to follow the previous move, adds it to the combination, and repeats. The script can generate combinations of any length.

## To do

- account for spacing differences
- block certain moves from starting the combo
- block certain moves from ending the combo
- account for sided resets - you don't want a reset and then a move on the alternate side.
- limit the consecutive jabs and body jabs to 2