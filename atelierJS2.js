var currentImage = document.getElementById('currentImage');

function getTheBeatles() {
    var lineUp = document.querySelectorAll('.beatles');
    console.log(lineUp)
    return lineUp;
};

var theBeatles = getTheBeatles();
console.log(theBeatles);

for (let i of theBeatles) {

    i.addEventListener('mouseover',function(e) {

        console.log("hover");
        this.style.height = "230px";
        this.style.opacity = "1";

    });

    i.addEventListener('mouseout',function(e) {

        console.log("plus hover");
        this.style.height = "200px";
        this.style.opacity = "0.5";

    });

    i.addEventListener('click',function() {

        var thisAttribute = this.getAttribute('src');
        currentImage.setAttribute('src',thisAttribute);   
    })

    


};


// var john = document.getElementById('john');
// console.log(john);
// function findTheBeatle(beatle){
//     var thisBeatle = beatle.getAttribute('id');
//     console.log(thisBeatle);
//     return thisBeatle;
// }


// document.querySelectorAll('.beatles').addEventListener('click' , function() {
//     findTheBeatle(this);
// });

