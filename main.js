//https://teachablemachine.withgoogle.com/models/KT-_leKEN/

prediction = "";

Webcam.set({
    width: 392,
    height: 294,
    image_format: 'png',
    png_quality: 90
})

camera = document.getElementById("webcamImage");
Webcam.attach("#webcamImage");

function takePicture() {
    Webcam.snap(function(dataURI) {
        document.getElementById("capturedImage").innerHTML = '<img id="newCapturedImg" src="'+ dataURI +'">';
    })
}

console.log('ml5 Version', ml5.version);
classifier = imageClassifier("https://teachablemachine.withgoogle.com/models/KT-_leKEN/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model Loaded");
}

function speak() {
    synthesis = window.speechSynthesis;
    speakData = "The prediction is " + prediction;
    utterThis = new SpeechSynthesisUtterance(speakData);
    synthesis.speak(utterThis);
}