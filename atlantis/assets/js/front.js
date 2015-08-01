   $(document).ready(function() {
      getuwaterdata();
   });  

   function getuwaterdata(){
     fieldid = $("#fieldid").text()
     $.get("/uwater/" + fieldid , plotuwater)
   };


   function plotuwater(data) {
     
    // setup plots
    var options = {
        grid:{borderColor:'#ccc'},
        series:{shadowSize:0},
        yaxis:{
               axisLabel: "% de Agua util",
               tickFormatter: function(val, axis) { return val + "%"},
              },
        legend: {position: "nw"},
        xaxis:{
                mode: 'time',
                axisLabel: "Tiempo",
                timeformat: "%H:%Mhs",    
                tickSize: [1, "day"],  
                tickFormatter: function(val, axis){ 
                                                  var date = new Date(val);
                                                  return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();}},//+ date.getHours() +':'+ (date.getMinutes()<10?'0':'') + date.getMinutes() + "hs";}},
      };
       
     var plot = $.plot($("#chart1"), data, options);
      
    };
