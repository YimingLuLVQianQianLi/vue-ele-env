import Layout from '@/layout'
export default [
    {
        path: '/qiuliangtest',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('@/views/testcom/qiuliang.vue'),
                name: 'qiuliangtest',
                meta: { title: '测试组件qiuliang-index', icon: 'documentation', affix: true }
            }
        ]
    }
]