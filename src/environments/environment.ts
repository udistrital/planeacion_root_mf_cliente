export const environment = {
    production: false,
    entorno: "test",
    autenticacion: true,
    notificaciones: false,
    menuApps: false,
    appname: "PLANEACION",
    appMenu: "PLANEACION",
    TOKEN: {
      AUTORIZATION_URL:
        "https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize",
      CLIENTE_ID: "e36v1MPQk2jbz9KM4SmKhk8Cyw0a",
      RESPONSE_TYPE: "id_token token",
      SCOPE: "openid email",
      REDIRECT_URL: "http://localhost:4200/",
      SIGN_OUT_URL: "https://autenticacion.portaloas.udistrital.edu.co/oidc/logout",
      SIGN_OUT_REDIRECT_URL: "http://localhost:4200/",
      AUTENTICACION_MID: "https://autenticacion.portaloas.udistrital.edu.co/apioas/autenticacion_mid/v1/token/userRol",
    },
    parcels: {
      "@udistrital/root-config": "//localhost:4200/udistrital-root-config.js",
      "@udistrital/core-mf": "//localhost:4201/main.js",
      "@udistrital/planeacion-formulacion-mf": "//localhost:4202/main.js",
      "@udistrital/planeacion-seguimiento-mf": "//localhost:4203/main.js",
      "@udistrital/planeacion-utilidades-mf": "//localhost:4204/main.js",
      "@udistrital/planeacion-construccion-mf": "//localhost:4205/main.js",
      "@udistrital/planeacion-pendientes-mf": "//localhost:4206/main.js",
    }
  };