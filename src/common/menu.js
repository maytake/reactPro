import { isUrl } from '../utils/utils';





const menuData = [
  {
    name: '系统管理',
    icon: 'user',
    path: 'dashboard',
    children: [
      {
        name: '分析页',
        path: 'analysis',
      },
      {
        name: '监控页',
        path: 'monitor',
      },
      {
        name: '工作台',
        path: 'workplace',
        // hideInBreadcrumb: true,
        // hideInMenu: true,
      },
      {
        name: '测试页',
        path: 'test',
      }
    ],
  },
  {
    name: '基础数据',
    icon: 'form',
    path: 'form',
    children: [

    ],
  },
  {
    name: '组织管理',
    icon: 'table',
    path: 'list',
    children: [
    
    ],
  },
  {
    name: '规则管理',
    icon: 'appstore-o',
    path: 'profile',
    children: [
     
    ],
  },
  {
    name: '会员管理',
    icon: 'user',
    path: 'a',
    children: [
     
    ],
  },
  {
    name: '积分管理',
    icon: 'file-markdown',
    path: 'b',
    children: [
     
    ],
  },
  {
    name: '服务管理',
    icon: 'file-word',
    path: 'c',
    children: [
     
    ],
  },{
    name: '业务管理',
    icon: 'desktop',
    path: 'd',
    children: [
     
    ],
  },{
    name: '套餐管理',
    icon: 'file-text',
    path: 'e',
    children: [
     
    ],
  },{
    name: '消费管理',
    icon: 'laptop',
    path: 'f',
    children: [
     
    ],
  },{
    name: '伙伴管理',
    icon: 'team',
    path: 'g',
    children: [
     
    ],
  },{
    name: '售后管理',
    icon: 'gift',
    path: 'h',
    children: [
     
    ],
  },{
    name: '等级管理',
    icon: 'profile',
    path: 'i',
    children: [
     
    ],
  },
  {
    name: '任务管理',
    icon: 'profile',
    path: 'j',
    children: [
     
    ],
  },{
    name: '活动管理',
    icon: 'profile',
    path: 'k',
    children: [
     
    ],
  },{
    name: 'App管理',
    icon: 'profile',
    path: 'l',
    children: [
     
    ],
  },{
    name: '工单管理',
    icon: 'profile',
    path: 'm',
    children: [
     
    ],
  },{
    name: '沟通管理',
    icon: 'profile',
    path: 'n',
    children: [
     
    ],
  },
  {
    name: '结果页',
    icon: 'check-circle-o',
    path: 'result',
    children: [
      {
        name: '成功',
        path: 'success',
      },
      {
        name: '失败',
        path: 'fail',
      },
    ],
  },
  {
    name: '异常页',
    icon: 'warning',
    path: 'exception',
    children: [
      {
        name: '403',
        path: '403',
      },
      {
        name: '404',
        path: '404',
      },
      {
        name: '500',
        path: '500',
      },
      {
        name: '触发异常',
        path: 'trigger',
        hideInMenu: true,
      },
    ],
  },
  {
    name: '账户',
    icon: 'user',
    path: 'user',
    authority: 'guest',
    children: [
      {
        name: '登录',
        path: 'login',
      },
      {
        name: '注册',
        path: 'register',
      },
      {
        name: '注册结果',
        path: 'register-result',
      },
    ],
  },
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
