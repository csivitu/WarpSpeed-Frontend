import API, { setAuthToken } from './Api'

export const login = async (email, username) => {
  const res = await API.post("/login", { email, username })
  setAuthToken(res.data.accessToken)
}

export const updateleaderboard = async (wordArr) => {
  await API.post("/score", { wordArr });
}

export const getleaderboard = async () => {
  let res = await API.get("/score")
  return res.data
}



export const logout = async () => {
  const res = await API.post("/logout")
  setAuthToken(res.data.accessToken)
}
