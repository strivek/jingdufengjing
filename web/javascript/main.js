require.config({
    baseUrl: "javascript",
    packages: ["showLink","crs","bigman","jScrollPane","Carousel","slideMore"],
    paths: {
        jquery: 'lib/jquery.min'
    }
});

require(['showLink']);
require(['crs']);
require(['Carousel']);
require(['bigman']);
require(['jScrollPane']);
require(['slideMore']);
