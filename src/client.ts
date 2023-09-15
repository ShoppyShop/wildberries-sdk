import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

class Client {
  private axios: AxiosInstance

  constructor(cfg?: AxiosRequestConfig) {
    this.axios = axios.create(cfg)
  }

  configure(cfg: AxiosRequestConfig) {
    this.axios = axios.create(cfg)
  }

  private async request<T>(cfg: AxiosRequestConfig): Promise<T> {
    return (await this.axios.request<T>(cfg)).data
  }

  get<T>(
    url: string,
    cfg?: Omit<AxiosRequestConfig, 'url' | 'method'>,
  ): Promise<T> {
    return this.request<T>({ ...cfg, url, method: 'get' })
  }

  post<T = void>(
    url: string,
    data?: unknown,
    cfg?: Omit<AxiosRequestConfig, 'url' | 'method' | 'data'>,
  ): Promise<T> {
    return this.request<T>({ ...cfg, url, method: 'post', data })
  }

  patch<T = void>(
    url: string,
    data?: unknown,
    cfg?: Omit<AxiosRequestConfig, 'url' | 'method' | 'data'>,
  ): Promise<T> {
    return this.request<T>({ ...cfg, url, method: 'patch', data })
  }
}

export const client = new Client()
export const configure = client.configure.bind(client)