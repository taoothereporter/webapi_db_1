# OAuth 2.0 REST API Web Service

Dead simple implementation of REST API service with user authentication using Google OAuth 2.0

## Description

This example shows how to connect to web service using OAuth 2.0 using Google Sign In as an external identity provider completely in REST API style. User authentication is done completely on client side. 

Server side is simply in charge of giving response to authorized users - it uses customized middleware for validating JWT-tokens from user request headers using certificate issued by Google.

Client side is Angular SPA with only 2 views - Login page and Dashboard page. Login page contains nothing but Google Sign In button. Dashboard page renders data fetched from single endpoint

This example does not uses ASP.NET Identity as we are not going to store information about users.

## Stack

Server side: ASP.NET Core 3.0 Web API + EFCore + MS SQL Server

Client side: Angular 8.0 ([angularx-social-login](https://github.com/abacritt/angularx-social-login)/[ngx-charts](https://github.com/swimlane/ngx-charts)) + [Tabler](https://github.com/tabler/tabler)

## Links

[Google Sign-In for ASP.NET Core Web APIs](https://blog.zhaytam.com/2019/10/03/google-sign-in-asp-net-core-web-api/) - Zanid Haytam's Blog

[Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/OAuth2) - Google Developers

[Google Sign-In for server-side apps](https://developers.google.com/identity/sign-in/web/server-side-flow) - Google Developers
