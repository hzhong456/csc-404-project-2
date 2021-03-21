// Filter out students with GPAs >= 2.5
const filterQualified = students =>
  students.filter(({ partialGPA }) =>
    isGPAQualified(partialGPA)
  )

const normalizeName = name => {
  if (name.includes('-')) {
    const hyphenatedName = name.split('-').reduce((acc, n) => {
      return n ? [ ...acc, `${n[0].toUpperCase()}${n.slice(1).toLowerCase()}` ] : acc
    }, [])

    return hyphenatedName.join('-')
  }

  return name[0].toUpperCase() + name.slice(1).toLowerCase()
}

const isGPAQualified = partialGPA =>
  partialGPA >= 2.5

module.exports = {
  filterQualified,
  isGPAQualified,
  normalizeName
}
