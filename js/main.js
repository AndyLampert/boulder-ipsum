
var items = ['Boulder', 'flatiron', 'bouldering', 'Avery', 'up the canyon', 'Bolder Boulder', 'Bodarging', 'sit on the grass', 'organic', 'GMO-free', 'triathlon', 'marathon', 'ironman', 'pearl street mall', '29th street', 'b2b', 'microbreweries', 'homebrowing', 'b2b home grow', 'indica', 'sativa', 'home grown b2b', 'hybrid', 'percalator', 'carborator', 'carb', 'reiki', 'reiki master', 'naropa', 'dragonfly', 'cosmos', 'abo\'s', 'illegal pete\'s', 'smelly deli', 'buffalos', 'CU Buffs', 'mountain sun', 'the sun', 'the southern sun', 'under the sun', 'conor\'s', 'TechStars', 'Tesla', 'Boulder Baked', 'ncar', 'mount sanitas', 'drive up to Ned', 'tubing', 'canyoning', 'Chautauqua', 'eTown Hall', 'The Fox', 'Boulder Theater', 'dead leaf', 'Naked Pumpkin Run', 'the cruise', 'thursday night cruise', 'banjo billy\'s', 'yoga', 'goss gross', 'the nexus', 'Arapahoe', 'Baseline', 'North Boulder', 'Table Mesa', 'Table Mesa Park N Ride', 'The Diagonal'

];

// have it put a period after a random number of words like that and then capitalize the first letter of the new sentence
noCommaList = items.join(' ');
noCommaList[4];

var dump = $('.dump');

$('.show-results-btn').click(function(){
	paragraphCount = $('#paragraphCount').val();
	var shuffledItems = _.shuffle(items);

	// Math.floor(Math.random() * 5) + 3;
	var shuffledWithComma = shuffledItems.map(function(str, index) {
		if (index % 4 === 0) {
			return str + ', ';
		} else {
			return str + ' ';
		}
	});

	_.times(paragraphCount, function(){
		dump.append(shuffledWithComma);
	})
});
