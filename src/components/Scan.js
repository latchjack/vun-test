import React from 'react'
import scandata from './scan.json'


class Scan extends React.Component {
  render() {
    return(
      <>
      {console.log(scandata)}
        <section className="section">

          {/* SCAN SECTION */}
          <div className="scan-container card">
            <div className="containers">
              <p className="title is-3 has-text-centered">{scandata.scan.name}</p>
              
              <div className="has-text-centered">
                <p>{scandata.scan.status}</p>
                <p><span className="title is-6">Scan Started:</span> {scandata.scan.dateStarted}</p>
                <p><span className="title is-6">Scan Completed:</span> {scandata.scan.datCompleted}</p>
              </div>
            </div>

            <div className="containers">
              <p><span className="title is-6">Scanner Names:</span></p>
              {scandata.scan.scanners.map((scanner, i) => {
                  return (
                    <div key={i}>
                      <p>{scanner}</p>
                    </div>
                  )
              })}
            </div>

            <div className="segment">
            {scandata.scan.assets.map((asset, i) => {
                return (
                  <div className="containers" key={i}>
                    <p><span className="title is-6">ID:</span> {asset.id}</p>
                    <p><span className="title is-6">Name:</span> {asset.name}</p>
                    <p><span className="title is-6">Description:</span> {asset.description}</p>
                  </div>
                )
            })}
            </div>

            <div className="segment">
            {scandata.scan.vulnerabilities.map((vun, i) => {
              return (
                <div className="containers" key={i}>
                  <p><span className="title is-6">ID:</span> {vun.id}</p>
                  <p><span className="title is-6">Name:</span> {vun.name}</p>
                  <p><span className="title is-6">Severity:</span> {vun.severity}</p>
                  <p><span className="title is-6">Score:</span> {vun.cvssBaseScore}</p>
                  <p><span className="title is-6">References:</span> {vun.references}</p>
                  <p><span className="title is-6">Solution:</span> {vun.solution}</p>
                  <p><span className="title is-6">Description:</span> {vun.description}</p>
                  <p><span className="title is-6">Affected Assets:</span> {parseInt(scandata.scan.vulnerabilities.affectedAssets)}</p>
                </div>
              )
            })}
            </div>


            <div className="containers">
              <p className="title is-3 has-text-centered">Severity</p>
              <p><span className="title is-6">Critical:</span> {scandata.scan.severityCounts.critical}</p>
              <p><span className="title is-6">High:</span> {scandata.scan.severityCounts.high}</p>
              <p><span className="title is-6">Medium:</span> {scandata.scan.severityCounts.medium}</p>
              <p><span className="title is-6">Low:</span> {scandata.scan.severityCounts.low}</p>
            </div>





          </div>

        </section>
      </>
    )
  }
}
export default Scan