gradle version should be 6.3 and jdk version <=11

update app icon (yarn add @bam.tech/react-native-make) : react-native set-icon
--path <path_to_png> --background <icon_background_color> --platform
<android|ios>
ex : yarn react-native set-icon --path ./app/global/assets/icon.png --platform
android

AuthNavigator -> HomeMainTabNavigation, Login,
HomeMainTabNavigation -> Home, Profile, Add, Map

backgroundImage: https://pxhere.com/en/photo/1503853

wireless debugging at home : http://100.106.62.233:8081/

---

keystore password : opTima106
key alias : backpacker
key password : optBackMa

---

Generating the release APK (https://reactnative.dev/docs/signed-apk-android)

$ cd android
$ ./gradlew bundleRelease
The generated AAB can be found under android/app/build/outputs/bundle/release/app.aab

---

Testing the release build of your app

cd backpacker/
npx react-native run-android --variant=release

------

keep     "crypto-js": "3.1.9-1",
(latest 4.0.0 has an error)
