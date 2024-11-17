const extractArr = [];

export default function myExtractCssRollupPlugin (opts) {
    return {
      name: 'my-extract-css-rollup-plugin',
      transform(code, id) {
        if(!id.endsWith('.css')) {
          return null;
        }

        extractArr.push(code);

        return {
          code: 'export default "神说要有光"',
          map: { mappings: '' }
        }
      },
      generateBundle(options, bundle) {

        this.emitFile({
          fileName: opts.filename || 'guang.css',
          type: 'asset',
          source: extractArr.join('\n/*光光666*/\n')
        })
      }
    };
  }
  
