export const environment = {
  production: true,
  environmentTag: 'local',
  NOTIFICATIONS_HOST: 'http://localhost:1337',
  LOGIN_PATH: '/login',
  GET_TOKEN_PATH: '/app-token',
  GET_REDIRECTIONS_PATH: '/redirection',//pendiente
  NEW_NOTIFICATION_PATH: '/notification/send',
  HISTORIC_NOTIFICATIONS_PATH: '/notification/paginated',
  EXPORT_NOTIFICATIONS_PATH: '/notification/export-file',
  EXPORT_NOTIFICATIONS_SENDED_PATH: '/notification-line/generate-file-sended',
  EXPORT_NOTIFICATIONS_OPENED_PATH: '/notification-line/generate-file-opened',
  EXPORT_NOTIFICATIONS_ERRORS_PATH: '/notification-error',
  DOWNLOAD_FILE_PATH: '/file/download',
  GET_DATABASE_STATES_PATH: '/client-configuration/database-states',
  GET_PLATFORMS_PATH: '/client-configuration/types-send',
  GET_REMINDER_MESSAGE_PATH: '/reminder-notification',
  GET_RATING_MESSAGE_PATH: '/rating-notification',

  SERVICETOKEN: {
    USER: 'adminPlatform',
    PASSWORD: 'N0t1$4dm1nT3l3f0n1c4',
    KEY: 'vyJ6dzXyuaJfwNGju1Yc5VRnb57jGYtA',
    IV: 'A35C4B694A8C64FF'
  }
};
