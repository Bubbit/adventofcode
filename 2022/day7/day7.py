
from input_reader import InputReader

# { dir: a, size: 0 }

def main():
    # data = InputReader.get_command_line_input()
    data = InputReader.get_puzzle_input(False, False)

    dirs = {}
    current_dir = ''
    parent_dirs = []
    lsing = False
    for command in data:
        if lsing:
            if "$" in command:
                lsing = False
            elif "dir" in command:
                continue
            else:
                size = command.split(" ")[0]
                dirs[current_dir] += int(size)
                for parent in parent_dirs:
                    dirs[parent] += int(size)

        if "$ cd" in command:
            dirName = command.split('cd ')[1]
            if dirName != '..':
                if current_dir != '':
                    parent_dirs.append(current_dir)
                current_dir = ''.join(parent_dirs) + dirName
                dirs[current_dir] = 0
            else:
                current_dir = parent_dirs.pop()

        elif "$ ls" in command:
            lsing = True
            

    score = 0
    for dir in dirs:
        if dirs[dir] < 100000:
            score += dirs[dir]

    print(score)

    freeSpace = 70000000 - dirs['/']
    diffNeeded = 30000000 - freeSpace
    foundDir = 70000000
    for dir in dirs:
        if dirs[dir] >= diffNeeded:
            if dirs[dir] < foundDir:
                foundDir = dirs[dir]

    print(foundDir)

main()