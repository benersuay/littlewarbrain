// Bener Suay
// October, 2015
//
// WebSocket communication example
// Uses the code I found on stackoverflow published by user4007301
// 
// http://stackoverflow.com/questions/26084366/websocket-is-null-after-onopen

if( this.sConn == null ) {

    this.sConn = {
	
	socket: null,
	uri: 'wss://echo.websocket.org',

	init: function() { 
            this.socket = new WebSocket(this.uri);

	    this.socket = new WebSocket(this.uri);
	    this.socket.onopen = this.onOpen.bind(this);
	    this.socket.onclose = this.onClose.bind(this);
	    this.socket.onerror = this.onError.bind(this);
	    this.socket.onmessage = this.onMessage.bind(this);
	},
	
	onOpen: function(){
            console.log(this.socket); // prints "undefined"
            this.socket.send("Hello Server!"); // can't read property send of undefined
	},
	
	onClose: function(event){
         console.log("Close:",event); // is never called
	},
	
	onError: function(err){
            console.log("Error:",err); // also never called
	},
	
	onMessage: function(msg){
            console.log("Got Message:",msg);
	}
	
    };

    this.sConn.init();
}