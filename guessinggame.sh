#!/usr/bin/env bash
# File: guessinggame.sh

response=0
b=$(ls | wc -l)
function guess {
	if [[ $1 -eq $2 ]]
	then
	echo "Congratulations! You have guessed correctly, the no. of files in this directory is indeed $b"
	elif [[ $1 -gt $2 ]]
	then
	echo "Your guess is greater than the number of files."
	else
	echo "Your guess is less than the number of files."
	fi
	echo "----------------------------------------------"
}

while [[ $response -ne $b ]]
do
	echo "Guess the number of files in this directory"
	read response
	guess $response $b
done

