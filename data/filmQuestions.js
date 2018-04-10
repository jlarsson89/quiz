
// WHEN CREATING QUESTIONS AND ANSWERS ...
// The correct answer must be the first choice (keepin' it simple).
// Choices will be presented in random order.
// points is optional, defaults to 10 if not specified.
var mathQuestions = [{
    question: "What actor won an Oscar posthumously for Network?",
    choices: [
        'Peter Finch',
        'John Cazale',
        'Burt Reynolds',
        'John Travolta',
		'Judy Garland'
    ]
},{
    question: "What colour were the slippers in the original Wizard of Oz?",
    choices: [
        'Silver',
        'Ruby',
        'Golden',
        'Emerald',
		'Opal'
    ]
},{
    question: "In the movie Star Wars, what is the Emperors last name?",
    choices: [
        'Palpatine',
        'Skywalker',
        'Hutt',
        'Binks',
		'Kenobi'
    ]
},{
    question: "What film was the first sequel to win the best picture award?",
    choices: [
        'The Godfather II',
        'Return of The King',
        'Terminator II',
        'Back to the Future II',
		'The Dark Knight'
    ]
},{
    question: "In the Terminator, Sarah Conner was played by who?",
    choices: [
        'Linda Hamilton',
        'Leslie Gearren',
        'Sandra Bullock',
        'Sharon Stone',
		'Jodie Foster'
    ]
},{
    question: "Excluding “the”, which word appears the most often in Bond film titles?",
    choices: [
        'Never',
        'Royale',
        '007',
        'Die',
		'Golden'
    ]
},{
    question: "The first movie given the title “Blockbuster” was which movie?",
    choices: [
        'Jaws',
        'The Godfather',
        'Scarface',
        'Indiana Jones - Raiders of the Lot Ark',
		'Ghostbusters'
    ]
},{
    question: "What was Clint Eastwood’s first film, made in 1955?",
    choices: [
        'Francis in the Navy',
        'Revenge of the Creature',
        'Lady Godiva of Coventry',
        'Tarantula',
		'A Fistful of Dollars'
    ]
},{
    question: " In 1995, what was Pierce Brosnan’s first James Bond movie?",
    choices: [
        'Goldeneye',
        'Tomorrow Never Dies',
        'The World Is Not Enough',
        'Die Another Day',
		'Licence to Kill'
    ]
},{
	question: "In “The Left Handed Gun” Paul Newman played who?",
	choices: [
		'Billy the Kid',
		'Pat Garrett',
		'Moultrie',
		'Tom Folliard',
		'McSween'
	]
}];

if (typeof module == 'object') {
    module.exports = mathQuestions;    
}
