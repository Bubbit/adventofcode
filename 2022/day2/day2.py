
from input_reader import InputReader

def main():
    # data = InputReader.get_command_line_input()
    data = InputReader.get_puzzle_input(False)
    # print(data)
    score = 0
    for play in data:
        input = play.split(" ")
        print(play)
        if input[0] == 'A' and input[1] == 'X':
            score += 4
        elif input[0] == 'B' and input[1] == 'X':
            score += 1
        elif input[0] == 'C' and input[1] == 'X':
            score += 7
        elif input[0] == 'A' and input[1] == 'Y':
            score += 8
        elif input[0] == 'B' and input[1] == 'Y':
            score += 5
        elif input[0] == 'C' and input[1] == 'Y':
            score += 2
        elif input[0] == 'A' and input[1] == 'Z':
            score += 3
        elif input[0] == 'B' and input[1] == 'Z':
            score += 9
        elif input[0] == 'C' and input[1] == 'Z':
            score += 6

    print(score)

    scoreTwo = 0
    for play in data:
        input = play.split(" ")
        print(play)
        if input[0] == 'A' and input[1] == 'X':
            scoreTwo += 3
        elif input[0] == 'B' and input[1] == 'X':
            scoreTwo += 1
        elif input[0] == 'C' and input[1] == 'X':
            scoreTwo += 2
        elif input[0] == 'A' and input[1] == 'Y':
            scoreTwo += 4
        elif input[0] == 'B' and input[1] == 'Y':
            scoreTwo += 5
        elif input[0] == 'C' and input[1] == 'Y':
            scoreTwo += 6
        elif input[0] == 'A' and input[1] == 'Z':
            scoreTwo += 8
        elif input[0] == 'B' and input[1] == 'Z':
            scoreTwo += 9
        elif input[0] == 'C' and input[1] == 'Z':
            scoreTwo += 7

    print(scoreTwo)
main()