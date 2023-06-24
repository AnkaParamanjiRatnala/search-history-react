import './index.css'

const HistoryItem = props => {
  const {itemDetails, onRemoveItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails

  const deleteHistory = () => {
    onRemoveItem(id)
  }
  return (
    <li>
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button type="button" onClick={deleteHistory} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
