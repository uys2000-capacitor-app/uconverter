import { Filesystem, Directory } from '@capacitor/filesystem'

export const getPathInfo = async (name: string) => {
  return await Filesystem.getUri({
    path: `UConverter/${name}`,
    directory: Directory.Documents,
  })
}

export const writeFile = (name: string, data: Blob | string) => {
  return Filesystem.writeFile({
    path: `UConverter/${name}`,
    directory: Directory.Documents,
    data: data,
    recursive: true,
  })
}
