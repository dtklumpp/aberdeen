//HOST STUFF -- later put in button fxn

let globalOffer;
let globalAnswer;

let pca;
let pcb;
let dcg;

$('#create').on('click', createRoom);

function createRoom(){
    
    let pc = new RTCPeerConnection();
    // console.log(pc)
    let dc = pc.createDataChannel('taco');
    // console.log(dc)


    //must set local description initially
    //in order to start generating ICE candidates
    //OH this is asynchronous
    //so finding candidates is part of setting it
    pc.createOffer().then((offer)=>{
        console.log('initial offer created');
        pc.setLocalDescription(offer).then(desc => {
            console.log('description created');
        })
        // console.log("offer1", offer.sdp);
        // console.log("local1", pc.localDescription)
        //ok the offer is available but local description later
        //because have to add ICE candidates to local desc!
    })

    let icecount = 0;

    pc.onicecandidate = async function(candidate){
        console.log('new ice candidate');
        // console.log("candidate", candidate)
        icecount++;
        // if(icecount == 1){
        //     setTimeout(async function(){
        //         let offer = await pc.createOffer();
        //         console.log("offer2", offer.sdp)
        //         $('#offer-box').text(offer.sdp);
        //     }, 5000)
        // }
        if(candidate.candidate == null){
            let offer = await pc.createOffer();
            console.log('finished offer created');
            // console.log("offer2", offer.sdp)
            // console.log("local2", pc.localDescription)
            $('#offer-box').text(offer.sdp);
            globalOffer = offer;
        }
    }

    pca = pc;
    dcg = dc;
    
}

$('#join').on('click', joinRoom);

async function joinRoom(){
    let pc = new RTCPeerConnection();
    pc.ondatachannel = function(event){
        let channel = event.channel;
        channel.onmessage = function(event){
            let data = event.data
            $('#inbox').append(data);
        }
    }
    
    await pc.setRemoteDescription(globalOffer);
    console.log('remote description set', pc.remoteDescription);

    let answer = await pc.createAnswer();
    console.log('answer created', answer);

    await pc.setLocalDescription(answer);
    console.log('local desc created', pc.localDescription);

    $('#answer-box').text(answer.sdp);
    globalAnswer = answer;

    pcb = pc;

}

$('#connect').on('click', makeConnection)

async function makeConnection(){
    await pca.setRemoteDescription(globalAnswer);
    console.log('partner remote desc set', pca.remoteDescription);
}



let msgCount = 0;

$('#send').on('click', sendMessage);

function sendMessage(){
    let message = "msg"+msgCount;
    $('#outbox').append(message);

    dcg.send(message);

    msgCount++;
}


//ask if host i guess?
//make pc
//make dc
//wait for ICEs
//make the offer
//display it

//whereas if joining
//make pc
//ask for offer
//generate answer
//display it
//oh set the ondatachannel

//at various points:
//await
//error-check
//various callbacks define
//various buttons deactivate

//oh and then
//when get message
//display in the box
//when TYPE message
//display it
//and SEND it

//when exit
//close channels

//bonus:
//add files & audio






// steps:------------------------------------
// make a RTC cnxn object
// make a data channel
// do the handshake

//
// new RTCPeerConnection(servers)
// pc.createDataChannel('taco')
// pc.onicecandidate = (assign fxn)
// dtc.onopen
// dtc.onclose
// pc.ondatachannel = callback fxn
// 	passes event.channel
// 	channel.onmessage = fxn
// 	passes event.data
// 	channel.onopen
// 	channel.onclose
// 	use channel.readyState...
// sdp = await pc.createOffer()
// dtc.send(data)
// dtc.close()
// pc.close()
// pc.setLocalDescription(sdp)
// pc.setRemoteDescription(sdp)
// iceCallback(event)
// 	event.candidate
// await pc.addIceCandidate(event.candidate)


//WEBRTC

// const pc = new RTCPeerConnection();
// const dc = pc.createDataChannel("my channel");

// dc.onmessage = (event) => {
//     console.log(`received: ${event.data}`);
// };

// dc.onopen = () => {
//     console.log("datachannel open");
// };

// dc.onclose = () => {
//     console.log("datachannel close");
// };