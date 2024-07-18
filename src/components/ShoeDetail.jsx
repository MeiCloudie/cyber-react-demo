// import React from "react"
import { Link, useLocation, useParams } from "react-router-dom"

const ShoeDetail = () => {
  const params = useParams()
  const pathName = useLocation()

  console.log(params)
  console.log(pathName)

  return (
    <div>
      <Link
        className={
          pathName.pathname == "/shoe-detail/45"
            ? "text-green-500"
            : "text-black"
        }
      />
    </div>
  )
}

export default ShoeDetail
