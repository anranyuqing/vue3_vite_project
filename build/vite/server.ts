export function server() {
  return {
    host:true,
    port: 80,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        rewrite: (path) => {
          return path.replace(/^\/api/, '')
        },
      }
    }
  }
}