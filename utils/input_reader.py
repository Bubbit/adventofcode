import sys

class InputReader:
    @staticmethod
    def get_puzzle_input(is_raw):
        return [line.strip("\n") if is_raw else line.strip() for line in open(f"./input.in", "r").readlines()]

    @staticmethod
    def get_command_line_input():
        return sys.argv
