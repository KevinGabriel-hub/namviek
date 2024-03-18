export default class InternalErrorException extends Error {
  status: number
  constructor(message?: string) {
    super(message || 'INTERNAL_SERVER_ERROR')
    this.status = 500
  }
}
