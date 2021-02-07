var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {

    console.log("RPC on!")

client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Your text here",
assets : {
large_image : "Image",
large_text : "Your Statut", // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Button" , url : "Link"}]
}
})
})
client.login({ clientId : "ApplicationID" }).catch(console.error);