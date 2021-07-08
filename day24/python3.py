# Part 1
import sys

puzzle_input = [l.rstrip('\n') for l in sys.stdin.read().split('\n\n')]
active = defaultdict(bool)
for steps in puzzle_input.splitlines():
    print(steps)
    x,y = 0, 0
    while steps:
        if steps[0] in 'ns':
            step = steps[:2]
            steps = steps[2:]
        else:
            step = steps[:1]
            steps = steps[1:]
        x, y = {'nw': (x-1, y-1), 'w': (x-2, y), 'ne': (x+1, y-1),
                'sw': (x-1, y+1), 'e': (x+2, y), 'se': (x+1, y+1)}[step]
    active[x, y] = not active[x, y]
print(sum(active.values()))

# Part 2
for _ in range(100):
    active_new = defaultdict(bool)
    candidates = {p for x, y in active
                  for p in [(x-1, y-1), (x-2, y), (x+1, y-1),
                            (x-1, y+1), (x+2, y), (x+1, y+1), (x, y)]}
    for x, y in candidates:
        neighbors = sum(active[p]
                        for p in [(x-1, y-1), (x-2, y), (x+1, y-1),
                                  (x-1, y+1), (x+2, y), (x+1, y+1)])
        active_new[x, y] = neighbors == 2 or (active[x, y] and neighbors == 1)
    active = active_new
print(sum(active.values()))