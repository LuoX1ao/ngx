import { MenuItem } from './menu-item';

export const MENUS: MenuItem[] = [{
    title: 'Home',
    url: '/home',
    home: true,
    selected: true
}, {
    title: 'Back End',
    url: '/back-end',
    children: [{
        title: 'Apache',
        url: '/back-end/apache'
    }, {
        title: 'Java',
        url: '/back-end/java'
    }, {
        title: 'PHP',
        url: '/back-end/php'
    }]
}, {
    title: 'Database',
    url: 'database',
    children: [{
        title: 'MYSQL',
        url: '/database/mysql'
    }, {
        title: 'Oracle',
        url: '/database/oracle'
    }, {
        title: 'SQLServer',
        url: '/database/sqlserver'
    }]
}, {
    title: 'H5',
    url: 'h5',
    children: [{
        title: 'Angular',
        url: '/h5/angular-list'
    }, {
        title: 'Javascript',
        url: '/h5/javascript'
    }, {
        title: 'React',
        url: '/h5/react'
    }]
}, {
    title: 'IOS',
    url: '/ios'
}, {
    title: 'Android',
    url: '/android'
}, {
    title: 'Other',
    url: '/other'
}];
