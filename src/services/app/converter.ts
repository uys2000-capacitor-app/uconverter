import type { UFile } from '@/types/converter'
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { toBlobURL } from '@ffmpeg/util'

const ffmpeg = new FFmpeg()

export const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      const result = reader.result as string
      // "data:xxx;base64," kısmını kes
      const base64 = result.split(',')[1]
      resolve(base64)
    }
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

export const uint8ToBase64 = (u8Arr: Uint8Array) => {
  const CHUNK_SIZE = 0x8000
  const length = u8Arr.length
  const result = []
  let index = 0
  let slice: Uint8Array
  while (index < length) {
    slice = u8Arr.subarray(index, Math.min(index + CHUNK_SIZE, length))
    result.push(String.fromCharCode.apply(null, Array.from(slice)))
    index += CHUNK_SIZE
  }
  return btoa(result.join(''))
}

export const loadFFmpeg = async () => {
  const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm'
  console.log('loading')
  await ffmpeg.load({
    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
  })
  console.log('loaded')
}

export const convert = async (ufile: UFile) => {
  if (!ufile.file) return { url: '', name: '', logs: [] }
  if (!ffmpeg.loaded) await loadFFmpeg()

  const targetName = `${ufile.name}${ufile.target.charAt(0) == '.' ? ufile.target : `.${ufile.target}`}`
  const logs: string[] = []
  const logger = (a: { message: string }) => {
    logs.push(a.message)
    console.log(a.message)
  }
  ffmpeg.off('log', logger)
  ffmpeg.on('log', logger)

  ffmpeg.writeFile(ufile.file.name, new Uint8Array(await ufile.file.arrayBuffer()))
  await ffmpeg.exec(['-i', ufile.file.name, targetName])
  const data = (await ffmpeg.readFile(targetName)) as Uint8Array
  const type = ufile.file.type.replace(ufile.extension, ufile.target)
  const blob = new Blob([data.buffer as BlobPart], { type })

  return {
    blob: blob,
    data: data,
    url: URL.createObjectURL(blob),
    name: targetName,
    logs: logs,
  }
}
