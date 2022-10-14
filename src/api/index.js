const BACKEND_ENDPOINT = 'http://localhost:5000/api'

const fetchFacilities = () => {
  return fetch(`${BACKEND_ENDPOINT}/facilities`).then((response) => {
    if (response.status === 200) return response.json()
    else throw Error(response.message)
  })
}

const fetchOrders = (facility_id) => {
  return fetch(`${BACKEND_ENDPOINT}/nurseOrders`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      facility_id,
    }),
  }).then((response) => {
    if (response.status === 200) return response.json()
    else throw Error(response.message)
  })
}

const fetchSpots = () => {
  return fetch(`${BACKEND_ENDPOINT}/spots`).then((response) => {
    if (response.status === 200) return response.json()
    else throw Error(response.message)
  })
}

const fetchNurses = () => {
  return fetch(`${BACKEND_ENDPOINT}/nurses`).then((response) => {
    if (response.status === 200) return response.json()
    else throw Error(response.message)
  })
}

const fetchFacilitiesWithBestNurse = () => {
  return fetch(`${BACKEND_ENDPOINT}/facilitiesWithBestNurse`).then(
    (response) => {
      if (response.status === 200) return response.json()
      else throw Error(response.message)
    }
  )
}

export {
  fetchFacilities,
  fetchOrders,
  fetchSpots,
  fetchNurses,
  fetchFacilitiesWithBestNurse,
}
