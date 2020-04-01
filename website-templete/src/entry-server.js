import { createApp } from './main'

export default context => {
  return new Promise((resolve, reject) => {
    const { app } = createApp()
    resolve(app);
  })
}
