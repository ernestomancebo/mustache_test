var PRICE_RANGE = {
	CHEAP: "Cheap",
	MODERATE: "Moderate",
	EXPENSIVE: "Expensive",
	LUXURY: "Luxury"
};

var venue = {
	"name": "Fatty McFat Pizza",
	"location": [50.0, 45.0],
	"tags": ["pizza", "fast food"],
	"price_range": PRICE_RANGE.CHEAP,
	"locationParser": function() {
		if (this.location.length == 2)
			return "[ " + this.location[0] + ", " + this.location[1] + " ]";
		else
			return "invalid location array!!";
	}
};