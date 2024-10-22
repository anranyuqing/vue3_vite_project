interface Window {
  $message: import('naive-ui').MessageProviderInst
  $dialog: import('naive-ui').DialogProviderInst
  $notification: import('naive-ui').NotificationProviderInst
}

interface Pagination {
  current: number
  pageSize: number
  total: number
  size: number
}