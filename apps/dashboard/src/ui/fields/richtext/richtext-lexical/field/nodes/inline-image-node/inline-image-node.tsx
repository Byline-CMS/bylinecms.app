// 'use client'

/**
 * Byline CMS
 *
 * Copyright © 2025 Anthony Bouch and contributors.
 *
 * This file is part of Byline CMS.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

// import * as React from 'react'
// import { Suspense } from 'react'

// import { $applyNodeReplacement, createEditor, DecoratorNode } from 'lexical'

// import type { Position, Doc, InlineImageAttributes, SerializedInlineImageNode } from './types'
// import type {
//   DOMConversionMap,
//   DOMConversionOutput,
//   DOMExportOutput,
//   EditorConfig,
//   LexicalEditor,
//   LexicalNode,
//   NodeKey
// } from 'lexical'

// const InlineImageComponent = React.lazy(async () => await import('./inline-image-node-component'))

// function convertInlineImageElement(domNode: Node): null | DOMConversionOutput {
//   if (domNode instanceof HTMLImageElement) {
//     const { alt: altText, src, width, height } = domNode
//     const id = domNode.dataset.id as string
//     const collection = domNode.dataset.collection as string
//     const node = $createInlineImageNode({ id, collection, src, altText, height, width })
//     return { node }
//   }
//   return null
// }

// export class InlineImageNode extends DecoratorNode<React.JSX.Element> {
//   __doc: Doc
//   __src: string
//   __position: Position
//   __altText: string | undefined
//   __width: number | string | undefined
//   __height: number | string | undefined
//   __showCaption: boolean
//   __caption: LexicalEditor

//   static getType(): string {
//     return 'inline-image'
//   }

//   static clone(node: InlineImageNode): InlineImageNode {
//     return new InlineImageNode(
//       node.__doc,
//       node.__src,
//       node.__position,
//       node.__altText,
//       node.__width,
//       node.__height,
//       node.__showCaption,
//       node.__caption,
//       node.__key
//     )
//   }

//   static importJSON(serializedNode: SerializedInlineImageNode): InlineImageNode {
//     const { src, position, altText, height, width, showCaption, caption, doc } = serializedNode
//     const node = $createInlineImageNode({
//       id: doc.value,
//       collection: doc.relationTo,
//       src,
//       position,
//       altText,
//       width,
//       height,
//       showCaption
//     })
//     const nestedEditor = node.__caption
//     const editorState = nestedEditor.parseEditorState(caption.editorState)
//     if (!editorState.isEmpty()) {
//       nestedEditor.setEditorState(editorState)
//     }
//     return node
//   }

//   static importDOM(): DOMConversionMap | null {
//     return {
//       img: (node: Node) => ({
//         conversion: convertInlineImageElement,
//         priority: 0
//       })
//     }
//   }

//   constructor(
//     doc: Doc,
//     src: string,
//     position: Position,
//     altText?: string,
//     width?: number | string,
//     height?: number | string,
//     showCaption?: boolean,
//     caption?: LexicalEditor,
//     key?: NodeKey
//   ) {
//     super(key)
//     this.__doc = doc
//     this.__src = src
//     this.__position = position
//     this.__altText = altText
//     this.__width = width
//     this.__height = height
//     this.__showCaption = showCaption ?? false
//     this.__caption = caption ?? createEditor()
//   }

//   exportDOM(): DOMExportOutput {
//     const element = document.createElement('img')
//     element.setAttribute('data-id', this.__doc.value)
//     element.setAttribute('data-collection', this.__doc.relationTo)
//     element.setAttribute('src', this.__src)
//     element.setAttribute('alt', this.__altText as string)

//     // Width and height will be undefined for SVGs
//     if (this.__width != null) {
//       element.setAttribute('width', this.__width.toString())
//     }
//     if (this.__height != null) {
//       element.setAttribute('height', this.__height.toString())
//     }
//     return { element }
//   }

//   exportJSON(): SerializedInlineImageNode {
//     return {
//       doc: this.__doc,
//       src: this.getSrc(),
//       position: this.__position,
//       altText: this.getAltText(),
//       height: this.__height,
//       width: this.__width,
//       showCaption: this.__showCaption,
//       caption: this.__caption.toJSON(),
//       type: 'inline-image',
//       version: 1
//     }
//   }

//   getSrc(): string {
//     return this.__src
//   }

//   getAltText(): string {
//     return this.__altText as string
//   }

//   setAltText(altText: string): void {
//     const writable = this.getWritable()
//     writable.__altText = altText
//   }

//   setWidthAndHeight(width: number | string, height: number | string): void {
//     const writable = this.getWritable()
//     writable.__width = width
//     writable.__height = height
//   }

//   getShowCaption(): boolean {
//     return this.__showCaption
//   }

//   setShowCaption(showCaption: boolean): void {
//     const writable = this.getWritable()
//     writable.__showCaption = showCaption
//   }

//   getPosition(): Position {
//     return this.__position
//   }

//   setPosition(position: Position): void {
//     const writable = this.getWritable()
//     writable.__position = position
//   }

//   update(payload: InlineImageAttributes): void {
//     const writable = this.getWritable()
//     const { id, collection, src, position, altText, height, width, showCaption } = payload
//     if (id != null) {
//       writable.__doc.value = id
//     }
//     if (collection != null) {
//       writable.__doc.relationTo = collection
//     }
//     if (src != null) {
//       writable.__src = src
//     }
//     if (position != null) {
//       writable.__position = position
//     }
//     if (altText != null) {
//       writable.__altText = altText
//     }
//     if (width != null) {
//       writable.__width = width
//     }
//     if (height != null) {
//       writable.__height = height
//     }
//     if (showCaption != null) {
//       writable.__showCaption = showCaption
//     }
//   }

//   // View

//   createDOM(config: EditorConfig): HTMLElement {
//     const span = document.createElement('span')
//     const className = `${config.theme.inlineImage} position-${this.__position}`
//     if (className !== undefined) {
//       span.className = className
//     }
//     return span
//   }

//   updateDOM(prevNode: InlineImageNode, dom: HTMLElement, config: EditorConfig): boolean {
//     const position = this.__position
//     if (position !== prevNode.__position) {
//       const className = `${config.theme.inlineImage} position-${position}`
//       if (className !== undefined) {
//         dom.className = className
//       }
//       return true
//     }
//     if (this.__showCaption !== prevNode.__showCaption) return true
//     return false
//   }

//   decorate(): React.JSX.Element {
//     return (
//       <Suspense fallback={null}>
//         <InlineImageComponent
//           id={this.__doc.value}
//           collection={this.__doc.relationTo}
//           src={this.__src}
//           position={this.__position}
//           altText={this.__altText}
//           width={this.__width}
//           height={this.__height}
//           showCaption={this.__showCaption}
//           caption={this.__caption}
//           nodeKey={this.getKey()}
//         />
//       </Suspense>
//     )
//   }
// }

// export function $createInlineImageNode({
//   id,
//   collection,
//   src,
//   position,
//   altText,
//   height,
//   width,
//   showCaption,
//   caption,
//   key
// }: InlineImageAttributes): InlineImageNode {
//   const doc: Doc = { value: id, relationTo: collection }
//   return $applyNodeReplacement(
//     new InlineImageNode(doc, src, position, altText, width, height, showCaption, caption, key)
//   )
// }

// export function $isInlineImageNode(node: LexicalNode | null | undefined): node is InlineImageNode {
//   return node instanceof InlineImageNode
// }
