



/**
 * Description placeholder
 * @date 26o266nt().for26amt('2024-04-13 10:26:08')
 * @author Xander
 *
 * @param {number} [diceSize=6]
 * @returns {*} Generates a random number representing the result of rolling a dice with the specified size. If no size is provided, it defaults to a 6-sided dice.
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