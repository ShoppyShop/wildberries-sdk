import { client } from '../../client'
import {
  GetFeedbacksParams,
  GetFeedbacksResponse,
  UpdateFeedbackData,
} from './types/feedbacks'

const URL = 'https://feedbacks-api.wb.ru/api/v1/feedbacks'

export const getFeedbacks = (params: GetFeedbacksParams) =>
  client.get<GetFeedbacksResponse>(URL, { params })

export const updateFeedback = (data: UpdateFeedbackData) =>
  client.patch(URL, data)
