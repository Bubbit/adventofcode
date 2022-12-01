
year="2021"
cookie=$(cat session.cookie)
input_prefix="input"
sample_prefix="example"

# Example comes before input alphabetically, so it shows up in front in the program-tester.sh

if [[ "day$1" ]]; then
    if ! [[ -d "$year" ]]; then
        echo "Creating folder for year $year"
        mkdir "$year"
    fi
    cd "$year"

    if ! [[ -d "day$1" ]]; then
	echo "Creating folder for problem day$1"
	mkdir "day$1"
    fi
    cd "day$1"

    # Download input from advent of code
    input_file="${input_prefix}.in"
    if ! [[ -f "$input_file" ]]; then
	echo "Downloading input for problem $1"
	# Don't DDOS! So check if file exists already
	curl "https://adventofcode.com/$year/day/$1/input" --cookie "session=$cookie" > "$input_file"
    fi

    # Add empty file so there are not that many lines when showing input instead
    input_ans_file="${input_prefix}.ans"
    if ! [[ -f "$input_ans_file" ]]; then
	echo "Create empty input answer file"
	touch "$input_ans_file"
    fi

    # Prepare dummy python solution
    solution_file="day$1.py"
    if ! [[ -f "$solution_file" ]]; then
	echo "Create dummy python solution $solution_file"
	cp "../../setup.py" "$solution_file"
    cp "../../utils/input_reader.py" "input_reader.py"
    fi


    # nvim "$solution_file" "${sample_prefix}.in" "${sample_prefix}.ans" -c "norm G$"
else
    echo "Supply some number as first argument to initialize a problem!"
fi