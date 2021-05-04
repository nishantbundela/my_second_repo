#!/usr/bin/env bash
# File: guessinggame.sh

a=0
b=$(ls | wc -l)
while [[ $a -ne $b ]]
do
	echo "Guess the number of files in this directory:"
	read response
	a=$response
	if [[ $a -eq $b ]]
		then
		echo "Congratulations! You have guessed correctly, the no. of files in this directory is indeed $a"
	else
		if [[ $a -lt $b ]]
		then
		echo "Your guess is less than the number of files."
		else
		echo "Your guess is greater than the number of files."
		fi
		echo "Try again!"
	echo "------------------------------------------"
	fi
done

