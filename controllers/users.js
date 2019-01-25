const users = require('../models/users')
const md5 = require('js-md5')
/**
 * 标签查询
 *
 * @param  {user} 用户名
 * @return {pwd} 密码
 */
const postLogin = async ctx => {
  const userParam = ctx.request.body.user || ''
  const pwdParam = ctx.request.body.pwd || ''
  if (userParam === '' || pwdParam === '') {
    ctx.body = {
      msg: '用户或密码不能为空',
      code: 999999
    }
    return false
  }
  await users
    .findAll({
      attributes: ['user', 'pwd', 'name']
    })
    .then(data => {
      let userData = data[0].dataValues
      if (userParam !== userData.user) {
        ctx.body = {
          msg: '用户不正确',
          code: 999999
        }
        return false
      }
      let pwdmd5 = md5(pwdParam)
      if (pwdmd5 !== userData.pwd) {
        ctx.body = {
          msg: '密码不正确',
          code: 999999
        }
        return false
      }
      ctx.body = {
        msg: '登录成功',
        code: 200,
        data: {
          user: userData.user,
          name: userData.name
        }
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
