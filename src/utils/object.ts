export const getProperty = <T>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  object: any,
  path: string,
  defaultValue = null,
): T | null | undefined => {
  if (!path) return undefined

  const pathArray: string[] = Array.isArray(path) ? path : (path.match(/([^[.\]])+/g) as string[])

  const result = pathArray.reduce((prevObj, key) => prevObj?.[key], object)

  return result === undefined ? defaultValue : result
}
