// To use a constructor function to create an object
const blogPost = new BlogPost(
    `Blockquotes`,
    `Smith`,
    ` Blockquotes are traditionally used to display, you guessed it, quotes. 
But some sites have started to use this formatting to draw attention to a certain
part of the post to try to get you to stop scanning and read the whole thing. 
This is the magazine equivalent of a call out.`);

function BlogPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comment = [];
    this.isLive = false;
}
console.log(blogPost);