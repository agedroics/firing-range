const prod = {
  host: window.location.host,
}

const dev = {
  host: 'localhost:8080',
}

const config = process.env.NODE_ENV === 'development' ? dev : prod

export default config
