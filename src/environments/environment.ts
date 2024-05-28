export const environment = {
    production: false,
    entorno: "test",
    autenticacion: true,
    notificaciones: false,
    menuApps: false,
    appname: "PLANEACION",
    appMenu: "PLANEACION",

    // Notificaciones
    NOTIFICACION_MID_SERVICE: "https://autenticacion.portaloas.udistrital.edu.co/apioas/notificacion_mid/v1/",

    TOKEN: {
      AUTORIZATION_URL: "https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize",
      CLIENTE_ID: "e36v1MPQk2jbz9KM4SmKhk8Cyw0a",
      RESPONSE_TYPE: "id_token token",
      SCOPE: "openid email",
      REDIRECT_URL: "https://pruebaspsisgplanmf.portaloas.udistrital.edu.co",
      SIGN_OUT_URL: "https://autenticacion.portaloas.udistrital.edu.co/oidc/logout",
      SIGN_OUT_REDIRECT_URL: "https://pruebaspsisgplanmf.portaloas.udistrital.edu.co",
      AUTENTICACION_MID: "https://autenticacion.portaloas.udistrital.edu.co/apioas/autenticacion_mid/v1/token/userRol",
    },
  };