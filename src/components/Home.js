import React from 'react'
import scandata from './scan.json'



const Home = () => (

  <section className="hero is-fullheight-with-navbar is-primary">
    <div className="hero-body">
      <div className="container">

      <section className="section">
      <div className="login-container">
              <h1><span className="title is-6">User:</span> {scandata.user.displayName}</h1>
              <h1><span className="title is-6">Email:</span> {scandata.user.email}</h1>
            </div>

            {/* This maps over the notifications array to return the div below below for each one */}
            <div className="notifications">
              {/* The browser gives an int id to each notification when it maps them */}
              {scandata.user.notifications.map((notification, i) => {
                return (
                  <div className="notification-container" key={i}>
                    <p><span className="title is-6">Notification ID:</span> {notification.id}</p>
                    <p><span className="title is-6">Date:</span> {notification.date}</p>
                    <p><span className="title is-6">Message:</span> {notification.message}</p>
                  </div>
                )
              })}
            </div>
      </section>
      </div>
    </div>
  </section>
)

export default Home