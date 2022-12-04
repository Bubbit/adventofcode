
from input_reader import InputReader

def main():
    # data = InputReader.get_command_line_input()
    data = InputReader.get_puzzle_input(False)
    score = 0
    scoreTwo = 0
    for pair in data:
        split = pair.split(",")
        rangeOne = split[0].split('-')
        rangeTwo = split[1].split('-')
        if int(rangeOne[0]) <= int(rangeTwo[0]) <= int(rangeTwo[1]) <= int(rangeOne[1]):
            score += 1
        elif int(rangeTwo[0]) <= int(rangeOne[0]) <= int(rangeOne[1]) <= int(rangeTwo[1]):
            score += 1

        if not (int(rangeOne[1]) < int(rangeTwo[0]) or int(rangeOne[0]) > int(rangeTwo[1])):
            scoreTwo += 1

    print(score)
    print(scoreTwo)

main()