// 'use client'

// /**
//  * Copyright (c) Meta Platforms, Inc. and affiliates.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  *
//  */

// import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
// import { mergeRegister } from '@lexical/utils'
// import {
//   $getSelection,
//   $isElementNode,
//   $isRangeSelection,
//   COMMAND_PRIORITY_LOW,
//   PASTE_COMMAND,
// } from 'lexical'
// import { useEffect } from 'react'

// import {
//   $toggleLink,
//   type LinkAttributes,
//   LinkNode,
//   TOGGLE_LINK_COMMAND,
// } from '../../../nodes/link-nodes'
// import { encodeRelativeUrl, validateUrl } from '../../../utils/url'

// export function LinkPlugin(): null {
//   const [editor] = useLexicalComposerContext()

//   useEffect(() => {
//     if (!editor.hasNodes([LinkNode])) {
//       throw new Error('LinkPlugin: LinkNode not registered on editor')
//     }
//     return mergeRegister(
//       editor.registerCommand(
//         TOGGLE_LINK_COMMAND,
//         (payload: LinkAttributes & { text?: string }) => {
//           const linkAttributes = payload
//           // TODO - revisit encoding / decoding of URL
//           // validate
//           // currently short-circuiting for custom relative URLs that begin with a forward slash
//           if (
//             linkAttributes?.linkType === 'custom' &&
//             linkAttributes?.url?.startsWith('/') === false
//           ) {
//             if (validateUrl !== undefined && validateUrl(linkAttributes?.url) === false) {
//               return false
//             }
//           }

//           $toggleLink(linkAttributes)
//           return true
//         },
//         COMMAND_PRIORITY_LOW
//       ),
//       validateUrl !== undefined
//         ? editor.registerCommand(
//             PASTE_COMMAND,
//             (event) => {
//               const selection = $getSelection()
//               if (
//                 !$isRangeSelection(selection) ||
//                 selection.isCollapsed() ||
//                 !(event instanceof ClipboardEvent) ||
//                 event.clipboardData == null
//               ) {
//                 return false
//               }
//               const clipboardText = event.clipboardData.getData('text')
//               if (!validateUrl(clipboardText)) {
//                 return false
//               }
//               // If we select nodes that are elements then avoid applying the link.
//               if (!selection.getNodes().some((node) => $isElementNode(node))) {
//                 const linkAttributes: LinkAttributes = {
//                   linkType: 'custom',
//                   url: clipboardText,
//                 }
//                 editor.dispatchCommand(TOGGLE_LINK_COMMAND, linkAttributes)
//                 event.preventDefault()
//                 return true
//               }
//               return false
//             },
//             COMMAND_PRIORITY_LOW
//           )
//         : () => {
//             // Don't paste arbitrary text as a link when there's no validate function
//           }
//     )
//   }, [editor])

//   return null
// }
