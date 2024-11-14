import { build } from 'esbuild';

build({
    entryPoints: ['./index.js'],
    outfile: './dist/index.js',
    bundle: true,
    external: ['esbuild'],  // Исключаем esbuild из бандла
    loader: {
        '.png': 'dataurl',
        '.svg': 'text',
        '.ttf': 'dataurl'
    },
    watch: {
      onRebuild(error, result) {
        if (error) console.error('watch build failed:', error);
        else console.log('watch build succeeded:', result);
      },
    },
}).then(result => {
    console.log('watching...');
});
