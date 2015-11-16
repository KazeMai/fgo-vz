function findPosition(indx) {
	/* This function is based on code obtained from:
	http://www.softcomplex.com/docs/
	get_window_size_and_scrollbar_position.html	*/

	var dir = {
		'clientWidth' : 'innerWidth',
		'clientHeight' : 'innerHeight',
		'scrollLeft' : 'pageXOffset',
		'scrollTop' : 'pageYOffset'
	};

	var qarr = [
		window[dir[indx]] ? window[dir[indx]] : 0,
		document.documentElement ? document.documentElement[indx] : 0,
		document.body ? document.body[indx] : 0
	];

	qarr.sort(function(a, b) {return a - b});
	while(qarr[0] == 0) { qarr.shift() }
	return qarr.length ? qarr[0] : 0;
}

function showFootnote(evnt) {
	var e = window.event ? window.event : evnt;
	var obj = window.event ? window.event.srcElement : evnt.target;

	// Is this link a ref tag
	if(obj.tagName != "A") return;
	if(!obj.hash) return;
	if(obj.hash.substr(0,11) != "#cite_note-") return;
	if(obj.parentNode.className != "reference") return;

	// Is there a footnote to display?
	// Someone may have forgotten the <references/> tag
	var footnote_id = obj.hash.substr(1);
	if(!document.getElementById(footnote_id)) return;

	// Good, hide the popup, if it isn't already hidden
	if(footnote.style.visibility != "hidden") { resetFootnote() }

	// Fetch the footnote text and remove the unnecessary back link(s)
	// This is a little messy as there's no containing tags
	var fn_text = document.getElementById(footnote_id).innerHTML;
	fn_text = fn_text.replace(/^.*<a[^>]*href="#cite_ref-.*?<\/a> */i, ""); // "

	// Insert the footnote text
	footnote.innerHTML = fn_text;

	// Decide where to put the popup
	var window_width = findPosition('clientWidth');
	var window_height = findPosition('clientHeight');

	var horizontal_position = e.clientX;
	var vertical_position = e.clientY;

	var horizontal = findPosition('scrollLeft') + horizontal_position;
	var vertical = findPosition('scrollTop') + vertical_position;

	var footnote_width = footnote.offsetWidth;
	var footnote_height = footnote.offsetHeight;

	if(window_height - vertical_position < footnote_height) {
		footnote.style.top = "";
		footnote.style.bottom = (window_height - vertical - 13) + "px";
	} else {
		footnote.style.top = (vertical - 13) + "px";
		footnote.style.bottom = "";
	}

	if(window_width - horizontal_position > footnote_width) {
		footnote.style.left = (horizontal - 13) + "px";
		footnote.style.right = "";
	} else {
		footnote.style.left = "";
		footnote.style.right = (window_width - horizontal - 13) + "px";
	} 

	//Make the popup visible
	footnote.style.visibility = "visible";
}

function hideFootnote(evnt) {
	var obj = window.event ? window.event.srcElement : evnt.target;

	// No point in going on if popup is already hidden
	if(footnote.style.visibility == "hidden") return;

	// Search the tree to see where the curser is
	var depth = 0; // no need to search too much
	while(obj && obj.parentNode && depth < 5) {	
		if(obj.id == "footnote" || obj.id.substr(0, 9) == "cite_ref-") { return; }
		obj = obj.parentNode;
		depth++;
	}
	
	resetFootnote();
}

function resetFootnote() {
	footnote.style.visibility = "hidden";
	footnote.style.left = 0;
	footnote.style.top = 0;
	footnote.style.right = "auto";
	footnote.style.bottom = "auto";
}

// Set up the float element
var footnote = document.createElement("DIV");
footnote.id = "footnote";
footnote.style.position = "absolute";
footnote.style.zIndex = 500;
footnote.style.border = "1px solid black";
footnote.style.backgroundColor = "lightyellow";
footnote.style.maxWidth = "450px";
footnote.style.textAlign = "justify";
footnote.style.padding = "5px";
footnote.style.fontSize = "10pt";
resetFootnote();

document.body.appendChild(footnote);

// Add events
addHandler(document, "mouseover", showFootnote);
addHandler(document, "mousemove", hideFootnote);