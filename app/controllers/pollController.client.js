'use strict';

(function() {
    var container = document.querySelector('.polls');
    var apiUrl = appUrl + '/api/polls'

    function updatePollCount(data) {
        //var pollObject = JSON.parse(data);
        container.append(JSON.stringify(data));
    }
    
    ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updatePollCount));
})();