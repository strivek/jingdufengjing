require.config({
    baseUrl: "javascript",
    packages: ["showLink","crs","bigman","scrollbar","Carousel","slideMore","showMore"],
    paths: {
        jquery: 'lib/jquery.min'
    }
});

require(['showLink']);
require(['crs']);
require(['Carousel']);
require(['bigman']);
require(['scrollbar']);
require(['slideMore']);
require(['showMore']);
