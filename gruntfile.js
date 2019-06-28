module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                banner: '/* <%= pkg.name %> v<%= pkg.version %> | <%= pkg.homepage %> | <%= pkg.license %> License */\n\n',
                footer: '\n/* Author: <%= pkg.author.name %> <<%= pkg.author.email %>>\n Updated: <%= grunt.template.today("dS mmm yyyy @ h:MM:ss TT") %> */'
            },
            dist: {
                src: [
                    'node_modules/normalize.css/normalize.css',
                    'scss/dist/style.css'
                ],
                dest: 'css/style.css'
            }
        },

        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({browsers: 'last 2 versions'}) // add vendor prefixes
                ]
            },
            dist: {
                src: 'css/style.css'
            }
        },

        cssmin: {
            target: {
                files: [{
                    'css/min/style.min.css': ['css/style.css']
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    grunt.registerTask('default', ['concat', 'postcss', 'cssmin']);
};