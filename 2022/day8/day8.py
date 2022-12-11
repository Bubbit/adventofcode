
from input_reader import InputReader



def main():
    # data = InputReader.get_command_line_input()
    data = InputReader.get_puzzle_input(False, False)
    tree_grid = []
    visibile_grid = []
    for row in data:
        new_trees = []
        new_vis = []
        for char in row:
            new_trees.append(char)
            new_vis.append(0)
        tree_grid.append(new_trees)
        visibile_grid.append(new_vis)
    
    trees_in_sight = 0
    current_tree = -1
    for i in range(0, len(tree_grid)):
        current_tree = -1
        for j in range(0, len(tree_grid[i])):
            if current_tree < int(tree_grid[i][j]):
                visibile_grid[i][j] += 1
                current_tree = int(tree_grid[i][j])

    current_tree = -1
    for j in range(0, len(tree_grid)):
        current_tree = -1
        for i in range(0, len(tree_grid[i])):
            if current_tree < int(tree_grid[i][j]):
                visibile_grid[i][j] += 1
                current_tree = int(tree_grid[i][j])

    current_tree = -1
    for i in reversed(range(0, len(tree_grid))):
        current_tree = -1
        for j in reversed(range(0, len(tree_grid[i]))):
            if current_tree < int(tree_grid[i][j]):
                visibile_grid[i][j] += 1
                current_tree = int(tree_grid[i][j])

    current_tree = -1
    for j in reversed(range(0, len(tree_grid))):
        current_tree = -1
        for i in reversed(range(0, len(tree_grid[i]))):
            if current_tree < int(tree_grid[i][j]):
                visibile_grid[i][j] += 1
                current_tree = int(tree_grid[i][j])
    
    for row in visibile_grid:
        for tree in row:
            if tree > 0:
                trees_in_sight += 1

    print(trees_in_sight)
    max_score = 0
    for i in range(0, len(tree_grid)):
        for j in range(0, len(tree_grid[i])):
            
            up_score = 0
            down_score = 0
            left_score = 0
            right_score = 0

            for up in reversed(range(0, i)):
                if tree_grid[up][j] < tree_grid[i][j]:
                    up_score += 1
                else:
                    up_score += 1
                    break
            
            for down in range(i + 1, len(tree_grid)):
                if tree_grid[down][j] < tree_grid[i][j]:
                    down_score += 1
                else:
                    down_score += 1
                    break

            for right in range(j + 1, len(tree_grid[i])):
                if tree_grid[i][right] < tree_grid[i][j]:
                    right_score += 1
                else:
                    right_score += 1
                    break

            for left in reversed(range(0, j)):
                if tree_grid[i][left] < tree_grid[i][j]:
                    left_score += 1
                else:
                    left_score += 1
                    break  

            score = right_score * left_score * up_score * down_score
            if score > max_score:
                max_score = score

    print(max_score)

main()