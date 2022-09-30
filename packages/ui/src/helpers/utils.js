const Utils = {
  base_uri: process.env.NODE_ENV === 'production' ? `${window.location.protocol}//${window.location.host}` : `http://localhost:${process.env.PORT || 5000}`,
}

export default Utils