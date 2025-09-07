import { FileTransfer } from '@capacitor/file-transfer'

export const downloadFile = async (path: string, url: string) => {
  await FileTransfer.downloadFile({
    path: path,
    url: url,
  })
}
