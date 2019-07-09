import auth0 from "auth0-js";
import jwtDecode from "jwt-decode";

const LOGIN_SUCCESS_PAGE = "/secret";
const LOGIN_FAILURE_PAGE = "/";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "g3ram.auth0.com",
    clientID: "ehSrxLPJRs3fNvajYPM4vNkbnoS0Ge5N",
    redirectUri: "http://localhost:3000/callback",
    audience: "https://g3ram.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid"
  });

  constructor() {
    this.login = this.login.bind(this);
  }
  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResults) => {
      if (authResults && authResults.accessToken && authResults.idToken) {
        console.log(`:: EXPIRES AT :: ${authResults.expiresAt}`);
        let expiresAt = JSON.stringify(
          authResults.expiresIn * 1000 + new Date().getTime()
        );
        console.log(`:: EXPIRES AT IS :: ${expiresAt}`);
        localStorage.setItem("access_token", authResults.accessToken);
        localStorage.setItem("id_token", authResults.idToken);
        localStorage.setItem("expires_at", expiresAt);
        window.location.hash = "";
        window.location.pathname = LOGIN_SUCCESS_PAGE;
      } else if (err) {
        window.location.pathname = LOGIN_FAILURE_PAGE;
        console.log(err);
      }
    });
  }

  isAuthenticated() {
    let expiresAt = localStorage.getItem("expires_at");
    console.log(`:: EXPIRES AT IS AUTHENTICATED IS :: ${expiresAt}`);
    return new Date().getTime() < expiresAt;
  }

  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    window.location.pathname = LOGIN_FAILURE_PAGE;
  }

  getProfile() {
    if (localStorage.getItem("id_token")) {
      return jwtDecode(localStorage.getItem("id_token"));
    } else {
      return {};
    }
  }
}
