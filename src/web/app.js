var ws;

$(function() {
    ws = new WebSocket('ws://' + document.location.host + '/ws');
    ws.onopen = function() {
        console.log('onopen');
        ws.send('This is a journey into sound');
    };
    ws.onclose = function() {
        $('#message').text('Lost connection.');
        console.log('onclose');
    };
    ws.onmessage = function(message) {
        console.log("got '" + message.data + "'");
        eval(message.data);
    };
    ws.onerror = function(error) {
        console.log('onerror ' + error);
        console.log(error);
    };
});
