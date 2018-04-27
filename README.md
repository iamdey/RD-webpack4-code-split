# webpack4 code splitting and polyfill

How to optimize vendor and register globals ?

This is an example with an heavy dependency (moment) and `babel-polyfill`. There  is 2 webpack configs:

## bad working config

`yarn start`: moment and babel-polyfill are in vendor chunk and start app in `dist`: http://127.0.0.1:8080/

We can see in the console, the `regeneratorRuntime` polyfill is correctly registered but moment is duplicated in app and vendor chunk.

## good not working config

`yarn start2`: same as above with `optimization.splitChunks` which test `vendor`

this start app in dist2: http://127.0.0.1:8080/

When debugging we see that vendor is loaded right after manifest and finally app.
But app is executed **before** vendor.

In the working example, vendor is executed right after being loaded (before app being loaded)

## What to do ?

* put polyfill in app: I don't want that
* leave webpack do the code splitting itself: I don't want that because in real world I want very long caching even betwwen release on vendor and keep app as small as possible
* the webpack config is incorrect: Please tell me :)
