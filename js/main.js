
var items = ['Boulder', 'flatiron', 'bouldering', 'Avery', 'Bolder Boulder', 'up the canyon', 'Bodarging', 'sit on the grass', 'organic', 'GMO-free', 'triathlon', 'marathon', 'ironman', 'pearl street mall', '29th street', 'b2b', 'microbreweries', 'homebrowing', 'b2b home grow', 'indica', 'sativa', 'home grown b2b', 'hybrid', 'percalator', 'carborator', 'carb', 'reiki', 'reiki master', 'naropa', 'dragonfly', 'cosmos', 'abo\'s', 'illegal pete\'s', 'smelly deli', 'buffalos', 'CU Buffs', 'mountain sun', 'the sun', 'the southern sun', 'under the sun', 'conor\'s', 'Human Design', 'TechStars', 'Tesla', 'Boulder Baked', 'ncar', 'mount sanitas', 'drive up to Ned', 'tubing', 'canyoning', 'Chautauqua', 'eTown Hall', 'The Fox', 'Boulder Theater', 'dead leaf', 'Naked Pumpkin Run', 'the cruise', 'thursday night cruise', 'banjo billy\'s', 'yoga', 'goss gross', 'the nexus', 'Arapahoe', 'Baseline', 'North Boulder', 'Table Mesa', 'Table Mesa Park N Ride', 'The Diagonal'
];

// have it put a period after a random number of words like that and then capitalize the first letter of the new sentence



resultsContainer = $('.results-container');

$('.show-results-btn').click(function(){
	// formattedItems = items.splice(', ');
	// var arr = items.join((', '));
	shuffledItems = _.shuffle(items);
	resultsContainer.append(shuffledItems.join(', '));
	resultsContainer.show();
});



// Get the var items on the page 
// make it show when click show results button
// get shuffle method working in console
// print the shuffled results on page load
// make it show when click show results button

