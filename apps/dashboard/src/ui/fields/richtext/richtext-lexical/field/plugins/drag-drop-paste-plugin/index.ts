// /**
//  * Copyright (c) Meta Platforms, Inc. and affiliates.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  *
//  */


// import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
// import { DRAG_DROP_PASTE } from '@lexical/rich-text'
// import { isMimeType, mediaFileReader } from '@lexical/utils'
// import { COMMAND_PRIORITY_LOW } from 'lexical'
// import { useEffect } from 'react'

// // import { INSERT_INLINE_IMAGE_COMMAND } from '../inline-image-plugin'

// const ACCEPTABLE_IMAGE_TYPES = ['image/', 'image/heic', 'image/heif', 'image/gif', 'image/webp']

// export function DragDropPaste(): null {
//   const [editor] = useLexicalComposerContext()
//   useEffect(() => {
//     return editor.registerCommand(
//       DRAG_DROP_PASTE,
//       (files) => {
//         void (async () => {
//           const filesResult = await mediaFileReader(
//             files,
//             [ACCEPTABLE_IMAGE_TYPES].flatMap((x) => x)
//           )
//           for (const { file, result } of filesResult) {
//             if (isMimeType(file, ACCEPTABLE_IMAGE_TYPES)) {
//               editor.dispatchCommand(INSERT_INLINE_IMAGE_COMMAND, {
//                 id: '',
//                 collection: '',
//                 src: result,
//                 altText: file.name
//               })
//             }
//           }
//         })()
//         return true
//       },
//       COMMAND_PRIORITY_LOW
//     )
//   }, [editor])
//   return null
// }
