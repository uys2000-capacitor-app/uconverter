import { CapacitorHttp, type HttpOptions } from '@capacitor/core'

export const headers = {
  Host: 'mehmetuysal.dev',
}

export const get = (url: string, params?: Record<string, string | string[]>) => {
  const options: HttpOptions = { url: url, headers: headers }
  if (params) options.params = params
  CapacitorHttp.get(options)
}

export const post = (
  url: string,
  params?: Record<string, string | string[]>,
  data?: string | Record<string, unknown>,
) => {
  const options: HttpOptions = { url: url, headers: headers }
  if (params) options.params = params
  if (data) options.data = data
  CapacitorHttp.post(options)
}
