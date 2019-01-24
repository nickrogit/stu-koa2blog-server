const user = require('../models/user')

/**
 * 标签查询
 *
 * @param  {user} 用户名
 * @return {pwd} 密码
 */
const postLogin = async ctx => {
  const user_param = ctx.request.body.user
  const pwd_param = ctx.request.body.pwd
  await user
    .findAll({
      attributes: ['user', 'pwd']
    })
    .then(data => {
      ctx.body = {
        msg: '登录成功',
        code: 200
      }
    })
    .catch(err => {
      ctx.body = {
        msg: err,
        code: 999999
      }
    })
}

module.exports = {
  postLogin
}
