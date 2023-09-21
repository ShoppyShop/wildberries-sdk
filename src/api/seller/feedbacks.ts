import { client } from '../../client'
import { FEEDBACKS_URL as URL } from '../urls'
import {
  GetFeedbacksParams,
  GetFeedbacksResponse,
  UpdateFeedbackData,
} from './types/feedbacks'

export const getFeedbacks = (params: GetFeedbacksParams) =>
  client.get<GetFeedbacksResponse>(URL, { params })

export const updateFeedback = (data: UpdateFeedbackData) =>
  client.patch(URL, data)
