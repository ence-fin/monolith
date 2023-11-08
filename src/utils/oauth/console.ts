const customConsole = {
  log: (...args: any[]) => {
    const formattedMessage = args.map(arg => {
      return typeof arg === 'string' ? `\x1b[35m${arg}\x1b[0m` : arg
    })
    console.log(...formattedMessage)
  },
  error: (...args: any[]) => {
    const formattedMessage = args.map(arg => {
      return typeof arg === 'string' ? `\x1b[31m${arg}\x1b[0m` : arg
    })
    console.error(...formattedMessage)
  }
}
export default customConsole
