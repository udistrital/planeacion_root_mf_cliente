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
      CLIENTE_ID: "vnDhtcNeM9lEWWFd4oNvrpZxqhMa",
      RESPONSE_TYPE: "id_token token",
      SCOPE: "openid email",
      REDIRECT_URL: "https://pruebaspsisgplanmf.portaloas.udistrital.edu.co",
      SIGN_OUT_URL: "https://autenticacion.portaloas.udistrital.edu.co/oidc/logout",
      SIGN_OUT_REDIRECT_URL: "https://pruebaspsisgplanmf.portaloas.udistrital.edu.co",
      AUTENTICACION_MID: "https://autenticacion.portaloas.udistrital.edu.co/apioas/autenticacion_mid/v1/token/userRol",
    },
    parcels: {
      "@udistrital/root-config": "https://pruebaspsisgplanmf.portaloas.udistrital.edu.co/udistrital-root-config.js",
      "@udistrital/core-mf": "https://pruebascoreclientes.portaloas.udistrital.edu.co/main.js",
      "@udistrital/planeacion-formulacion-mf": "https://pruebaspsisgplanformulacionmf.portaloas.udistrital.edu.co/main.js",
      "@udistrital/planeacion-seguimiento-mf": "https://pruebaspsisgplanseguimientomf.portaloas.udistrital.edu.co/main.js",
      "@udistrital/planeacion-utilidades-mf": "https://pruebaspsisgplanutilidadesmf.portaloas.udistrital.edu.co/main.js",
      "@udistrital/planeacion-construccion-mf": "https://pruebaspsisgplanconstruccionsmf.portaloas.udistrital.edu.co/main.js",
      "@udistrital/planeacion-pendientes-mf": "https://pruebaspsisgplanpendientesmf.portaloas.udistrital.edu.co/main.js",
    }
  };
