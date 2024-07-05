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

  parcels: {
    "@udistrital/root-config": "https://pruebaspsisgplanmf.portaloas.udistrital.edu.co/udistrital-root-config.js",
    "@udistrital/core-mf": "https://pruebassgamicroclientes.portaloas.udistrital.edu.co/main.js",
    "@udistrital/planeacion-formulacion-mf": "https://pruebaspsisgplanformulacionmf.portaloas.udistrital.edu.co/main.js",
    "@udistrital/planeacion-pendientes-mf": "https://pruebaspsisgplanpendientesmf.portaloas.udistrital.edu.co/main.js",
    "@udistrital/planeacion-seguimiento-mf": "https://pruebaspsisgplanseguimientomf.portaloas.udistrital.edu.co/main.js",
    "@udistrital/planeacion-construccion-mf": "https://pruebaspsisgplanconstruccionsmf.portaloas.udistrital.edu.co/main.js",
    "@udistrital/planeacion-macroplanes-mf": "https://pruebaspsisgplanmacroplanesmf.portaloas.udistrital.edu.co/main.js",
    "@udistrital/planeacion-evaluacion-mf": "https://pruebaspsisgplanevaluacionmf.portaloas.udistrital.edu.co/main.js",
    "@udistrital/planeacion-utilidades-mf": "https://pruebaspsisgplanutilidadesmf.portaloas.udistrital.edu.co/main.js"
  },
};
