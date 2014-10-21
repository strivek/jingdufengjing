require.config({
    baseUrl: "javascript",
    packages: ["showLink","crs"],
    paths: {
        jquery: 'lib/jquery.min'
    }
});

require(['showLink']);
require(['crs']);
