


/**
 * Generate a random number between 1 and a given size.
 *
 * @param [diceSize=6] - Number representing the size of the dice you want to roll.
 * @returns A random number between 1 and the given size.
 */
function rollDice(diceSize = 6){
	let rollResult = Math.floor(Math.random() * diceSize) + 1;

	return rollResult;
}


/**
 * Generate a random number between 1 and a given size twice, and identifying the highest number.
 *
 * @param [diceSize=6]
 * @returns a random number between 1 and a given size twice, and identifying the highest number.
 */
function rollDiceWithAdvantage(diceSize = 6){
    let result = {
        finalResult: null,
        rolls: []
    }

    result.rolls = [
        rollDice(diceSize),
        rollDice(diceSize)
    ]

    result.finalResult = Math.max(...result.rolls);

    return result;
}

/**
 * Generate a random number between 1 and a given size twice, and identifying the smallest number.
 *
 * @param [diceSize=6]
 * @returns a random number between 1 and a given size twice, and identifying the smallest number.
 */
function rollDiceWithDisadvantage(diceSize = 6){
    let result = {
        finalResult: null,
        rolls: []
    }

    result.rolls = [
        rollDice(diceSize),
        rollDice(diceSize)
    ]

    result.finalResult = Math.min(...result.rolls);

    return result;
}

module.exports = {
	rollDice,
    rollDiceWithAdvantage,
    rollDiceWithDisadvantage
}