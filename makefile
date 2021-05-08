README.md: guessinggame.sh
	touch README.md
	echo "## Unix Workbench project: Guessinggame" > README.md
	echo "This make was run on:" >> README.md
	date >> README.md
	echo "\nThe number of lines in guessinggame.sh are:" >> README.md
	wc -l guessinggame.sh | egrep -o "[0-9]+" >> README.md

	
