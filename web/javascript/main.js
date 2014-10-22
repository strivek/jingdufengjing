require.config({
    baseUrl: "javascript",
    packages: ["showLink","crs","Carousel"],
    paths: {
        jquery: 'lib/jquery.min'
    }
});

require(['showLink']);
require(['crs']);
require(['Carousel']);
