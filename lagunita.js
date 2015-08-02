function dumpVideoUrls() {
    console.log('Video URLs:');

    var html = document.getElementsByTagName('html')[0];
    console.log(html.innerHTML);
}

function run() {
    dumpVideoUrls();
}

run();
