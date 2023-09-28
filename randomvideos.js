var videos = [
'7WTmlq4FmlY',
'GPp7ykvdxVI',
'89fPcUyAm4M'
];

var index=Math.floor(Math.random() * videos.length);
var html='<iframe style="padding: 16px 0;height:250px;" src="https://www.youtube.com/embed/' + videos[index] + '" allowfullscreen></iframe>';
document.write(html);

