class Login{
    userName ="input[placeholder='Username";
    passWord ="input[placeholder='Password";
    btnSubmit="button[type='submit";
    loggedName="p.oxd-userdropdown-name";

    setUserName(userName){
        cy.get(this.userName).type(userName);
    }

    setPassword(passWord){
        cy.get(this.passWord).type(passWord);
    }

    clickSubmit(){
        cy.get(this.btnSubmit).click();
    }

    verifyLoggedName(){
        return cy.get(this.loggedName)
    }
}

export default Login