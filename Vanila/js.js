// start with choice menu

function menuselect(){

if(document.getElementById('selectid').value == "0") {
    document.getElementById('all').style.visibility="visible";
	document.getElementById('all').style.display = "block";

	document.getElementById('meal_type').style.visibility="hidden";
	document.getElementById('meal_type').style.display = "none";
	document.getElementById('cooking_style').style.visibility="hidden";
	document.getElementById('cooking_style').style.display = "none";
	document.getElementById('world_cuisine').style.visibility="hidden";
	document.getElementById('world_cuisine').style.display = "none";		
	document.getElementById('ingridients').style.visibility="hidden";
	document.getElementById('ingridients').style.display = "none";	
}
if(document.getElementById('selectid').value == "1") {
    document.getElementById('meal_type').style.visibility="visible";
	document.getElementById('meal_type').style.display = "block";

	document.getElementById('all').style.visibility="hidden";
	document.getElementById('all').style.display = "none";
	document.getElementById('cooking_style').style.visibility="hidden";
	document.getElementById('cooking_style').style.display = "none";
	document.getElementById('world_cuisine').style.visibility="hidden";
	document.getElementById('world_cuisine').style.display = "none";		
	document.getElementById('ingridients').style.visibility="hidden";
	document.getElementById('ingridients').style.display = "none";	
}
if(document.getElementById('selectid').value == "2") {
    document.getElementById('ingridients').style.visibility="visible";
	document.getElementById('ingridients').style.display = "block";

	document.getElementById('meal_type').style.visibility="hidden";
	document.getElementById('meal_type').style.display = "none";
	document.getElementById('cooking_style').style.visibility="hidden";
	document.getElementById('cooking_style').style.display = "none";
	document.getElementById('world_cuisine').style.visibility="hidden";
	document.getElementById('world_cuisine').style.display = "none";		
	document.getElementById('all').style.visibility="hidden";
	document.getElementById('all').style.display = "none";	
}
if(document.getElementById('selectid').value == "3") {
    document.getElementById('world_cuisine').style.visibility="visible";
	document.getElementById('world_cuisine').style.display = "block";

	document.getElementById('meal_type').style.visibility="hidden";
	document.getElementById('meal_type').style.display = "none";
	document.getElementById('cooking_style').style.visibility="hidden";
	document.getElementById('cooking_style').style.display = "none";
	document.getElementById('all').style.visibility="hidden";
	document.getElementById('all').style.display = "none";		
	document.getElementById('ingridients').style.visibility="hidden";
	document.getElementById('ingridients').style.display = "none";	
}
if(document.getElementById('selectid').value == "4") {
    document.getElementById('cooking_style').style.visibility="visible";
	document.getElementById('cooking_style').style.display = "block";

	document.getElementById('meal_type').style.visibility="hidden";
	document.getElementById('meal_type').style.display = "none";
	document.getElementById('all').style.visibility="hidden";
	document.getElementById('all').style.display = "none";
	document.getElementById('world_cuisine').style.visibility="hidden";
	document.getElementById('world_cuisine').style.display = "none";		
	document.getElementById('ingridients').style.visibility="hidden";
	document.getElementById('ingridients').style.display = "none";	
}
}

// End of choice menu


