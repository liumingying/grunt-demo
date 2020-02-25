module.exports = function(grunt){
    grunt.initConfig({
        htmlhint:{
            options:{
                htmlhintrc:'./.htmlhintrc'
            },
            src: ['*.html']
        }
    });//具体信息

    grunt.loadNpmTasks('grunt-htmlhint');//加载插件

    grunt.registerTask('default',['htmlhint']);//构建的任务清单

};