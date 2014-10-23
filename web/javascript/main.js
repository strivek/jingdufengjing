require.config({
    baseUrl: "javascript",
    packages: ["showLink","crs","bigman","jScrollPane"],
    paths: {
        jquery: 'lib/jquery.min'
    }
});

require(['showLink']);
require(['crs']);
require(['bigman']);
require(['jScrollPane']);
