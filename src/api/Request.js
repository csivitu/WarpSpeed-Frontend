import API, { setAuthToken } from './Api'
var a;

export const login = async (email,username)=>{
    const res=await API.post("/login",{email,username})
    setAuthToken(res.data.accessToken)
    a=res.data.accessToken;
}

export const updateleaderboard = async (wordArr)=>{
    const res=await API.post("/score",{wordArr},{
        headers: {
          'Authorization': `Bearer ${a}`
        }
      });
}

export const getleaderboard= async ()=>{
      let res=await API.get("/score")
        return res.data
 }



export const logout=async ()=>{
    const res=await API.post("/logout")
    setAuthToken(res.data.accessToken)
}
