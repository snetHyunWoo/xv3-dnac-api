import Layout from '@/layout'

const assuranceRouter = {
  path: '/assuarance',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Assuarance',
  meta: {
    title: 'Assuarance',
    icon: 'component'
  },
  children: [
    {
      path: 'overview',
      component: () => import('@/views/dna-center/assurance/overview'),
      name: 'Overview',
      meta: { title: 'Overview' }
    },
    {
      path: 'network',
      component: () => import('@/views/dna-center/assurance/network'),
      name: 'Network',
      meta: { title: 'Network' }
    },
    {
      path: 'client',
      component: () => import('@/views/dna-center/assurance/client'),
      name: 'Client',
      meta: { title: 'Client' }
    },
    {
      path: 'application',
      component: () => import('@/views/dna-center/assurance/application'),
      name: 'Application',
      meta: { title: 'Application' }
    },
    {
      path: 'service',
      component: () => import('@/views/dna-center/assurance/service'),
      name: 'Service',
      meta: { title: 'Service' }
    }
  ]
}

export default assuranceRouter
