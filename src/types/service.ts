export type BaseResponse<T> = {
  success: boolean
  data: T
}

export type Response<T> = {
  send: (arg0: T) => void
}

// export type BaseRequest<T> = {
//
// }

// export type BaseRequestHeader = {
//   userId: string
// }
