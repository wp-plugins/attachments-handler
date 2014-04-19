function forceAnalysisAH() {
	jQuery('#forceAnalysisAH').attr('disabled', 'disabled');
	jQuery('#stopAnalysisAH').removeAttr('disabled');
	jQuery('#wait_analysisAH').show() ;
	var arguments = {
		action: 'forceAnalysisAttachments'
	} 
	jQuery.post(ajaxurl, arguments, function(response) {
		if ((""+response+ "").indexOf("PROGRESS - ") !=-1) {
			if (jQuery('#forceAnalysisAH').is(":disabled")) {
				jQuery('#table_formatting').html(response) ;
				forceAnalysisAH() ; 
			}
		} else {
			jQuery('#forceAnalysisAH').removeAttr('disabled');
			jQuery('#stopAnalysisAH').attr('disabled', 'disabled');
			jQuery('#table_formatting').html(response) ;
			jQuery('#wait_analysisAH').hide() ;
		}
	});
}

function stopAnalysisAH() {
	jQuery('#forceAnalysisAH').removeAttr('disabled');
	jQuery('#stopAnalysisAH').attr('disabled', 'disabled');
	jQuery('#wait_analysisAH').hide() ;
	
	var arguments = {
		action: 'stopAnalysisAttachments'
	} 
	jQuery.post(ajaxurl, arguments, function(response) {
		// nothing
	});
}

function cleanAnalysisAH() {
	
	var r=confirm("Sure to reset all entries?");
	if (r==true) {
		jQuery('#wait_analysisAH').show() ;

		var arguments = {
			action: 'cleanAnalysisAttachments'
		} 
		jQuery.post(ajaxurl, arguments, function(response) {
			window.location.href=window.location.href ; 
		});
	}
}

function forceRegenerateAH() {
	jQuery('#forceRegenerateAH').attr('disabled', 'disabled');
	jQuery('#stopRegenerateAH').removeAttr('disabled');
	jQuery('#wait_regenerateAH').show() ;
	var arguments = {
		action: 'forceRegenerateAttachments'
	} 
	jQuery.post(ajaxurl, arguments, function(response) {
		if ((""+response+ "").indexOf("PROGRESS - ") !=-1) {
			if (jQuery('#forceRegenerateAH').is(":disabled")) {
				jQuery('#table_regenerate').html(response) ;
				forceRegenerateAH() ; 
			}
		} else {
			jQuery('#forceRegenerateAH').removeAttr('disabled');
			jQuery('#stopRegenerateAH').attr('disabled', 'disabled');
			jQuery('#table_regenerate').html(response) ;
			jQuery('#wait_regenerateAH').hide() ;
		}
	});
}

function stopRegenerateAH() {
	jQuery('#forceRegenerateAH').removeAttr('disabled');
	jQuery('#stopRegenerateAH').attr('disabled', 'disabled');
	jQuery('#wait_regenerateAH').hide() ;
	
	var arguments = {
		action: 'stopRegenerateAttachments'
	} 
	jQuery.post(ajaxurl, arguments, function(response) {
		// nothing
	});
}
