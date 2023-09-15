export interface GetFeedbacksParams {
  isAnswered: boolean
  nmId?: number
  take: number
  skip: number
  order?: 'dateAsc' | 'dateDesc'
  dateFrom?: number
  dateTo?: number
}

export interface GetFeedbacksResponse {
  data: {
    countUnanswered: number
    countArchive: number
    feedbacks: Array<{
      id: string
      userName: string
      matchingSize: '' | 'ok' | 'smaller' | 'bigger'
      text: string
      productValuation: number
      createdDate: string
      state: 'none' | 'wbRu' | 'deleted'
      answer: null | {
        text: string
        state: 'none' | 'wbRu' | 'reviewRequired' | 'rejected'
        editable: boolean
      }
      productDetails: {
        imtId: number
        nmId: number
        productName: string
        supplierArticle: string | null
        supplierName: string | null
        brandName: string | null
        size: string
      }
      photoLinks: null | Array<{
        fullSize: string
        miniSize: string
      }>
      video: null | {
        uri: string
        thumbnailUri: string
      }
      wasViewed: boolean
      isAbleSupplierFeedbackValuation: boolean
      supplierFeedbackValuation: number
      isAbleSupplierProductValuation: boolean
      supplierProductValuation: number
    }>
  }
  error: boolean
  errorText: string
  additionalErrors: string[] | null
}
