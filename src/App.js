import './App.css'
import Dropdown from './components/Dropdown'
import { useCallback, useEffect, useReducer, useState } from 'react'
import {
  fetchFacilities,
  fetchOrders,
  fetchSpots,
  fetchNurses,
  fetchFacilitiesWithBestNurse,
} from './api'
import { FlexDiv, CenteredDiv, Button } from './components/styles'
import { orderReducer } from './utils/reduers'
import OrderView from './components/OrderView'

function App() {
  const [facilities, setFacilities] = useState()
  const [selectedFacility, setSelectedFacility] = useState(undefined)
  const [state, ordersDispatch] = useReducer(orderReducer, {
    status: 'idle',
    data: null,
    error: null,
  })

  const { status: orderStatus, data: orders } = state

  const onSelect = useCallback((selectedID) => {
    setSelectedFacility(selectedID)
  }, [])

  const handleSubmit = useCallback(
    (event) => {
      if (orderStatus === 'pending') return
      ordersDispatch({ type: 'pending' })
      fetchOrders(selectedFacility)
        .then((response) => {
          if (response.orders) {
            ordersDispatch({ type: 'resolved', data: response.orders })
          }
        })
        .catch((error) => {
          ordersDispatch({ type: 'rejected', data: error.message })
        })
    },
    [selectedFacility, orderStatus]
  )

  const handleQueryFour = useCallback((e) => {
    fetchSpots()
      .then((response) => {
        if (response.spots) console.log(response.spots)
      })
      .catch(() => {})
  }, [])

  const handleQueryFive = useCallback((e) => {
    fetchNurses()
      .then((response) => {
        if (response.nurses) console.log(response.nurses)
      })
      .catch(() => {})
  }, [])

  const handleQuerySix = useCallback((e) => {
    fetchFacilitiesWithBestNurse()
      .then((response) => {
        if (response.facilities) console.log(response.facilities)
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    fetchFacilities()
      .then((response) => {
        if (response.facilities) {
          setFacilities(response.facilities)
        }
      })
      .catch(() => {})
  }, [])

  return (
    <CenteredDiv>
      <FlexDiv>
        <Dropdown
          items={facilities}
          selected={selectedFacility}
          onSelect={onSelect}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </FlexDiv>
      <FlexDiv>
        <OrderView orders={orders}></OrderView>
      </FlexDiv>
      <FlexDiv>
        <Button onClick={handleQueryFour}>Execute Q4 Query</Button>
        <Button onClick={handleQueryFive}>Execute Q5 Query</Button>
        <Button onClick={handleQuerySix}>Execute Q6 Query</Button>
      </FlexDiv>
    </CenteredDiv>
  )
}

export default App
