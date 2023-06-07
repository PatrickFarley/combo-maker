import random

comboLength = length = int(input("Length of the combination: ") or 5)

def generate_combination(moves, rules):
    combination = []
    prev_move = None
    while len(combination) < comboLength:
        move = random.choice(moves)
        if prev_move is None:
            combination.append(move)
            prev_move = move
        if prev_move is not None and rules[moves.index(prev_move)][moves.index(move)]:
            combination.append(move)
            prev_move = move

    
    return combination

# List of martial arts moves
moves = [
    'jab',
    'body jab',
    'hook',
    'body hook',
    'lead uppercut',
    'lead elbow',
    'slipL',
    'resetL',
    'switch kick',
    'teep',
    'switch knee',
    'cross',
    'body cross',
    'overhand',
    'rear body hook',
    'rear uppercut',
    'rear elbow',
    'slipR',
    'resetR',
    'rear kick',
    'rear teep',
    'rear knee',
    'roll'
]

# Move rules as a list of lists
# List of martial arts moves
moves = [
    'jab', 'body jab', 'hook', 'body hook', 'lead uppercut', 'lead elbow', 'slipL',
    'reset', 'switch kick', 'teep', 'switch knee', 'cross', 'body cross', 'overhand',
    'rear body hook', 'rear uppercut', 'rear elbow', 'slipR', 'rear kick',
    'rear teep', 'rear knee'
]

# Move rules as a list of lists. Each row represents a move, the booleans in each combo say which moves _can follow_.
rules = [
    # jab   bod-jab hook    body-hk  lead-up  lead-el  slipL   reset   sw-k   teep   sw-kn  cross  bodCrs  overh  r-bod-hk r-up  rr-el slipR  r-k    r-teep r-kn 
    [True , True ,  False,  False,   False,   False,   True ,  True ,  False, False, False, True,  True,   True,  True,    True, True, False, True,  True,  True],
    [True , True ,  False,  False,   False,   False,   True ,  True ,  False, False, False, True,  True,   True,  True,    True, True, False, True,  True,  True],
    [False, False,  False,  False,   False,   False,   True ,  True ,  False, False, False, True,  True,   True,  True,    True, True, False, True,  True,  True],
    [False, False,  False,  False,   False,   False,   True ,  True ,  False, False, False, True,  True,   True,  True,    True, True, False, True,  True,  True],
    [False, False,  False,  False,   False,   False,   True ,  True ,  False, False, False, True,  True,   True,  True,    True, True, False, True,  True,  True],
    [False, False,  False,  False,   False,   False,   True ,  True ,  False, False, False, True,  True,   True,  True,    True, True, False, True,  True,  True],
    # slip left
    [True , True ,  True,   True,    True,    True,    False , False,  True,  False, True , False, False,  False, False,   False,False,False, False, False, False],
    # reset
    [True , True ,  True,   True,    True,    True,    False , False,  True,  True , True , True , True ,  True , True ,   True ,True ,False, True , True , True ],
    # switch kick
    [False, False,  False,  False,   False,   False,   True ,  True ,  False, False, False, True,  True,   True,  True,    False,True, False, False, True,  False],
    # teep
    [False, False,  False,  False,   False,   False,   True ,  True ,  False, False, False, True,  True,   True,  True,    True, True, False, False, False, False],
    [False, False,  False,  False,   False,   False,   True ,  True ,  False, False, False, True,  True,   True,  True,    False,True, False, False, True,  False],
    # cross
    [False, False,  True,   True,    True,    True,    False , True,   True,  True,  True , False, False,  False, False,   False,False,True,  False, False, False],
    [False, False,  True,   True,    True,    True,    False , True,   True,  True,  True , False, False,  False, False,   False,False,True,  False, False, False],
    # overhand
    [False, False,  True,   True,    True,    True,    False , True,   True,  True,  True , False, False,  False, False,   False,False,True,  False, False, False],
    [False, False,  True,   True,    True,    True,    False , True,   True,  True,  True , False, False,  False, False,   False,False,True,  False, False, False],
    [False, False,  True,   True,    True,    True,    False , True,   True,  True,  True , False, False,  False, False,   False,False,True,  False, False, False],
    [False, False,  True,   True,    True,    True,    False , True,   True,  True,  True , False, False,  False, False,   False,False,True,  False, False, False],
    # slip right
    [False, False,  False,  False,   False,   False,   False,  False,  False, False,  False, True, True,   True,  True,    True, True, False, True,  False, True],
    # rear kick
    [True,  True,   True,   True,    False,   True,    False,  True ,  False, True,   False, False, False, False, False,   False,False,True,  False, False, False],
    # rear teep
    [True,  True,   True,   True,    True,    True,    False,  True ,  False, False,  False, False, False, False, False,   False,False,True,  False, False, False],
    [True,  True,   True,   True,    False,   True,    False,  True ,  False, True ,  False, False, False, False, False,   False,False,True,  False, False, False]
]

# Generate a combination of moves
combination = generate_combination(moves, rules)

# Print the combination
for move in combination:
    print(move)