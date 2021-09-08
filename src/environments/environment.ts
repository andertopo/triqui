// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  environmentTag: 'test',
  NOTIFICATIONS_HOST: 'http://localhost:1337',
  // NOTIFICATIONS_HOST: 'https://mimovistar-api-notifications.azurewebsites.net',
  // NOTIFICATIONS_HOST: 'https://aprodnotificacioneswa01.azurewebsites.net',
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
