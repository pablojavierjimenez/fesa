var templateOptions = {
    ignorePartials: true, //ignores the unknown footer2 partial in the handlebars template, defaults to false
    partials : {
        footer : '<footer>the end</footer>'
    },
    batch : ['./app/templates/modules'],
    helpers : {
        capitals : function(str){
            return str.toUpperCase();
        }
    }
};

module.exports = templateOptions;
