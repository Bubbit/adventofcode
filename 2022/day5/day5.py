
from input_reader import InputReader
import math

def move(amount, source, target, stacks):
    newStack = stacks[source - 1][:amount] + stacks[target - 1]

    stacks[target - 1] = newStack
    for i in range(0, amount):
        stacks[source - 1].pop(0)

    return stacks

def main():
    # data = InputReader.get_command_line_input()
    data = InputReader.get_puzzle_input(True)
    stacks = []

    amountOfStacks = math.ceil(len(data[0]) / 4)

    for i in range(0, amountOfStacks):
        stacks.append([])

    fillingStacks = True
    for row in data:
        if row == "":
            fillingStacks = False
            for stack in stacks:
                stack.pop()
            continue

        if fillingStacks:
            stackNr = 0
            count = 0
            for field in row:
                count += 1
                if count == 4:
                    count = 0
                    stackNr += 1
                elif count == 2 and field != " ":
                    stacks[stackNr].append(field)

        else:
            command = row.split(" ")
            stacks = move(int(command[1]), int(command[3]), int(command[5]), stacks)
    
    
    resultOne = ""
    for stack in stacks:
        resultOne += stack[0]
    print(resultOne)

main()