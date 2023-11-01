// eslint-disable-next-line consistent-return
export default function errorHandler(error: any, url = "") {
  /**
   * todo mapping berdasarkan status error
   */
  if (error) {
    if (error.response) {
      if (
        error.response.status === 401 &&
        error.response.data.message !== "Bad credentials" &&
        url === "/login"
      ) {
        localStorage.clear()
        window.location.href = "/login"
      }
      return Promise.reject(error)
    }
  }
}
