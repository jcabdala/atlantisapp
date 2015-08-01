//------------- Dashboard.js -------------//
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

    $("#saverain").click(save_rain);
    $("#saveirr").click(save_irr);
    getuwaterdata();
    getcostdata();
    getcalendardata();
	//------------- Init pie charts -------------//
    //pass the variables to pie chart init function
    //first is line width, size for pie, animated time , and colours object for theming.
	initPieChartPage(20,100,1500, colours);

    
	//------------- Weather icons -------------//
	var today = new Skycons({
		"color": colours.teal,
		"resizeClear": true
	});
    var day0 = $("#day0").text();
	today.set("weather-now", day0);
	today.play();
   	//set forecast icons too
   	var forecast = new Skycons({
		"color": colours.white,
		"resizeClear": true
	});
    var day1 = $("#day1").text();
    var day2 =  $("#day2").text();
    var day3 =  $("#day3").text();
    var day4 =  $("#day4").text();

   	forecast.set("forecast-day1", day1);
   	forecast.set("forecast-day2", day2);
   	forecast.set("forecast-day3", day3);
   	forecast.set("forecast-day4", day4);
   	forecast.play();
	
   //Show slider value
	$("#slider-rain-val").slider({
		range: 'min',
		max: 200,
		value: 20,
		step: 1,
		slide: function( event, ui ) {
	        $("#rainshow").text(ui.value +"mm");
	    }
	});
	$("#rainshow").text($("#slider-rain-val").slider("value") +"mm");

	$("#slider-rie-val").slider({
		range: 'min',
		max: 100,
		value: 10,
		step: 5,
		slide: function( event, ui ) {
	        $("#rie").text( ui.value +"mm");
	    }
	});
	$("#rie").text( $("#slider-rie-val").slider("value") +"mm");

    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
         prevText: '<Ant',
        nextText: 'Sig>',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
        dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
        };
    $.datepicker.setDefaults($.datepicker.regional['es']);


	//basic usage
	$(".datepicker").datepicker();
	$(".datepickerfin").datepicker();
	$(".datepickerini").datepicker();
});
//---End Of Main---//

  function clean_rain(){
    $("#slider-rain-val").val(20)
    $("#id_date_rain").val("")
  };

  function clean_irri(){
    $("#slider-rie-val").val(20)
    $("#id_date_rain").val("")
    $("#id_startdate").val("");
    $("#id_enddate").val("");
  };


  function save_rain(){
    
    var date = $("#id_date_rain").val();
    var mm = $("#slider-rain-val").slider("option", "value");
    var fieldid = $("#fieldid").text();
    data = {"date": date,  "milimeters": mm};

    
     $.ajax({
            type: "GET",
            url: '/rain/' + fieldid,
            data: data,
            success:function(msg){
                     clean_rain();
                     getcalendardata();
                     $("#precipitaciones").modal("hide");
                    },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                      alert(JSON.stringify(XMLHttpRequest["responseText"]));
                   },
            dataType: "json",
      });

  };

  function save_irr(){
    var circleid = $("#circulos option:selected").val();
    var fieldid = $("#fieldid").text();

    var startdate = $("#id_startdate").val();
    var enddate = $("#id_enddate").val();
    var mm = $("#slider-rie-val").slider("option", "value");


    data = {"startdate": startdate, "enddate": enddate, "milimeters": mm };

    
     $.ajax({
            type: "GET",
            url: '/irrigation/' + fieldid + "/" + circleid,
            data: data,
            success:function(msg){
                     clean_irri();
                     getcalendardata();
                     getcostdata()
                     $("#riegos").modal("hide");
                    },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                      alert(JSON.stringify(XMLHttpRequest["responseText"]));
                   },
            dataType: "json",
      });

  };

//Setup easy pie charts in page
var initPieChartPage = function(lineWidth, size, animateTime, colours) {

	$(".easy-pie-chart").easyPieChart({
        barColor: colours.dark,
        borderColor: colours.dark,
        trackColor: colours.gray,
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });
    $(".easy-pie-chart-red").easyPieChart({
        barColor: colours.red,
        borderColor: colours.red,
        trackColor: '#fbccbf',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });
    $(".easy-pie-chart-green").easyPieChart({
        barColor: colours.green,
        borderColor: colours.green,
        trackColor: '#b1f8b1',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });
    $(".easy-pie-chart-yellow").easyPieChart({
        barColor: colours.yellow,
        borderColor: colours.yellow,
        trackColor: '#f4ef6e',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });
    $(".easy-pie-chart-blue").easyPieChart({
        barColor: colours.blue,
        borderColor: colours.blue,
        trackColor: '#d2e4fb',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });
    $(".easy-pie-chart-teal").easyPieChart({
        barColor: colours.teal,
        borderColor: colours.teal,
        trackColor: '#c3e5e5',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });
}

//------------- Line charts with dots -------------//
	function drawgraph(data) {
        //graph options
		var options = {
			grid: {
				show: true,
			    aboveData: true,
			    color:'#3f3f3f',
			    labelMargin: 15,
			    axisMargin: 0,
			    borderWidth: 0,
			    borderColor:null,
			    minBorderMargin: 0,
			    clickable: true, 
			    hoverable: true,
			    autoHighlight: true,
			    mouseActiveRadius: 20
			},
            xaxis:{
                mode: 'time',
                timeformat: "%H:%Mhs",    
                tickSize: [15, "day"],  
                tickFormatter: function(val, axis){ 
                                                  var date = new Date(val);

                                                  return date.getDate() + "/" + (date.getMonth()+1);}
                 },
	        series: {
	        	grow: {active:false},
	            lines: {
            		show: true,
            		fill: false,
            		lineWidth: 2,
            		steps: false
	            	},
	            points: {
	            	show:true,
	            	radius: 4,
	            	symbol: "circle",
	            	fill: true,
	            	borderColor: "#fff"
	            }
	        },
	        legend: { position: "nw" },
	        //colors: chartColours,
	        shadowSize:1,
	        tooltip: true, //activate tooltip
			tooltipOpts: {
				content: "%s : %y.0",
				shifts: {
					x: -30,
					y: -50
				}
			}
		};  
		var plot = $.plot($("#views-statistics"), data, options);
	};

   function getcostdata(){
     fieldid = $("#fieldid").text()
     $.get("/costs/" + fieldid , fillcosts)
   };
   function getuwaterdata(){
     fieldid = $("#fieldid").text()
     $.get("/uwater/" + fieldid , drawgraph)
   };
   function getcalendardata(){
     fieldid = $("#fieldid").text()
     $.get("/calendar/" + fieldid , drawcalendar)
   };

	function fillcosts(data){
    $("#sum").text(data.sum);
    $("#cost").text(data.cost);
   };
	//------------- Full calendar -------------//
	function drawcalendar(data){
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();
		$('#calendar').fullCalendar( 'destroy' )

		$('#calendar').fullCalendar({
            lang: 'es',
			header: {
				left: 'prev',
				center: 'title',
				right: 'next'
			},
			buttonText: {
	        	prev: '<i class="im-arrow-left2 s20"></i>',
	        	next: '<i class="im-arrow-right3 s20"></i>',
	        	today:'Hoy'
	    	},
			editable:false,
			events: data
		});
	};

