const handleUserRouter = (req, res) => {
  const method = req.method // GET POST
  const url = req.url
  const path = url.split('?')[0]
  // 获取用户信息
  if (method === 'GET' && req.path === '/api/user/login') {
    return {
        msg: '登录成功'
    }
  }
}

export default handleUserRouter
