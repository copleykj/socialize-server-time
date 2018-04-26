# Server Time

A super light weight package to compensate for the difference in time on the server and client.

<!-- TOC START min:1 max:3 link:true update:true -->
- [Server Time](#server-time)
  - [Supporting the Project](#supporting-the-project)
  - [Meteor Installation](#meteor-installation)
  - [React Native Installation](#react-native-installation)
  - [API](#api)
  - [Meteor Usage Example](#meteor-usage-example)
  - [React Native Usage Example](#react-native-usage-example)

<!-- TOC END -->

## Supporting the Project
In the spirit of keeping this and all of the packages in the [Socialize](https://atmospherejs.com/socialize) set alive, I ask that if you find this package useful, please donate to it's development.

Litecoin: LXLBD9sC5dV79eQkwj7tFusUHvJA5nhuD3 / [Patreon](https://www.patreon.com/user?u=4866588) / [Paypal](https://www.paypal.me/copleykj)

## Meteor Installation

```shell
$ meteor add socialize:server-time
```

## React Native Installation

```shell
$ npm install --save @socialize/server-time
```

> **Note**
>
>  When using with React Native, you'll need to connect to a server which hosts the server side Meteor code for your app using `Meteor.connect` as per the [@socialize/react-native-meteor](https://www.npmjs.com/package/@socialize/react-native-meteor#example-usage) documentation.

 ```javascript
Meteor.connect('ws://192.168.X.X:3000/websocket');
 ```

## API

`ServerTime.now()` - returns a difference compensated timestamp representing the current time on the server.

`ServerTime.date()` - returns a difference compensated Date() object representing the current date on the server.

## Meteor Usage Example

```javascript
import { ServerTime } from 'meteor/socialize:server-time';

let compensatedDate = ServerTime.date();
```

## React Native Usage Example

```javascript
import { ServerTime } from 'meteor/socialize:server-time';

let compensatedDate = ServerTime.date();
```
