import React from 'react'
import scandata from './scan.json'

import circlelogo from '../assets/ncclogo.jpeg'

class Scan extends React.Component {
  render() {
    return(
      <>
      {console.log(scandata)}
        <section className="section">
          <div className="column">
          {/* SCAN SECTION */}
          <div className="scan-container card">
            <div className="containers">
            <img src={circlelogo} alt="logo" width="100px" />
              <p className="title is-3 has-text-centered">{scandata.scan.name}</p>
              
              <div className="has-text-centered">
                <p>{scandata.scan.status} ✅</p>
                <p><span className="title is-6">Scan Started:</span> {scandata.scan.dateStarted}</p>
                <p><span className="title is-6">Scan Completed:</span> {scandata.scan.datCompleted}</p>
              </div>
            </div>

          <div className="scanners">
            <p className="title is-3 has-text-centered">Scanners</p>
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

            <div className="">
            {scandata.scan.assets.map((asset, i) => {
                return (
                  <div className="containers individual-scanner" key={i}>
                    <p><span className="title is-6">Name:</span> {asset.name}</p>
                    <p><span className="title is-6">Description:</span> {asset.description}</p>
                    <p><span className="title is-6">ID:</span> {asset.id}</p>
                  </div>
                )
            })}
            </div>
          </div>

            <div className="column">
            <p className="title is-3 has-text-centered">Vulnerabilities</p>
            {scandata.scan.vulnerabilities.map((vuln, i) => {
              return (
                <div className="containers individual-vuln is-mobile" key={i}>
                  <p><span className="title is-6">Name:</span> {vuln.name}</p>
                  <p><span className="title is-6">ID:</span> {vuln.id}</p>
                  <p><span className="title is-6">Severity:</span> {vuln.severity}</p>
                  <p><span className="title is-6">Affected Assets:</span> {parseInt(scandata.scan.vulnerabilities.affectedAssets)}</p>
                  <p><span className="title is-6">Description:</span> {vuln.description}</p>
                  <p><span className="title is-6">References:</span> {vuln.references}</p>
                  <p><span className="title is-6">Solution:</span> {vuln.solution}</p>
                  <p><span className="title is-6">Score:</span> {vuln.cvssBaseScore}</p>
                </div>
              )
            })}
            </div>


            <div className="containers">
              <p className="title is-3 has-text-centered">Severity</p>
              <p><span className="title is-4">Critical:</span> <span className="subtitle is-4">{scandata.scan.severityCounts.critical}</span></p>
              <p><span className="title is-4">High:</span> <span className="subtitle is-4">{scandata.scan.severityCounts.high}</span></p>
              <p><span className="title is-4">Medium:</span> <span className="subtitle is-4">{scandata.scan.severityCounts.medium}</span></p>
              <p><span className="title is-4">Low:</span> <span className="subtitle is-4">{scandata.scan.severityCounts.low}</span></p>
            </div>





          </div>

          </div>
        </section>
      </>
    )
  }
}
export default Scan