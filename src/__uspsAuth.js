// const config = {
//   username: 'atlantamailing',
//   password: 'W@llaceG01',
//   grant_type: 'authorization',
//   response_type: 'token',
//   scope: 'user.info.ereg,iv1.apis',
//   client_id: '687b8a36-db61-42f7-83f7-11c79bf7785e',
// }

// export const getAuthToken = async () => {
//   await fetch('https://services.usps.com/oauth/authenticate', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     mode: 'no-cors',
//     body: JSON.stringify(config),
//   })
//   console.log('Auth token received')
// }

const myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/json')
myHeaders.append('Cookie', 'TLTSID=b005aa92d8581663910300e0ed96a2ca; NSC_tfswjdft-mc=ffffffff3b223ef445525d5f4f58455e445a4a42378b')
myHeaders.append('Access-Control-Allow-Origin', '*')

const raw = JSON.stringify({
  username: 'atlantamailing',
  password: 'W@llaceG01',
  grant_type: 'authorization',
  response_type: 'token',
  scope: 'user.info.ereg,iv1.apis',
  client_id: '687b8a36-db61-42f7-83f7-11c79bf7785e',
})

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow',
}

const getAuthToken = async () => {
  const response = await fetch('https://services.usps.com/oauth/authenticate', requestOptions)
  const result = await response.json()

  console.log(result)
}

await getAuthToken()
