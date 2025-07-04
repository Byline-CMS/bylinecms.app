/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as CollectionsCollectionIndexRouteImport } from './routes/collections/$collection/index'
import { Route as CollectionsCollectionCreateRouteImport } from './routes/collections/$collection/create'
import { Route as CollectionsCollectionIdRouteImport } from './routes/collections/$collection/$id'

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const CollectionsCollectionIndexRoute =
  CollectionsCollectionIndexRouteImport.update({
    id: '/collections/$collection/',
    path: '/collections/$collection/',
    getParentRoute: () => rootRouteImport,
  } as any)
const CollectionsCollectionCreateRoute =
  CollectionsCollectionCreateRouteImport.update({
    id: '/collections/$collection/create',
    path: '/collections/$collection/create',
    getParentRoute: () => rootRouteImport,
  } as any)
const CollectionsCollectionIdRoute = CollectionsCollectionIdRouteImport.update({
  id: '/collections/$collection/$id',
  path: '/collections/$collection/$id',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/collections/$collection/$id': typeof CollectionsCollectionIdRoute
  '/collections/$collection/create': typeof CollectionsCollectionCreateRoute
  '/collections/$collection': typeof CollectionsCollectionIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/collections/$collection/$id': typeof CollectionsCollectionIdRoute
  '/collections/$collection/create': typeof CollectionsCollectionCreateRoute
  '/collections/$collection': typeof CollectionsCollectionIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/collections/$collection/$id': typeof CollectionsCollectionIdRoute
  '/collections/$collection/create': typeof CollectionsCollectionCreateRoute
  '/collections/$collection/': typeof CollectionsCollectionIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/collections/$collection/$id'
    | '/collections/$collection/create'
    | '/collections/$collection'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/collections/$collection/$id'
    | '/collections/$collection/create'
    | '/collections/$collection'
  id:
    | '__root__'
    | '/'
    | '/collections/$collection/$id'
    | '/collections/$collection/create'
    | '/collections/$collection/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CollectionsCollectionIdRoute: typeof CollectionsCollectionIdRoute
  CollectionsCollectionCreateRoute: typeof CollectionsCollectionCreateRoute
  CollectionsCollectionIndexRoute: typeof CollectionsCollectionIndexRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/collections/$collection/': {
      id: '/collections/$collection/'
      path: '/collections/$collection'
      fullPath: '/collections/$collection'
      preLoaderRoute: typeof CollectionsCollectionIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/collections/$collection/create': {
      id: '/collections/$collection/create'
      path: '/collections/$collection/create'
      fullPath: '/collections/$collection/create'
      preLoaderRoute: typeof CollectionsCollectionCreateRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/collections/$collection/$id': {
      id: '/collections/$collection/$id'
      path: '/collections/$collection/$id'
      fullPath: '/collections/$collection/$id'
      preLoaderRoute: typeof CollectionsCollectionIdRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CollectionsCollectionIdRoute: CollectionsCollectionIdRoute,
  CollectionsCollectionCreateRoute: CollectionsCollectionCreateRoute,
  CollectionsCollectionIndexRoute: CollectionsCollectionIndexRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
