﻿function login(request, response){
	var theQuery = getURLQuery(request.url);
  	var code = theQuery.code;
  	if (code) {
  		var result = loginByPassword(code, '-', 60*60);	
  		if (result) {
  			response.statusCode = 307;
			response.headers.Location = "/";
  		}else{
  			response.contentType = 'text/html';
			response.body = '<html><body>sorry - login failed</body></html>';
		}
  	}else{		
  		response.contentType = 'text/html';
		response.body = '<html><body>Did you cancel your login? It seems like you might have.<br> <p>Please <a href="/">start again</a>.</p></body></html>';
	}

}
