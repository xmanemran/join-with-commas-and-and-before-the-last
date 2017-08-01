module.exports = {
	separate: function(items, beforeLast = "&"){
		return items.length > 2 ? items.join(", ").split(" ").map((value, index)=> index == items.length-2 ? value.replace(",", " " + beforeLast) : value ).join(" ") : items.join(" "+ beforeLast +" ");
	} 
}