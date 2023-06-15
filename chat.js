//WEBSOCKETS

// const socket = new WebSocket("ws://localhost:8080");
// // const socket = new WebSocket("ws://localhost:8080");

// socket.addEventListener("open", (event) => {
//     socket.send("Hello Server!");
// });

// socket.addEventListener("message", (event) => {
//     console.log("Message from server ", event.data);
// });



//WEBRTC

const pc = new RTCPeerConnection();
const dc = pc.createDataChannel("my channel");

dc.onmessage = (event) => {
  console.log(`received: ${event.data}`);
};

dc.onopen = () => {
  console.log("datachannel open");
};

dc.onclose = () => {
  console.log("datachannel close");
};

