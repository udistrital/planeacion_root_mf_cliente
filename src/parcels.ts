export const parcels2 = {
    "@udistrital/root-config": {
        import: "//localhost:4200/udistrital-root-config.js",
    },
    "@udistrital/core-mf": {
        import: "//localhost:4201/main.js",
    },
    "@udistrital/planeacion-formulacion-mf": {
        import: "//localhost:4202/main.js",
        path: "formulacion",
    },
    "@udistrital/planeacion-seguimiento-mf": {
        import: "//localhost:4203/main.js",
        path: "seguimiento",
    },
    "@udistrital/planeacion-utilidades-mf": {
        import: "//localhost:4204/main.js",
        path: "utilidades",
    },
    "@udistrital/planeacion-construccion-mf": {
        import: "//localhost:4205/main.js",
        path: "construccion",
    },
    "@udistrital/planeacion-pendientes-mf": {
        import: "//localhost:4206/main.js",
        path: "pendientes",
    },
}