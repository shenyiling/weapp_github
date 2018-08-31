import {
  request,
  Base64
} from './helper'

/**
 * 登录
 * @param {String} username 用户名
 * @param {String} password 密码
 */
export const login = (username, password) => {
  wx.setStorageSync('base64Account', Base64.encode(`${username}:${password}`))
  return request('/user')
}

/**
 * 获取用户starred仓库
 * @param {Number} pageNo 分页页码
 * @param {Number} pageSize 分页单页数量
 */
export const getUserStarred = (pageNo, pageSize) => {
  const {
    login
  } = wx.getStorageSync('userInfo')
  return request(`/users/${login}/starredpage=${pageNo}&per_page=${pageSize}`)
}

/**
 * 获取某个用户的followers
 * @param {String} name 用户名
 */
export const getUserFollers = name => request(`/user/${name}}/followers`)

/**
 * 搜索仓库
 * @param {String} q 搜索关键字
 * @param {String} sort 排序关键字
 * @param {String} order 顺序or倒叙
 */
export const searchRegistry = (q, sort = '', order = '') => request(`search/repositories?q=${q}&sort=${sort}&order=${order}`)
