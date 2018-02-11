function wlCommonInit(){
	require([ "layers/core-web-layer", "layers/mobile-ui-layer" ], dojoInit);
	/*
	 * Use of WL.Client.connect() API before any connectivity to a MobileFirst Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the MobileFirst Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	
}

function dojoInit() {
	require([ "dojo/ready", "dojo/parser", "dojo/dom", "dijit/registry",
			"dojox/mobile/ProgressIndicator", "dojox/mobile", "dojox/mobile/ProgressBar" ], function(ready) {
		ready(function() {
		});
	});
}
