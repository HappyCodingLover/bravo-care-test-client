import { memo, useCallback } from 'react'
import { Select } from './styles'

const Dropdown = ({ items, selected, onSelect }) => {
  const handleSelect = useCallback(
    (event) => {
      onSelect(event.target.value)
    },
    [onSelect]
  )
  return (
    <div style={{ margin: 10 }}>
      <Select value={selected} onChange={handleSelect}>
        <option value={undefined} hidden={true}>
          Select Facility
        </option>
        {items?.map(({ facility_id, facility_name }) => (
          <option key={facility_id} value={facility_id}>
            {facility_name}
          </option>
        ))}
      </Select>
    </div>
  )
}

export default memo(Dropdown)
