const tmi = require('twitch-auth-tmi');
const request = require('request-promise')
const { StaticAuthProvider } = require('twitch-auth');
const client = "";
const auth = ""
const authProvider = new StaticAuthProvider(client, auth);
var url = "";

const movimentos = { "f": "forward", "frente": "forward", "direita": "right", "d": "right", "esquerda": "left", "e": "left", "tras": "backward", "t": "backward", "para": "stop", "p": "stop" }

process.stdin.setEncoding("utf8")
process.stdin.on("data", function (data) {
    url = `http://${data.replace(/\r\n/gi, "")}`
})

const client = new tmi.Client({
    options: { debug: true, messagesLogLevel: 'info' },
    connection: {
        reconnect: true,
        secure: true
    },
    authProvider: authProvider,
    channels: [client]
});
client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
    if (self) return;

    let mov = message.toLowerCase()

    if (movimentos[mov]) {
        console.log(movimentos[mov]);
        enviamovimento(movimentos[mov]).then(resp => {
            console.log("enviou comando", mov)
        }).catch(error => {
            //console.log("nao enviou", error)
        });
    }
});

function enviamovimento(movimento) {
    return request.get({ uri: `${url}/${movimento}` })
}
