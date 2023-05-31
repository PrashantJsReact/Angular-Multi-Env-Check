// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  environmentName: "development",
  production: false,
  cashFree: {
    baseUrlPG: 'https://sandbox.cashfree.com/pg',
    baseUrlSplit: 'https://test.cashfree.com',
    'x-client-id': '137262985dc6f60df8c89d6a5a262731', 
    'x-client-secret': '71909436af48eba30ae3098d14d8c3f110e63b52',
  },
  firebase: {
    apiKey: 'AIzaSyAg7cJzo2sMh-5xQ_2MWLSC-XcgayMf8pQ',
    authDomain: 'corp-crs.firebaseapp.com',
    projectId: 'corp-crs',
    storageBucket: 'corp-crs.appspot.com',
    messagingSenderId: '546442608726',
    appId: '1:546442608726:web:8889a76537f20c51bcfbf7',
    measurementId: 'G-DJJ3DNJW8X',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
