var ds = [];
var apps = [];
$.ajax({
    url: '/asset/d.json',
    dataType: 'json',
    success: function (data) {
        ds = data.ds;
        apps = data.app;
    }
});

function redir() {
    window.location.href = "https://" + ds[Math.floor(Math.random() * ds.length)];
}

function redir_app() {
    if (apps.length > 0) {
        window.location.href = "https://" + apps[Math.floor(Math.random() * apps.length)] + "/app";
    } else {
        redir();
    }
}
