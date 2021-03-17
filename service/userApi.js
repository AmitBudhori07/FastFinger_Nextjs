import fetchJson from './fetchJson'

export const register = async ({ name, email, password }) => {
  const url = '/api/auth/signup'
  const obj = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password}),
  }
  try {
    const res = await fetchJson(url, obj);
    console.log(res)
    return res
  } catch (error) {
    return error;
  }
};


export const postScore = async (url, score) => {
  var obj = {
    method: 'POST',
    body: JSON.stringify({ score: score })
  }

  try {
    const res = await fetchJson(url, obj);
    return res
  } catch (error) {
    console.log(error);
  }
}

export const getWords = async (url) => {
  var obj = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ',
    },
 }

  const data = await fetch(url, obj).then(r => r.json());
  console.log(data)
  return data
}