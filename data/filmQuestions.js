
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
},{
    question: "What is the name of the jury room drama from 1957 and starring Henry Fonda.",
    choices: [
        '12 Angry Men',
        'On The Waterfront',
        'Casablanca',
        'Seven Samurai',
        'A Few Good Men'
    ]
},{
    question: "Which 1990 gangster movie is based on the biography of Henry Hill a small time gangster working his way up the mob hierarchy",
    choices: [
        'Goodfellas',
        'Casino',
        'Scarface',
        'Serpico',
        'Boyz N The Hood'
    ]
},{
    question: "Which British actor has adopted a unique voice or accent for each character he has played?",
    choices: [
        'Gary Oldman',
        'Christian Bale',
        'Hugh Grant',
        'Hugh Laurie',
        'Tom Hiddleston'
    ]
},{
    question: "Which Coen Brothers cult classic film features the principal character hanging out at a bowling alley all the time, but the character never actually bowls?",
    choices: [
        'The Big Lebowski',
        'Fargo',
        'No Country For Old Men',
        'True Grit',
        'The Man Who Wasn\'t There'
    ]
},{
    question: "Which Tom Hanks movie won the Oscar for Best Picture in 1994?",
    choices: [
        'Forrest Gump',
        'Philadelphia',
        'Saving Private Ryan',
        'Toy Story',
        'Cast Away'
    ]
},{
    question: "Who directed the epic historical drama Schindler's List in 1993?",
    choices: [
        'Steven Spielberg',
        'Quentin Tarantino',
        'Coen Brothers',
        'James Cameron',
        'Martin Scorcese'
    ]
},{
    question: "Val Kilmer played Jim Morrison in the 1991 movie about which rock band?",
    choices: [
        'The Doors',
        'The Beatles',
        'The Rolling Stones',
        'Led Zeppelin',
        'Pink Floyd'
    ]
},{
    question: "For which role did Daniel Day-Lewis win his first Oscar?",
    choices: [
        'My Left Foot',
        'In The Name Of The Father',
        'Lincoln',
        'Gangs Of New York',
        'My Beautiful Laundrette'
    ]
},{
    question: "For which film did Martin Scorsese finally win an Oscar for Best Director?",
    choices: [
        'The Departed',
        'Raging Bull',
        'Goodfellas',
        'Gangs Of New York',
        'Taxi Driver'
    ]
},{
    question: "Sean Penn won his second Oscar for Best Actor in 2008, for which film?",
    choices: [
        'Milk',
        'Mystic River',
        '21 Grams',
        'Sweet and Lowdown',
        'She\'s So Lovely'
    ]
},{
    question: "Who was the first person to get nominated for an acting award at the Oscars?",
    choices: [
        'James Dean',
        'Peter Finch',
        'Heath Ledger',
        'Spencer Tracy',
        'Massimo Troisi'
    ]
}];

if (typeof module == 'object') {
    module.exports = mathQuestions;    
}
