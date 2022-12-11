
from input_reader import InputReader

def main():
    # data = InputReader.get_command_line_input()
    data = InputReader.get_puzzle_input(False, False)

    testString = ""
    startIndex = 0
    for char in data[0]:
        index = testString.find(char)
        if index >= 0:
            testString = testString[index + 1:] + char
            startIndex += index + 1
            print(startIndex, char, index, testString)
        else:
            testString += char

        print(testString)
        if len(testString) == 14:
            break

    print(startIndex + 14)

main()