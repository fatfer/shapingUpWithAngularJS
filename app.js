(function(){
	var app = angular.module('gemStore',[]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{
			name: 'Azurite',
		    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
		    shine: 8,
		    price: 110.50,
		    rarity: 7,
		    color: '#CCC',
		    faces: 14,
		    images: [
		      "images/gem-02.gif",
		      "images/gem-05.gif",
		      "images/gem-09.gif"
		    ]
		},
		{
			name: 'Bloodstone',
			description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
			shine: 9,
			price: 22.90,
			rarity: 6,
			color: '#EEE',
			faces: 12,
			images: [
				"images/gem-01.gif",
			    "images/gem-03.gif",
			    "images/gem-04.gif"
			]
		}
	];

})();