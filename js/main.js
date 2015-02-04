
var items = ['boulder', 'rolfing', 'Liquor Mart', 'The Spot', 'flatiron', 'bouldering', 'Avery', 'up the canyon', 'Bolder Boulder', 'Bodarging', 'sit on the grass', 'organic', 'ganja', '420', 'GMO-free', 'triathlon', 'marathon', 'ironman', 'pearl street mall', '29th street', 'b2b', 'microbreweries', 'homebrowing', 'b2b home grow', 'indica', 'sativa', 'home grown b2b', 'hybrid', 'percalator', 'carborator', 'carb', 'reiki', 'reiki master', 'naropa', 'dragonfly', 'cosmos', 'abo\'s', 'illegal pete\'s', 'smelly deli', 'buffalos', 'CU Buffs', 'mountain sun', 'the sun', 'the southern sun', 'under the sun', 'conor\'s', 'TechStars', 'Tesla', 'Boulder Baked', 'ncar', 'mount sanitas', 'drive up to Ned', 'tubing', 'canyoning', 'Chautauqua', 'eTown Hall', 'The Fox', 'Boulder Theater', 'dead leaf', 'Naked Pumpkin Run', 'the cruise', 'thursday night cruise', 'banjo billy\'s', 'yoga', 'tai chi', 'goss gross', 'the nexus', 'Arapahoe', 'Baseline', 'North Boulder', 'Table Mesa', 'Table Mesa Park N Ride', 'The Diagonal', 'Spartan Race', 'balls to the walls', 'hemp', 'gluten free', 'Snarf\'s', 'bike lanes', 'farmer\'s market', 'Wonderland Lake', 'Coconut oil is amazing'

];

function windowH() {
	var wH = $(window).height();
	$('header').css({height: wH});
}
windowH();

$(window).on('scroll', function(){
	var fromTop = $(document).scrollTop()
	var wH = $(window).height();
	if (fromTop !== 0){
		$('header').css({
			'background-size': 'cover',
			'background-position': 'center',
		}).animate({height: 400 +'px'}, 1000);
		$('header h1').animate({
			'font-size': '10rem',
		}, 1000)
	}
})


// have it put a period after a random number of words like that and then capitalize the first letter of the new sentence
var dump = $('.dump');

// var tempScrollTop = $(window).scrollTop();



$('.show-results-btn').click(function(){


	event.preventDefault();
	// clear the DOM on click
	dump.empty()
	var paragraphCount = $('#paragraphCount').val();

	// Add a comma to all items
	var withComma = items.map(function(str, index) {

		if (index % 4 === 0) {
			return str + ', ';
		} else {
			return str + ' ';
		}
	});
	var firstItem = withComma[0];

	// paragraphCount times, shuffle the 
	_.times(paragraphCount, function(){
		var shuffledWithComma = _.shuffle(withComma);
		var firstLetter = shuffledWithComma[0][0];
		var firstLetterCapped = firstLetter.toUpperCase();
		var allButFirstLength = shuffledWithComma[0].length - 1;
		var allButFirst = shuffledWithComma[0].substr(1, allButFirst);
		shuffledWithComma[0] = firstLetterCapped + allButFirst;
		
		// adds period, but also a space
		// also, there is sometimes a comma, need to ensure that doesn't happen
		shuffledWithComma.push('.');
		// debugger;
		// adding an opening div before the array
		shuffledWithComma.unshift('<div class="dump-item"' + '<br>' + '<br>');
		// adding an opening div after the array
		shuffledWithComma.push('</div>');
		dump.append(shuffledWithComma);
	})
});

// $(window).scrollTop(tempScrollTop);
// var client = new ZeroClipboard( document.getElementById("copy-button") );

// client.on( "ready", function( readyEvent ) {

// 	client.on( "copy", function (event) {
// 	  var clipboard = event.clipboardData;
// 	  clipboard.setData( "text/plain", "Copy me!" );
// 	  clipboard.setData( "text/html", "<b>Copy me!</b>" );
// 	  clipboard.setData( "application/rtf", "{\\rtf1\\ansi\n{\\b Copy me!}}" );
// 	});
// });
