const doRequest = function (url, repeat) {
    document.cookie = '';
    let start = performance.now();
    console.log(`starting - '${url}'`);

    $.ajax({
        url: url,
        async: true,
        complete: function () {
            let elapsed = parseInt(performance.now() - start);
            console.log(`done - '${url}' (${elapsed})`);

            if (repeat) {
                console.log(`repeat - '${url}'`);
                setTimeout(function () {
                    doRequest(url, repeat);
                }, 500);
            }
        }
    });
}

const bindClick = function (elementId, interval, repeat) {
    document.getElementById(elementId).addEventListener('click', function () {
        let url = $('[name=url]:checked').val() + '?i=' + interval;
        doRequest(url, repeat);
    });
};

const doTestRun = function(count, interval) {
    let array = [];
    for(var i = 1; i <= count; i++) {
        array.push(i);
    }

    $(array).each(function() {
        let url = $('[name=url]:checked').val() + '?i=' + interval;
        doRequest(url);
    })
};

document.addEventListener('DOMContentLoaded', function () {
    bindClick('btn2s', 2);
    bindClick('btn5s', 5);
    bindClick('btn10s', 10);
    bindClick('btn20s', 20);
    bindClick('btn30s', 30);

    document.getElementById('btnTestRun').addEventListener('click', function() {
        let count = parseInt(prompt('Count?'));
        let interval = parseInt(prompt('Interval (s)?'));
        if (interval > 30)
            throw new Error("Max interval is 30 s.")
        doTestRun(count, interval);
    });

    // bindClick('btn2sr', 'request_2s.asp', true);
    // bindClick('btn5sr', 'request_5s.asp', true);
    // bindClick('btn10sr', 'request_10s.asp', true);
    // bindClick('btn20sr', 'request_20s.asp', true);
    // bindClick('btn30sr', 'request_30s.asp', true);
});