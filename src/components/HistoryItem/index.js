/* eslint-disable react/button-has-type */
import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteItem = () => {
    deleteItem(id)
  }

  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>
      <div className="middle-container">
        <img src={logoUrl} className="domain-logo" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <div className="button-container">
        <button
          className="delete-button"
          testid="delete"
          onClick={onDeleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-logo"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
