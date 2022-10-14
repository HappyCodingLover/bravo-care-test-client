const orderReducer = (state, action) => {
  switch (action.type) {
    case 'pending':
      return { status: 'pending', data: null, error: null }
    case 'resolved':
      return { status: 'resolved', data: action.data, error: null }
    case 'rejected':
      return { status: 'rejected', data: null, error: action.error }
    default:
      return state
  }
}

export { orderReducer }
