//------------- blank.js -------------//
$(document).ready(function() {

	//get object with colros from plugin and store it.
	var objColors = $('body').data('appStart').getColors();
	var colours = {
		white: objColors.white,
		dark: objColors.dark,
		red : objColors.red,
		blue: objColors.blue,
		green : objColors.green,
		yellow: objColors.yellow,
		brown: objColors.brown,
		orange : objColors.orange,
		purple : objColors.purple,
		pink : objColors.pink,
		lime : objColors.lime,
		magenta: objColors.magenta,
		teal: objColors.teal,
		textcolor: '#5a5e63',
		gray: objColors.gray
	}

	var chartColours = ['#3fc3a8', '#ed7a53', '#9FC569', '#bbdce3', '#9a3b1b', '#5a8022', '#2c7282'];

	//------------- Vertical Form wizard with steps-------------//
 	$("#wizard2").formwizard({
	 	//formPluginEnabled: false,
	 	validationEnabled: false,
	 	focusFirstInput : true,
	 	formOptions :{
			//success: function(data){
				//produce success message
			//	createSuccessMsg($("#wizard2 .msg"), "You successfully submit this form");
			//},
			resetForm: false,
	 	},
	 	disableUIStyles: true,
	 	showSteps: true, //show the step
	 	vertical: true //activate vertical wizard
	});



  var map;
    var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(-32.011675, -63.198114),
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    map = new google.maps.Map(document.getElementById('gmap'), mapOptions);


    markers = []
    google.maps.event.addListener(map, 'click', function(e){

        for(var i=0; i < markers.length; i++){
           markers[i].setMap(null);
        }
        markers = [];

        var marker = new google.maps.Marker({
            position: e.latLng,
            map: map,
            title: 'Centro del campo'
        });
				console.log(e.latLng);
        $('#id_lat').val(e.latLng["G"]);
        $('#id_lon').val(e.latLng["K"]);
				console.log($('#id_lat'));
        markers.push(marker);
				console.log("fin");
    });

	//------------- Bars chart -------------//
	$(function () {

    	var data = [ ["JAN", 1500], ["FEB", 1345], ["MAR", 1800], ["APR", 1670], ["MAY", 1780], ["JUN", 1500], ["JUL", 1350], ["AUG", 1700], ["SEP", 1890], ["OCT", 2000], ["NOV", 1950], ["DEC", 2000] ];

    	//Replicate the existing bar data to reproduce bar fill effect
    	var arr= [];
    	for (var i = 0; i <= data.length -1; i++) {
    		arr.push(data[i][1]);
    	};
    	var largest = Math.max.apply(Math, arr) + 50;
    	d1 = [];
    	for (var i = 0; i <= data.length -1; i++) {
    		sum = largest - data[i][1];
    		d1.push([data[i][0],sum]);
    	};

    	var options = {
    		series : {
				stack: true
			},
			bars: {
				show:true,
				barWidth: 0.5,
				fill:1,
				align: "center"
			},
			grid: {
				show:true,
				hoverable: true,
				borderWidth: 0,
			    borderColor:null
			},
	        colors: chartColours,
	        tooltip: true, //activate tooltip
			tooltipOpts: {
				content: "$%y.0",
				shifts: {
					x: -30,
					y: -50
				}
			},
			yaxis: {
				tickLength: 0,
				show:false
			},
			xaxis: {
	        	mode: "categories",
				tickLength: 0
	        }
		};

		$.plot($("#bars-chart"), [data, d1], options);
	});


});
