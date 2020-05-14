// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import * as firebaseui from 'firebaseui'
// Add the Firebase products that you want to use
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAxmCU5ndBfa0MbWYeb2cu3Vrkl2JbyAck",
    authDomain: "to-do-e8d1e.firebaseapp.com",
    databaseURL: "https://to-do-e8d1e.firebaseio.com",
    projectId: "to-do-e8d1e",
    storageBucket: "to-do-e8d1e.appspot.com",
    messagingSenderId: "797209960245",
    appId: "1:797209960245:web:855871ae7a2b48b9c9b67c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default (function Authentication(){
      const authenticate = function(){
            const loginBtn = document.querySelector("#loginBtn");
            const logoutBtn = document.querySelector("#logoutBtn");
            const authContainer = document.querySelector("#firebaseui-auth-container");
            const userText = document.querySelector(".user");
            const username = document.querySelector("#username");
            var uiConfig = {
                callbacks: {
                    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                      loginBtn.style.display="none";
                      logoutBtn.style.display = "block";
                      authContainer.style.display="none";
                      var user = authResult.user;
                      // Do something with the returned AuthResult.
                      // Return type determines whether we continue the redirect automatically
                      // or whether we leave that to developer to handle.
                      return false;
                    },
                    signInFailure: function(error) {
                      // Some unrecoverable error occurred during sign-in.
                      // Return a promise when error handling is completed and FirebaseUI
                      // will reset, clearing any UI. This commonly occurs for error code
                      // 'firebaseui/anonymous-upgrade-merge-conflict' when merge conflict
                      // occurs. Check below for more details on this.
                      return handleUIError(error);
                    },
                    uiShown: function() {
                      // The widget is rendered.
                      // Hide the loader.
                    }
                  },
                  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
                  // Query parameter name for mode.
                  queryParameterForWidgetMode: 'mode',
                  // Query parameter name for sign in success url.
                  queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
                  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
                  signInFlow: 'popup',
                  signInSuccessUrl: '#',
                  signInOptions: [
                    // Leave the lines as is for the providers you want to offer your users.
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    {
                      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                      // Whether the display name should be displayed in the Sign Up page.
                      requireDisplayName: true
                    },
                  ],
                  // Set to true if you only have a single federated provider like
                  // firebase.auth.GoogleAuthProvider.PROVIDER_ID and you would like to
                  // immediately redirect to the provider's site instead of showing a
                  // 'Sign in with Provider' button first. In order for this to take
                  // effect, the signInFlow option must also be set to 'redirect'.
                  immediateFederatedRedirect: false,
                  // tosUrl and privacyPolicyUrl accept either url string or a callback
                  // function.
                  // Terms of service url/callback.
                  tosUrl: '#',
                  // Privacy policy url/callback.
                  privacyPolicyUrl: function() {
                    window.location.assign('#');
                  }
                };
            var ui = new firebaseui.auth.AuthUI(firebase.auth());
            // The start method will wait until the DOM is loaded.
            loginBtn.addEventListener('click',()=>{
                authContainer.style.display = "block";

            })
            let initApp = function() {
                firebase.auth().onAuthStateChanged(function(user) {
                  if (user) {
                    // User is signed in.
                    var displayName = user.displayName;
                    loginBtn.style.display="none";
                      logoutBtn.style.display = "block";
                      authContainer.style.display="none";
                      userText.style.visibility = "visible";
                      username.textContent = displayName;

                  } else {
                    // User is signed out.
                    loginBtn.style.display="block";
                    logoutBtn.style.display="none";
                    userText.style.visibility="hidden";
                  }
                }, function(error) {
                  console.log(error);
                });
              };
        
              window.addEventListener('load', function() {
                initApp();
              });
            ui.start('#firebaseui-auth-container', uiConfig);
           if (ui.isPendingRedirect()) {
                authContainer.style.display = "block";
                ui.start('#firebaseui-auth-container', uiConfig);
              }
            logoutBtn.addEventListener("click",()=>{
                firebase.auth().signOut().then(() => {
                    ui.start('#firebaseui-auth-container', uiConfig);
                  }, function (error) {
                    // An error happened.
                  });
            })
        }
        return{authenticate}
  })()
  
