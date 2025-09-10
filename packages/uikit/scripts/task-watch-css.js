import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import chokidar from 'chokidar'
import { bundle } from 'lightningcss'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Define source and output paths
const srcDir = path.join(__dirname, '..', 'src', 'styles')
const outputDir = path.join(__dirname, '..', 'dist', 'styles')
const entryFiles = [path.join(srcDir, 'styles.css'), path.join(srcDir, 'typography.css')]

// Function to bundle CSS
const bundleCSS = () => {
  try {
    console.log('🚀 Bundling CSS...')

    for (const file of entryFiles) {
      const { code, map } = bundle({
        filename: file,
        minify: false,
        sourceMap: true,
        // targets: { chrome: 80 } // Example target
      })

      const outputFilePath = path.join(outputDir, path.basename(file))

      // Ensure output directory exists
      fs.mkdirSync(outputDir, { recursive: true })

      fs.writeFileSync(outputFilePath, code)
      fs.writeFileSync(`${outputFilePath}.map`, map)

      // console.log(`Bundled: ${outputFilePath}`)
    }

    console.log('✅ CSS bundling completed.')
  } catch (error) {
    console.error(`Error during CSS bundling for file ${file}:`, error)
  }
}

// Watch for changes in the src/styles directory
const watcher = chokidar.watch(srcDir, {
  persistent: true,
  ignoreInitial: true, // Don't run initially - we're taking care of that below.
})

watcher
  .on('add', (path) => {
    console.log(`📂 File ${path} has been added`)
    bundleCSS()
  })
  .on('change', (path) => {
    console.log(`📂 File ${path} has been changed`)
    bundleCSS()
  })
  .on('unlink', (path) => {
    console.log(`📂 File ${path} has been removed`)
    bundleCSS()
  })

// Initial run to bundle existing files
bundleCSS()

console.log(`👁️ Watching for CSS changes in ${srcDir}...`)
