const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(function (tag) {
            console.log(self.title, tag);
        });
    }
};
video2.showTags();

const video3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(self.title, tag);
        }.bind(this));
    }
};
video3.showTags();

const video4 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(self.title, tag);
        });
    }
};
video4.showTags();

// function playVideo() {
//     console.log(this);
// }
// playVideo.call({ name: 'Nataly' });
// playVideo.apply({ name: 'Nataly' });
// playVideo.bind({ name: 'Nataly' })();
// playVideo();