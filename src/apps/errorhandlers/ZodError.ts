import { ZodError, ZodIssue } from 'zod'


const handleZodError = (err: ZodError) => {
  const errorSource: any = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    }
  })

  const statusCode = 400
  return {
    statusCode,
    message: 'Zod Validation Error',
    errorSource,
  }
}
export default handleZodError
