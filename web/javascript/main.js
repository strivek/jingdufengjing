require.config({
    baseUrl: "javascript",
    packages: ["showLink","cars","bigman","scrollbar","Carousel","slideMore","showMore"],
    paths: {
        jquery: 'lib/jquery.min'
    }
});

require(['showLink']);
require(['Carousel']);
require(['bigman']);
require(['scrollbar']);
require(['slideMore']);
require(['showMore']);
require(['cars']);
