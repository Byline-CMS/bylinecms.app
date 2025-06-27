import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const srcDir = path.join(__dirname, '..', 'src')

// Convert kebab-case to PascalCase
const toPascalCase = str => {
  return str.replace(/(^\w|-\w)/g, match => match.replace('-', '').toUpperCase())
}

export const buildImports = extension => {
  const importStatements = []
  const exportStatements = []

  function processDirectory(directory) {
    const files = fs.readdirSync(directory)
    // biome-ignore lint/complexity/noForEach: <explanation>
    files.forEach(file => {
      const fullPath = path.join(directory, file)
      if (fs.statSync(fullPath).isDirectory()) {
        processDirectory(fullPath)
      } else if (file.endsWith(`.${extension}`)) {
        const relativePath = path.relative(srcDir, fullPath)
        const componentName = path.basename(file, `.${extension}`)
        const pascalCaseName = toPascalCase(componentName)
        importStatements.push(`import ${pascalCaseName}Component from './${relativePath.replace(/\\/g, '/')}'`)
        exportStatements.push(`export const ${pascalCaseName} = ${pascalCaseName}Component`)
      }
    })
  }

  processDirectory(srcDir)

  // biome-ignore lint/style/useTemplate: <explanation>
  return importStatements.join('\n') + '\n\n' + exportStatements.join('\n')
}

