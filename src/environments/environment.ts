export const environment = {
  production: false,
  entorno: "test",
  autenticacion: true,
  notificaciones: true,
  menuApps: false,
  appname: "PLANEACION",
  appMenu: "PLANEACION",

  // Notificaciones
  COLAS_NOTIFICACIONES: {
    PLANEACION: 'JefePlaneacion',
    JEFE_DEPENDENCIA: 'JefeUnidad',
    ASISTENTE_DEPENDENCIA: 'AsistenteUnidad',
    ASISTENTE_PLANEACION: 'AsistentePlaneacion'
  },

  TOKEN: {
    AUTORIZATION_URL: "https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize",
    CLIENTE_ID: "e36v1MPQk2jbz9KM4SmKhk8Cyw0a",
    RESPONSE_TYPE: "id_token token",
    SCOPE: "openid email",
    REDIRECT_URL: "https://pruebaspsisgplanmf.portaloas.udistrital.edu.co/",
    SIGN_OUT_URL: "https://autenticacion.portaloas.udistrital.edu.co/oidc/logout",
    SIGN_OUT_REDIRECT_URL: "https://pruebaspsisgplanmf.portaloas.udistrital.edu.co/",
    AUTENTICACION_MID: "https://autenticacion.portaloas.udistrital.edu.co/apioas/autenticacion_mid/v1/token/userRol",
  },
};
