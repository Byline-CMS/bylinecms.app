/**
 * An optional post code build utility function that will
 * gather up all processed css modules and merge them into a single
 * styles.css file. This is useful for libraries that want to provide
 * css that does not depend on the front-end framework's ability to
 * import css within components.
 */

import { existsSync } from 'node:fs'
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'

// Define paths
const stylesCSSFile = resolve('../dist/styles/styles.css')
const componentsDir = resolve('../dist/react/components')

/**
 * Recursively fetches all .module.js files from a given directory
 * @param {string} dir - The directory to search in
 * @returns {Promise<string[]>} - A list of file paths
 */
const getAllModuleJSFiles = async (dir) => {
  if (!existsSync(dir)) {
    console.error(`❌ Directory not found: ${dir}`)
    return []
  }

  let moduleJSFiles = []
  const entries = await readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      const subFiles = await getAllModuleJSFiles(fullPath)
      moduleJSFiles = moduleJSFiles.concat(subFiles)
    } else if (entry.isFile() && entry.name.endsWith('.module.js')) {
      moduleJSFiles.push(fullPath)
    }
  }
  return moduleJSFiles
}

/**
 * Removes the first CSS import line from .module.js files
 * @param {string} dir - The directory to search in
 */
const stripCSSImport = async () => {
  if (!existsSync(componentsDir)) {
    console.error(`❌ Component directory not found: ${componentsDir}`)
    throw new Error('Component directory not found')
  }

  const moduleJSFiles = await getAllModuleJSFiles(componentsDir)
  console.log(`📂 Found ${moduleJSFiles.length} .module.js files.`)

  for (const file of moduleJSFiles) {
    try {
      const content = await readFile(file, 'utf8')
      const lines = content.split('\n')

      // Check if the first line is an import statement for a CSS file
      if (/^import\s+['"]\.\/.+\.css['"]\s*;/.test(lines[0])) {
        lines.shift() // Remove the first line
        await writeFile(file, lines.join('\n'))
        console.log(`✅ Removed CSS import from: ${file}`)
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error)
    }
  }
}

/**
 * Recursively fetches all .css files from a given directory
 * @param {string} dir - The directory to search in
 * @returns {Promise<string[]>} - A list of file paths
 */
const getAllCSSFiles = async (dir) => {
  if (!existsSync(dir)) {
    console.error(`❌ Directory not found: ${dir}`)
    return []
  }

  let cssFiles = []
  const entries = await readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      const subFiles = await getAllCSSFiles(fullPath)
      cssFiles = cssFiles.concat(subFiles)
    } else if (entry.isFile() && entry.name.endsWith('.css')) {
      cssFiles.push(fullPath)
    }
  }
  return cssFiles
}

/**
 * Reads, processes, minifies (in production), and outputs final uikit.css
 */
const processCSSModules = async () => {
  // Ensure base styles.css exists
  if (!existsSync(stylesCSSFile)) {
    console.error(`❌ Base styles.css not found: ${stylesCSSFile}`)
    throw new Error('Base styles.css not found')
  }

  const stylesCSS = await readFile(stylesCSSFile, 'utf8')
  const cssFiles = await getAllCSSFiles(componentsDir)
  console.log(`📂 Found ${cssFiles.length} CSS module files.`)
  console.log(cssFiles)

  // Read and merge all CSS module files
  const moduleCSS = await Promise.all(cssFiles.map((file) => readFile(file, 'utf8')))
  const mergedModuleCSS = moduleCSS.join('\n')

  try {
    const finalCSS = `${stylesCSS}\n${mergedModuleCSS}`
    // Write final output back to styles.css
    await writeFile(stylesCSSFile, finalCSS)
    console.log(`✅ styles.css updated successfully: ${stylesCSSFile}`)
  } catch (error) {
    console.error('❌ Error processing CSS:', error)
  }
}

async function run() {
  await processCSSModules()
  await stripCSSImport()
}

// Run the process
run()
