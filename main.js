function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/gNYHujWjp', modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1; 

        
    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    

    img = document.getElementById('Cat') 
    img = document.getElementById('Dog')

    if (results[0].label == "Meowing") {
        img.src = 'Cat.png';
    }else if (results[0].label == "Barking") {
        img.src = 'Dog.png';
    }

}
}