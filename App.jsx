import React from "react"
import ProfileHeader from "./components/ProfileHeader"
import Main from "./components/Main"
import LinkFooter from "./components/LinkFooter"

export default function App() {
  return (
    <div className="container">
      <ProfileHeader />
      <Main />
      <LinkFooter />
    </div>
  )
}
