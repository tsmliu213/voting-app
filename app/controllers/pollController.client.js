'use strict';

(function() {
    var container = document.querySelector('.polls');
    var apiUrl = appUrl + '/polls'

    function updatePollCount(data) {
        //var pollObject = JSON.parse(data);
        container.append(JSON.stringify(data));
    }
    
    ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updatePollCount));
})();