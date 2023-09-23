import { client } from '../../client'
import { STOCKS_URL as URL } from '../urls'
import { UpdateStocksData } from './types/stocks'

export const updateStocks = (warehouseId: number, data: UpdateStocksData) =>
  client.put(`${URL}/${warehouseId}`, data)
