export const postData = async (url, data) => {
  const options = {
    method: 'POST',
    body: data
  }

  const response = await fetch(url, options)

  return await response.text()
}

export const getData = async (url) => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, status ${response.status}`)
  }

  return await response.json()
}
