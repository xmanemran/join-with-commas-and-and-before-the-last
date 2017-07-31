module.exports = {
	separate: function(items){
		return items.length > 2 ? items.join(", ").split(" ").map((value, index)=> index == items.length-2 ? value.replace(",", " &") : value ).join(" ") : items.join(" & ");
	} 
}