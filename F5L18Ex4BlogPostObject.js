// To crreate blog post obj with theeses propreties:
//     title
//     body
//     author
//     views
//     comments(author, body)
//     isLive

const blogPost = {
    title: `Blockquotes`,
    author: `Smith`,
    body: ` Blockquotes are traditionally used to display, you guessed it, quotes. 
But some sites have started to use this formatting to draw attention to a certain
part of the post to try to get you to stop scanning and read the whole thing. 
This is the magazine equivalent of a call out.`,
    views: 10,
    comment: [
        {
            author: `Smith`,
            body: ` Blockquotes are traditionally used to display, you guessed it, quotes. 
    But some sites have started to use this formatting to draw attention to a certain
    part of the post to try to get you to stop scanning and read the whole thing. 
    This is the magazine equivalent of a call out.`},
        {
            author: `NoSmith`,
            body: ` Blockquotes are traditionally used to display, you guessed it, quotes.`,
        },
    ],
    isLive: true,
};
console.log(blogPost)