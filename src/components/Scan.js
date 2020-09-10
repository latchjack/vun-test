import React from 'react'
import scandata from './scan.json'

class Scan extends React.Component {
  render() {
    return(
      <>
      {console.log(scandata)}
        <section className="section">

          {/* USER SECTION */}
          <div className="user-container">
            <div className="login-container">
              <h1><span className="user-details">User:</span> {scandata.user.displayName}</h1>
              <h1><span className="user-details">Email:</span> {scandata.user.email}</h1>
            </div>

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
            <div className="details-container">
              <p>{scandata.scan.name}</p>
              <p>{scandata.scan.status}</p>

              <p>Scan Started: {scandata.scan.dateStarted}</p>
              <p>Scan Completed: {scandata.scan.datCompleted}</p>
            </div>

            <div className="scanner-container">
              <p>Scanner Names:</p>
              {scandata.scan.scanners.map((scanner, i) => {
                  return (
                    <div key={i}>
                      <p>{scanner}</p>
                    </div>
                  )
              })}
            </div>

            {scandata.scan.assets.map((asset, i) => {
                return (
                  <div className="asset-container" key={i}>
                    <p>ID: {asset.id}</p>
                    <p>Name: {asset.name}</p>
                    <p>Description: {asset.description}</p>
                  </div>
                )
            })}

            {scandata.scan.vulnerabilities.map((vun, i) => {
              return (
                <div className="vun-container" key={i}>
                  <p>Vun ID: {vun.id}</p>
                  <p>Name: {vun.name}</p>
                  <p>Severity: {vun.severity}</p>
                  <p>Score: {vun.cvssBaseScore}</p>
                  <p>Score: {vun.references}</p>
                  <p>Score: {vun.solution}</p>
                  <p>Score: {vun.description}</p>
                  <p>Affected Assets: {parseInt(scandata.scan.vulnerabilities.affectedAssets)}</p>
                </div>
              )
            })}

            <div className="sev-container">
              <p>Critical: {scandata.scan.severityCounts.critical}</p>
              <p>High: {scandata.scan.severityCounts.high}</p>
              <p>Medium: {scandata.scan.severityCounts.medium}</p>
              <p>Low: {scandata.scan.severityCounts.low}</p>
            </div>





          </div>

        </section>
      </>
    )
  }
}
export default Scan