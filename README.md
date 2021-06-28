# Server Time

A super light weight package to compensate for the difference in time on the server and client.

>This is a [Meteor][meteor] package with part of it's code published as a companion NPM package made to work with clients other than Meteor. For example your server is Meteor, but you want to build a React Native app for the client. This allows you to share code between your Meteor server and other clients to give you a competitive advantage when bringing your mobile and web application to market.

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->
- [Supporting The Project](#supporting-the-project)
- [Meteor Installation](#meteor-installation)
- [NPM Installation](#npm-installation)
- [Usage Outside Meteor](#usage-outside-meteor)
  - [React Native](#react-native)
- [API](#api)
- [Usage Example](#usage-example)
<!-- /TOC -->

## Supporting The Project

Finding the time to maintain FOSS projects can be quite difficult. I am myself responsible for over 30 personal projects across 2 platforms, as well as Multiple others maintained by the [Meteor Community Packages](https://github.com/meteor-community-packages) organization. Therfore, if you appreciate my work, I ask that you either sponsor my work through GitHub, or donate via Paypal or Patreon. Every dollar helps give cause for spending my free time fielding issues, feature requests, pull requests and releasing updates. Info can be found in the "Sponsor this project" section of the [GitHub Repo](https://github.com/copleykj/socialize-server-time)

## Meteor Installation

```shell
meteor add socialize:server-time
```

## NPM Installation

```shell
npm install --save @socialize/server-time
```

## Usage Outside Meteor

The client side parts of this package are published to NPM as `@socialize/server-time` for use in front ends outside of Meteor.

When using the npm package you'll need to connect to a server, which hosts the server side Meteor code for your app, using `Meteor.connect` as per the [@socialize/react-native-meteor usage example](https://github.com/copleykj/react-native-meteor#example-usage) documentation.

 ```javascript
Meteor.connect('ws://192.168.X.X:3000/websocket');
 ```

### React Native

When using this package with React Native there is some minor setup required by the `@socialize/react-native-meteor` package. See [@socialize/react-native-meteor react-native](https://github.com/copleykj/react-native-meteor#react-native) for necessary instructions.

## API

`ServerTime.now()` - returns a difference compensated timestamp representing the current time on the server.

`ServerTime.date()` - returns a difference compensated Date() object representing the current date on the server.

## Usage Example

```javascript
// Meteor
import { ServerTime } from 'meteor/socialize:server-time';
```

```javascript
// React
import { ServerTime } from 'meteor/socialize:server-time';
```

```javascript
let compensatedDate = ServerTime.date();
```

[meteor]: https://meteor.com
