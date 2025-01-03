export {};

require('esbuild').build({
  entryPoints: ['./js/index.js'],
  outfile: './js/dist/index.js',
    bundle: true,
    loader: {
        '.png': 'dataurl',
        '.svg': 'text',
        '.ttf': 'dataurl'
    },
    watch: {
      onRebuild(error, result) {
        if (error) console.error('watch build failed:', error)
        else console.log('watch build succeeded:', result)
      },
    },
  }).then(result => {
    console.log('watching...')
  });