import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  externals: ['typescript'],
  declaration: true,
  rollup: {
    emitCJS: true,
    esbuild: { target: 'node16' },
    dts: {
      respectExternal: true,
    },
  },
})
