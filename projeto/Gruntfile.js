module.exports = function(grunt) {

   grunt.initConfig({
      /* Copia os arquivos para o diretório 'dist' */
      copy: {
         public: {
           expand: true,
           cwd: 'public',
           src: '**',
           dest: 'dist'
         }
     },

     clean: {
          dist: {
              src: 'dist'
          }
     },

     useminPrepare: {
       html: 'dist/**/*.html'
     },

     usemin: {
       html: 'dist/**/*.html'
     }
  });

  //registrando task para minificação

  grunt.registerTask('dist', ['clean', 'copy']);

  grunt.registerTask('minifica', ['useminPrepare', 
                                  'concat', 'uglify', 'cssmin', 'usemin']);

  // registrando tasks
  grunt.registerTask('default', ['dist', 'minifica']);

  // carregando tasks
  grunt.loadNpmTasks('grunt-contrib-copy'); 
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-usemin');
}