import type { UFile } from '@/types/converter'
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { toBlobURL } from '@ffmpeg/util'

const ffmpeg = new FFmpeg()

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

  const targetName = `${ufile.file.name}${ufile.target.charAt(0) == '.' ? '' : '.' + ufile.target}`
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
    url: URL.createObjectURL(blob),
    name: targetName,
    logs: logs,
  }
}
