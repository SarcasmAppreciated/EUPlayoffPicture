$(document).ready(function(){
	$(".guideBG").fadeIn("slow");
	$("#checkmark").click(function(){
		$(".guide").fadeOut("slow");		
	});
	
	// Data Source
	var teamRow = [{team:"SK",first:100.00,second:"",third:"",fourth:"",fifth:"",sixth:"",seventh:"",eighth:"",ninth:"",tenth:""},{team:"FNC",first:6.25,second:56.25,third:37.50,fourth:"",fifth:"",sixth:"",seventh:"",eighth:"",ninth:"",tenth:""},
	{team:"H2K",first:6.25,second:56.25,third:37.50,fourth:"",fifth:"",sixth:"",seventh:"",eighth:"",ninth:"",tenth:""},{team:"UOL",first:"",second:"",third:18.75,fourth:43.75,fifth:37.50,sixth:"",seventh:"",eighth:"",ninth:"",tenth:""},
	{team:"GMB",first:"",second:"",third:12.50,fourth:50.00,fifth:37.50,sixth:"",seventh:"",eighth:"",ninth:"",tenth:""},{team:"CW",first:"",second:"",third:"",fourth:"",fifth:12.50,sixth:71.88,seventh:12.50,eighth:3.13,ninth:"",tenth:""},
	{team:"ROC",first:"",second:"",third:"",fourth:"",fifth:"",sixth:34.38,seventh:37.50,eighth:28.13,ninth:"",tenth:""},{team:"EL",first:"",second:"",third:"",fourth:"",fifth:"",sixth:25.00,seventh:50.00,eighth:25.00,ninth:"",tenth:""},
	{team:"GIA",first:"",second:"",third:"",fourth:"",fifth:"",sixth:"",seventh:3.13,eighth:12.50,ninth:53.13,tenth:31.25},{team:"MYM",first:"",second:"",third:"",fourth:"",fifth:"",sixth:"",seventh:3.13,eighth:12.50,ninth:53.13,tenth:31.25}];
	
	var numOfTeams = 10;
	var i;
	for(i = 0; i < numOfTeams; i++) {
		appendTable(i);
	}
	
	colourizeTable();
	
	// Given data, create table rows/columns + titles
	function appendTable(i){
		$("#winrate_table").append("<tr><td>" + teamRow[i].team + "</td><td>" + teamRow[i].first + " </td><td>" + teamRow[i].second + "</td><td>" + teamRow[i].third + "</td><td>"
		+ teamRow[i].fourth + "</td><td>" + teamRow[i].fifth + "</td><td>" + teamRow[i].sixth + "</td><td>" + teamRow[i].seventh + "</td><td>" + teamRow[i].eighth + "</td><td>" +
		teamRow[i].ninth + "</td><td>" + teamRow[i].tenth + "</td></tr>");					
	}
	
	function colourizeTable () {
		$("tr").children("td").each(function () {
			if (this.innerText != "") 
			{
				if(this.innerText >= 80) {
					$(this).css("background-color", "#0099cc");
				}
				else if((this.innerText >= 60) && (this.innerText < 80)) {
					$(this).css("background-color", "#33add7");
				}
				else if((this.innerText >= 40) && (this.innerText < 60)) {
					$(this).css("background-color", "#65c1e1");
				}
				else if((this.innerText >= 20) && (this.innerText < 40)) {
					$(this).css("background-color", "#98d5eb");
				}
				else if((this.innerText > 0)) {
					$(this).css("background-color", "#cae9f5");
				}
			}						
		});				
	}


	// Hover-overs
	var holder;
	var rowIndex;
	$("#winrate_table").delegate('td','mouseover mouseleave', function(e) {
		rowIndex = $(this).parent().index();
		if (e.type == 'mouseover') {
			holder = $(this).index();
			$(this).addClass("hover");
			$(this).prevAll("td").addClass("hover_light");
			$(this).parent("tr").prevAll("tr").each(function(){ 
				$(this).children("td").eq(holder).addClass("hover_light");						
			});
			addTieTable(rowIndex);
		}
		else {
			$(this).removeClass("hover");
			$(this).prevAll("td").removeClass("hover_light");
			$(this).parent("tr").prevAll("tr").each(function(){ 
				$(this).children("td").eq(holder).removeClass("hover_light");						
			});
		}
	});
	
	function addTieTable(teamNum) {
		var teamRecord = "";
		var teamName = "";
		
		if($(".tie_history").length > 0) {
			$(".tie_history").remove();
		}						
							
		switch(teamNum) {
			case 1: // SK
				teamName = "SK GAMING";
				teamRecord = [{place:"1st",solo:87.50,two:12.50,three:"",four:""}];
				break;
			case 2: // FNC
				teamName = "FNATIC"
				teamRecord = [{place:"1st",solo:"",two:6.25,three:"",four:""},{place:"2nd",solo:31.25,two:25.00,three:"",four:""},{place:"3rd",solo:25.00,two:12.50,three:"",four:""}];
				break;
			case 3: // H2K
				teamName = "H2K GAMING"
				teamRecord = [{place:"1st",solo:"",two:6.25,three:"",four:""},{place:"2nd",solo:31.25,two:25.00,three:"",four:""},{place:"3rd",solo:18.75,two:18.75,three:"",four:""}];
				break;
			case 4: // UOL
				teamName = "UNICORNS OF LOVE"
				teamRecord = [{place:"3rd",solo:"",two:18.75,three:"",four:""},{place:"4th",solo:18.75,two:25.00,three:"",four:""},{place:"5th",solo:31.25,two:6.25,three:"",four:""}];
				break;							
			case 5: // GMB
				teamName = "GAMBIT GAMING"
				teamRecord = [{place:"3rd",solo:"",two:12.50,three:"",four:""},{place:"4th",solo:25.00,two:25.00,three:"",four:""},{place:"5th",solo:31.25,two:6.25,three:"",four:""}];
				break;
			case 6: // CW
				teamName = "COPHENHAGEN WOLVES"
				teamRecord = [{place:"5th",solo:"",two:12.50,three:"",four:""},{place:"6th",solo:40.63,two:21.88,three:9.38,four:""},{place:"7th",solo:3.13,two:9.38,three:"",four:""},{place:"8th",solo:3.13,two:"",three:"",four:""}];
				break;
			case 7: // ROC
				teamName = "TEAM ROCCAT"
				teamRecord = [{place:"6th",solo:9.38,two:15.63,three:9.38,four:""},{place:"7th",solo:9.38,two:23.44,three:3.13,four:1.56},{place:"8th",solo:17.19,two:9.38,three:1.56,four:""}];
				break;
			case 8: // EL
				teamName = "ELEMENTS"
				teamRecord = [{place:"6th",solo:3.13,two:12.50,three:9.38,four:""},{place:"7th",solo:18.75,two:26.56,three:3.13,four:1.56},{place:"8th",solo:14.06,two:9.38,three:1.56,four:""}];
				break;
			case 9: // GIA
				teamName = "GIANTS! GAMING"
				teamRecord = [{place:"7th",solo:"",two:"",three:1.56,four:1.56},{place:"8th",solo:"",two:9.38,three:3.13,four:""},{place:"9th",solo:20.31,two:32.81,three:"",four:""},{place:"10th",solo:31.25,two:"",three:"",four:""}];
				break;
			case 10: // MYM
				teamName = "MEET YOUR MAKERS"
				teamRecord = [{place:"7th",solo:"",two:"",three:1.56,four:1.56},{place:"8th",solo:"",two:9.38,three:3.13,four:""},{place:"9th",solo:20.31,two:32.81,three:"",four:""},{place:"10th",solo:31.25,two:"",three:"",four:""}];
				break;
			default:
		}
		
		$("#team_name").text(teamName);
		
		var j;
		for(j = 0; j < teamRecord.length; j++) {
			$("#ties_table").append("<tr class='tie_history'><td>" + teamRecord[j].place +"</td><td>" + teamRecord[j].solo  +"</td><td>" + teamRecord[j].two +"</td><td>" + teamRecord[j].three +"</td><td>" + teamRecord[j].four +"</td></tr>");
		}
		colourizeTable();
	}
});