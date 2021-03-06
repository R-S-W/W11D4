



export const postUser = user => {
  return $.ajax({
    url: '/api/users',
    method: "POST",
    data: {user},   // user object nested under the key of user
  })
}

export const postSession = user=>{
  return $.ajax({
    url: '/api/session',
    method: "POST",
    data: {user:user}
  })
}

export const deleteSession = ()=> {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE',
  })
}