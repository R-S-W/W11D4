


export const signup = (payload)=>{
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: payload
  })
}


export const login = (payload)=> (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {payload}
  })
)

export const logout = ()=>(
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
)