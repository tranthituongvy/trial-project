var jsHTML = {
		init: function() {
			//common func		
			jsHTML.datepickerInit();
		},
		
	//Date
	datepickerInit: function(){
		if($('#startdate').length > 0){
			$('#startdate').datepicker();
			$('#startdate').on("changeDate", function() {
					$('#startdate-input').val(
							$('#startdate').datepicker('getFormattedDate') 
					);
			});
		}	
		
		if($('#enddate').length > 0){
			$('#enddate').datepicker();
			$('#enddate').on("changeDate", function() {
					$('#enddate-input').val(
							$('#enddate').datepicker('getFormattedDate')   
					);
			});
		}	
	}
};


$(document).ready(function(){
	jsHTML.init();
});