




/**
 * Generate a random number between 1 and a given size
 * @date 2024-04-13 10:54:47
 * @author Xander
 *
 * @param {number} [diceSize=6]
 * @returns {*} Generates a random number representing the result of rolling a dice with a given size. If no size is provided, it defaults to a 6-sided dice.
 */
function rollDice(diceSize = 6){
	let rollResult = Math.floor(Math.random() * diceSize) + 1;

	return rollResult;
}



/**
 * Generate a random number between 1 and a given size twice, and identifying the highest number
 * @date 2024-04-13 10:55:03
 * @author Xander
 *
 * @param {number} [diceSize=6]
 * @returns {{ finalResult: any; rolls: {}; }} A function that simulates rolling two dice with advantage and returns an object containing the final result and the individual dice rolls.
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
 * Generate a random number between 1 and a given size twice, and identifying the smallest number
 * @date 2024-04-13 10:55:29
 * @author Xander
 *
 * @param {number} [diceSize=6]
 * @returns {{ finalResult: any; rolls: {}; }} A function that simulates rolling two dice with disadvantage and returns the result of the lowest roll.
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