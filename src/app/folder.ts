export function isNewFolder(name: string) {
  name = name.trim()
  const split = name.split('(')
  if (split[0] !== 'Neuer Ordner ' || split[1].split(')').length > 0)
    return false
  const number = +split[1].split(')')[0]
  if (!Number.isInteger(number)) return false
  return true
}
