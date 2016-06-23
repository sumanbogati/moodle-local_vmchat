module.exports = function(grunt) {
    grunt.initConfig({
      uglify: {
        my_target: {
          files: {
            'amd/build/index.min.js' : ['amd/src/index.js'],
            'amd/build/chatboxManager.min.js' : ['amd/src/chatboxManager.js'],
            'amd/build/clib.min.js' : ['amd/src/clib.js'],
            'amd/build/uichatlist.min.js' : ['amd/src/uichatlist.js'],
            'amd/build/footer.min.js' : ['amd/src/footer.js'],
            'amd/build/iolib.min.js' : ['amd/src/iolib.js'],
            'amd/build/uichatbox.min.js' : ['amd/src/uichatbox.js'],
            'amd/build/uichatroom.min.js' : ['amd/src/uichatroom.js']
          }
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify'); // load the given tasks
    grunt.registerTask('default', ['uglify:my_target']); // Default grunt tasks maps to grunt
};
