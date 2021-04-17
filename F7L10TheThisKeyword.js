//THIS - references the object that is executing the current function.
//method -> obj 
//function -> global(window, global)


//play is a method in the video obj, THIS references this obj itself.
const video1 = {
    title: 'a',
    play() {
        console.log(this);
    }
};
video1.play();

//stop is a method in the video obj
video1.stop = function () {
    console.log(this);
}
video1.stop();

//we're going to see the global obj which is window in browsers and global in Node.
function playVideo() {
    console.log(this);
}
playVideo();

//constructor
function Video() {
    this.title = this.title;// add the title property to this new obj 
    console.log(this);
}
const v = new Video('b');

//When dealing with a regular function, THIS by default references the global obj,
//but if we call a function, using the new operator, which is the case for constructor functions, 
//THIS will reference a new empty obj.

const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this);
    }
};

video2.showTags();


