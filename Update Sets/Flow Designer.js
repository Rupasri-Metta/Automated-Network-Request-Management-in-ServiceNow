(function() {
	
	try {
		var inputs = {};
		inputs['table_name'] = 'Table Name';
		inputs['request_item'] = ; // GlideRecord of table: sc_req_item 

		// Start Asynchronously: Uncomment to run in background.
		// sn_fd.FlowAPI.getRunner().flow('global.network_request').inBackground().withInputs(inputs).run();
				
		// Execute Synchronously: Run in foreground.
		sn_fd.FlowAPI.getRunner().flow('global.network_request').inForeground().withInputs(inputs).run();
		
	} catch (ex) {
		var message = ex.getMessage();
		gs.error(message);
	}
	
})();
