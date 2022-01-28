const fetch = require('node-fetch');
const { spawn } = require('child_process');
const clivas = require('clivas');

let query = process.argv.slice(2).join(" ");
(async () => {
    const movie = await fetch(`https://1337x.wtf/search/${query}/1/`).then(async (res) => await res.text()).then(res => res.match(/torrent\/[0-9]{7}\/[a-zA-Z0-9?%-]*/g)[0])
    const magnet = await fetch(`https://1337x.wtf/${movie}/`).then(async (res) => await res.text()).then((res) => res.match(/magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+/gi)[0].split("\"")[0])
    console.log("\x1b[32mStarting streaming...\x1b[0m")
    var child = spawn('peerflix', ['-k', `\"${magnet}\"`], { shell: true });

    child.stdout.on('data', function (data) {
        clivas.clear()
        data.toString().split("\n").forEach(line => {
            clivas.line(line)
        })
    });

    child.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });

    child.on('close', function (code) {
        console.log('Stream was closed ' + code);
    });
})()
