# Server Time #

A super light weight package to compensate for the difference in time on the server and client.

## API ##

`ServerTime.now()` - returns a difference compensated timestamp representing the current time on the server.

`ServerTime.date()` - returns a difference compensated Date() object representing the current date on the server.