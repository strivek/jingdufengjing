require.config({
    baseUrl: "javascript",
    packages: ["showLink","crs","bigman"],
    paths: {
        jquery: 'lib/jquery.min'
    }
});

require(['showLink']);
require(['crs']);
require(['bigman']);
