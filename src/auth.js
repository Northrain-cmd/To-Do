import ProjectsModel from "./ProjectsModel";
import ProjectsView from './ProjectsView';
import toDoView from "./toDoView";
import switchTabs from './switch-projects';
import toDoController from './toDoController';
  export default (function Authentication(){
      const getUserId = function(){
        return userId
      } 
      const authenticate = function(){
            const logoutBtn = document.querySelector("#logoutBtn");
            const authContainer = document.querySelector("#firebaseui-auth-container");
            const userText = document.querySelector(".user");
            const username = document.querySelector("#username");
            var uiConfig = {
                callbacks: {
                    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                      logoutBtn.style.display = "block";
                      authContainer.style.display="none";
                      var user = authResult.user;
                      var isNewUser = authResult.additionalUserInfo.isNewUser;
                      userId = user.uid;
                      if(isNewUser){
                        ProjectsModel.newProject("Important");
                        ProjectsModel.newProject("Movies to watch");
                        ProjectsModel.newTask("I am a sample task (click me to expand)",new Date('2020/10/03'),
                                            "You can click the project title to rename it","High","Important");
                        ProjectsModel.newTask("Buy milk",new Date('2020/05/30'),
                                            "Four bottles","Moderate","Important");
                        ProjectsModel.newTask("Star Wars IX",new Date('2020/06/10'),
                                            "Please don't","Moderate","Movies to watch",false);
                        db.collection("users").doc(user.uid).set(Projects);
                      }
                      

                      else {
                       return
                      }
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
                 // immediateFederatedRedirect: false,
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
            let initApp = function() {
                firebase.auth().onAuthStateChanged(function(user) {
                  if (user) {
                    // User is signed in.
                    var displayName = user.displayName;
                      logoutBtn.style.display = "block";
                      authContainer.style.display="none";
                      userText.style.visibility = "visible";
                      username.textContent = displayName;
                      userId = user.uid;
                      db.collection("users").doc(user.uid).get()
                        .then( doc =>{
                          Projects = doc.data();
                          toDoView.clearList(); 
                          ProjectsView.renderProjects();
                          switchTabs.switchTabs();
                          toDoView.renderUnchecked(Object.keys(Projects)[0]);
                          toDoController.controlFlow();
                          ProjectsView.addProjectHandler();
                          toDoView.addNewItemHandler();
                        }).catch(error=>{
                          console.log(error);
                        })

                  } else {
                    // User is signed out.
                    toDoView.clearList();
                    const sidebar = document.querySelector('.sidebar');
                     sidebar.querySelectorAll('.deleteProjectDiv').forEach(link=>{
                          sidebar.removeChild(link);
                      }) 
                    userText.style.visibility="hidden";
                    userId = false;
                    logoutBtn.style.display="none";
                    authContainer.style.display="block";
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
                    //ui.reset();
                    ui.start('#firebaseui-auth-container', uiConfig);
                  }, function (error) {
                    // An error happened.
                  });
            })
        }
        return{authenticate,getUserId}
  })()
  
