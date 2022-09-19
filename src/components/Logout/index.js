import './index.css'

const Logout = props => {
  const {logout} = props
  return (
    <button type="button" className="Logout" onClick={logout}>
      Logout
    </button>
  )
}

export default Logout
