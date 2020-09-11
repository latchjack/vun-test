import React from 'react'
import scandata from './scan.json'

import circlelogo from '../assets/ncclogo.jpeg'

class Scan extends React.Component {
  render() {
    return(
      <>
      {console.log(scandata)}
        <section className="section">
          <div className="columns">
          {/* SCAN SECTION */}
          <div className="scan-container card">
            <div className="containers top-info">
            <img src={circlelogo} alt="logo" width="100px" />
              <p className="title is-3 has-text-centered" id="heading">{scandata.scan.name}</p>
              
              <div className="has-text-centered">
                <p>{scandata.scan.status} <span role="img" aria-label="completed tick">✅</span></p>
                <p><span className="title is-6">Scan Started:</span> {scandata.scan.dateStarted}</p>
                <p><span className="title is-6">Scan Completed:</span> {scandata.scan.datCompleted}</p>
              </div>
            </div>

          <p className="title is-3 has-text-centered">Scanners</p>
          <div className="scanners">
            <div className="containers individual-scanner">
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

            <div>
            <p className="title is-3 has-text-centered">Vulnerabilities</p>
            {scandata.scan.vulnerabilities.map((vuln, i) => {
              return (
                <div className="containers individual-vuln is-mobile" key={i}>
                  <p><span className="title is-6">Name:</span> {vuln.name}</p>
                  <p><span className="title is-6">ID:</span> {vuln.id}</p>
                  <p><span className="title is-6">Severity:</span> {vuln.severity}</p>
                  <p><span className="title is-6">Affected Assets:</span> {parseInt(scandata.scan.vulnerabilities.affectedAssets)}</p>
                  <hr />
                  <p><span className="title is-6">Description:</span> {vuln.description}</p>
                  <hr />
                  <p><span className="title is-6">References:</span> <a href={vuln.references} target="_blank" rel="noopener noreferrer" className="ref-link">Click here</a></p>
                  <hr />
                  <div className="columns">
                    <div className="column is-mobile">
                      <p><span className="title is-6">Solution:</span></p>
                      <p>{vuln.solution}</p>
                    </div>
                  </div>
                  <hr />
                  <p><span className="title is-6">Score:</span> {vuln.cvssBaseScore}</p>
                </div>
              )
            })}
            </div>


            <div className="containers">
              <p className="title is-3 has-text-centered">Severity</p>
              <div className="individual-vuln">
                <p><span className="title is-4">Critical:</span> <span className="subtitle is-4">{scandata.scan.severityCounts.critical}</span></p>
                <p><span className="title is-4">High:</span> <span className="subtitle is-4">{scandata.scan.severityCounts.high}</span></p>
                <p><span className="title is-4">Medium:</span> <span className="subtitle is-4">{scandata.scan.severityCounts.medium}</span></p>
                <p><span className="title is-4">Low:</span> <span className="subtitle is-4">{scandata.scan.severityCounts.low}</span></p>
              </div>
            </div>





          </div>

          </div>
        </section>
      </>
    )
  }
}
export default Scan