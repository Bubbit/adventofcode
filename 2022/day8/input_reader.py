import sys

class InputReader:
    @staticmethod
    def get_puzzle_input(is_raw, is_test):
        if is_test:
            file = f"./test_input.in"
        else:
            file = f"./input.in"
        return [line.strip("\n") if is_raw else line.strip() for line in open(file, "r").readlines()]

    @staticmethod
    def get_command_line_input():
        return sys.argv[1:]
