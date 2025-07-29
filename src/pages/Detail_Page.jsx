import React from 'react'
import DetailWorkspace from '../components/detail/detailWorkspace'
import Tings from '../components/detail/tings'
import Detailabout from '../components/detail/detailabout'
import Favourite from "../components/detail/favourite"
import Guest from '../components/detail/Guest'
const Detail_Page = () => {
  return (
  <>
  <DetailWorkspace/>
  <Detailabout/>
  <Favourite/>
  <Guest/>
  <Tings/>
  </>
  )
}

export default Detail_Page
