import React from 'react'
import scandata from './scan.json'

class Scan extends React.Component {
  render() {
    return(
      <>
      {console.log(scandata)}
        <div className="main-container">

          {/* USER SECTION */}
          <div className="user-container">
            <h1>User: {scandata.user.displayName}</h1>
            <h1>Email: {scandata.user.email}</h1>

            {scandata.user.notifications.map((notification, i) => {
              return (
                <div className="notification-container" key={i}>
                  <p>Notification ID: {notification.id}</p>
                  <p>Date: {notification.date}</p>
                  <p>Message: {notification.message}</p>
                </div>
              )
            })}
          </div>

          {/* SCAN SECTION */}
          <div className="scan-container">
            <p>{scandata.scan.name}</p>
            <p>{scandata.scan.status}</p>

            <p>Scan Started: {scandata.scan.dateStarted}</p>
            <p>Scan Completed: {scandata.scan.datCompleted}</p>

            {scandata.scan.assets.map((asset, i) => {
                return (
                  <div className="asset-container" key={i}>
                    <p>ID: {asset.id}</p>
                    <p>name: {asset.date}</p>
                    <p>Description: {asset.message}</p>
                  </div>
                )
            })}

            {scandata.scan.scanners.map((scanner, i) => {
                return (
                  <div className="scanner-container" key={i}>
                    <p>Scanner Name: {scanner}</p>
                  </div>
                )
            })}



          </div>

        </div>
      </>
    )
  }
}
export default Scan