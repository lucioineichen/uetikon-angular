export function isNewFolder(name: string) {
  name = name.trim()
  const split = name.split('(')
  if (split[0] !== 'Neuer Ordner ' || split[1].split(')')[1] !== '')
    return false
  const number = +split[1].split(')')[0]
  if (!Number.isInteger(number)) return false
  if (number <= 0) return false
  return true
}

export function getNewFolderNumber(name: string) {
  name = name.trim()
  const split = name.split('(')
  if (split[0] !== 'Neuer Ordner ' || split[1].split(')')[1] !== '') return 0
  const number = +split[1].split(')')[0]
  if (!Number.isInteger(number)) return 0
  if (number <= 0) return 0
  return number
}
