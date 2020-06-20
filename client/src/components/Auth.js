const Auth = {
  isAuthenticated: true,
  isAdmin:true,
  authenticate() {
    this.isAuthenticated = true;
    this.isAdmin=true;
  },
  signout() {
    this.isAuthenticated = false;
    this.isAdmin=false;
  },
  getAuth() {
    return this.isAuthenticated;
  },
  getAdmin() {
    return this.isAdmin;
  },
};
export default Auth;
