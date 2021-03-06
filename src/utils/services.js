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
  return request(`/users/${login}/starred?page=${pageNo}&per_page=${pageSize}`)
}

/**
 * 获取某个用户的followers
 * @param {String} name 用户名
 */
export const getUserFollers = name => request(`/user/${name}}/followers`)

/**
 * 搜索仓库
 * @param {String} q 搜索关键字
 * @param {Number} no 分页页面
 * @param {String} sort 排序关键字
 * @param {String} order 顺序or倒叙
 */
export const searchRegistry = (q, no, sort = '', order = '') => request(`/search/repositories?q=${q}&sort=${sort}&order=${order}&page=${no}&per_page=20`)

/**
 * 搜索用户
 * @param {String} q 搜索关键字
 * @param {Number} no 分页页码
 * @param {String}} order 排序关键字
 */
export const searchUsers = (q, no, order = '') => request(`/search/users?q=${q}&sort=&order=${order}&page=${no}&per_page=20`)

/**
 * 搜索issues
 * @param {String} q 搜索关键字
 * @param {Number} no 分页页码
 * @param {String}} order 排序关键字
 */
export const searchIssues = (q, no, order = '') => request(`/search/issues?q=${q}&sort=&order=${order}&page=${no}&per_page=20`)

/**
 * 搜索codes
 * @param {String} q 搜索关键字
 * @param {Number} no 分页页码
 * @param {String}} order 排序关键字
 */
export const searchCodes = (q, no, order = '') => request(`/search/code?q=${q}&sort=&order=${order}&page=${no}&per_page=20`)

/**
 * 用户timeline
 */
export const getUserTimeline = (no, user) => request(`/users/${user}/received_events?page=${no}`)

/**
 * get login user github contributions
 */
export const getLoginUserContributions = (user) => request(`/oauth/${user}/count`, {
  baseUrl: 'http://www.shenyiling.cn:3002'
})

/**
 * 根据用户名查找用户
 * @param {String} name 用户名
 */
export const getUser = name => request(`/users/${name}`)

/**
 * 获取某个仓库
 * @param {String} path 仓库路径
 */
export const getRepository = path => request(`/repos${path}`)

/**
 * 
 * @param {String} path 
 */
export const getRepositoryReadme = path => request(`/repos${path}/readme`)

/**
 * fetch one repo tags
 * @param {String} path 
 */
export const getRepoTopics = path => request(`/repos${path}/topics`, {
  headers: {
    Accept: 'application/vnd.github.mercy-preview+json'
  }
})
