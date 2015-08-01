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
 		//------------- Google maps -------------//
    var map;
    var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(-32.011675, -63.198114),
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    map = new google.maps.Map(document.getElementById('gmap'), mapOptions);


    markers = []
    google.maps.event.addListener(map, 'click', function(e){
          //alert(e.latLng["D"]);

        for(var i=0; i < markers.length; i++){
           markers[i].setMap(null);
        }
        markers = [];

        var marker = new google.maps.Marker({
            position: e.latLng,
            map: map,
            title: 'Centro del campo'
        });
        $('#Lat').val(e.latLng["k"]);
        $('#Lng').val(e.latLng["D"]);
        markers.push(marker);

    });
	//------------- Form wizard without steps -------------//
 	$("#wizard1").formwizard({ 
	 	formPluginEnabled: true,
	 	validationEnabled: false,
	 	focusFirstInput : true,
	 	formOptions :{
			success: function(data){
				//produce success message
				createSuccessMsg($("#wizard1 .msg"), "You successfully submit this form");
			},
			resetForm: true
	 	},
	 	disableUIStyles: true,
	 	showSteps: false //show the step
	});

});


