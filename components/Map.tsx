import React from 'react'

type Props = {}

const Map = (props: Props) => {
  return (
    <>
      <iframe
        width="100%"
        height={500}
        src={`https://maps.google.com/maps?q=35.70199528343405,139.58207387376063&t=&z=17&ie=UTF8&iwloc=&output=embed`}
        frameBorder={0}
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
      />
    </>
  )
}

export default Map