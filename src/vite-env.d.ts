/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MODE: string
  readonly VITE_DEPLOY_TARGET?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}


