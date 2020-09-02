
const button = document.getElementById("btn");

const imageUsed = document.getElementById("img");

//Images array

const imagesArray = [ "images/baby1.jpg", "images/baby2.jpg", "images/clock1.jpg", "images/clock2.jpg", "images/dog1.jpg", "images/flower1.jpg", "images/flower2.jpg", "images/fruit1.jpg", "images/lips1.jpg", "images/man2.jpg", "images/man3.jpg", "images/tree1.jpg" ];

//Random image on button press

/*const abc = function imageRandom(imagesArray) {
  i = Math.floor(Math.random() * imagesArray.length);
  imageUsed.src = imagesArray[i]; 
}
*/

const def = function () /*NOTE: anonymous function, as opposed to const abc above which will run the script without waiting for imgBtn event listener */ { 
  i = Math.floor(Math.random() * imagesArray.length);
  imageUsed.src = imagesArray[i];  
};

//Assign the imgBtn button

let imgBtn = document.getElementById("imgBtn");

//Add event listener

imgBtn.addEventListener('click' , def) 

//click 'button' to launch prediction

button.addEventListener("click", app); //ALT: button.onclick = app

//Machine learning function

async function app(input) {
    prediction = document.getElementById("classify")
    prediction.innerHTML = `Predicting...`;
    console.log("Loading mobilenet..");

    //Load the model
    const net = await mobilenet.load();
    console.log("Successfully loaded model");

    //Make a prediction through the model on our image
    const result = await net.classify(imageUsed);
    console.log(result);
    console.log(result[0].className);
    prediction.innerHTML = result[0].className + "  --  " + result[0].probability*100 + "% probability"; //push result text to html

};


/*
What MobileNet (Tensorflow pre-trained model) recognises 
https://github.com/ml5js/ml5-library/blob/development/src/utils/IMAGENET_CLASSES.js 
From Dan Shiffman https://youtu.be/yNkAuWz5lnY?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y&t=119
*/


/* IF FROM https://github.com/tensorflow/tfjs-models/tree/master/mobilenet

const img = document.getElementById('img');

  // Load the model.
  mobilenet.load().then(model => {
    // Classify the image.
    model.classify(img).then(predictions => {
      console.log('Predictions: ');
      console.log(predictions);
    });
  }); */

