module.exports = (lineman) ->
  app = lineman.config.application

  files:
    typescript:
      app: "app/js/**/*.ts"
      spec: "spec/**/*.ts"
      specHelpers: "spec/helpers/**/*.ts"
      generated: "generated/js/app.ts.js"
      generatedSpec: "generated/js/spec.ts.js"
      generatedSpecHelpers: "generated/js/spec-helpers.ts.js"

  config:
    loadNpmTasks:
      app.loadNpmTasks.concat(['grunt-typescript', 'grunt-typedoc'])

    prependTasks:
      common: app.prependTasks.common.concat(['typescript', 'typedoc'])

    typescript:
      compile:
        files:
          "<%= files.typescript.generated %>": "<%= files.typescript.app %>"
          "<%= files.typescript.generatedSpec %>": "<%= files.typescript.spec %>"
          "<%= files.typescript.generatedSpecHelpers %>": "<%= files.typescript.specHelpers %>"
        options:
          target: 'es5'
    typedoc:
      build:
        options:
          target: 'es5'
          out: 'docs/'
          name: 'with_typescript'
        src: "<%= files.typescript.app %>"


    concat_sourcemap:
      js:
        src: app.concat_sourcemap.js.src.concat("<%= files.typescript.generated %>")
      spec:
        src: app.concat_sourcemap.spec.src.concat([
          "<%= files.typescript.generatedSpecHelpers %>",
          "<%= files.typescript.generatedSpec %>"
        ])

    watch:
      typescript:
        files: ["<%= files.typescript.app %>"]
        tasks: [
          "typescript",
          'typedoc',
          "concat_sourcemap:js"
        ]
      typeSpecs:
        files: [
          "<%= files.typescript.specHelpers %>",
          "<%= files.typescript.spec %>"
        ],
        tasks: [
          "typescript",
          "concat_sourcemap:spec"
        ]