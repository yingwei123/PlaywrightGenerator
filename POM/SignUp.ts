//Generated POM
import { Page, Locator } from '@playwright/test';

export class SignUp {
    private page : Page;
    public pageURL = "https://www.facebook.com/r.php?locale=en_US&display=page"

    private firstNameInputSelector = 'input-1505-9';
    readonly firstNameInput;

    private lastNameInputSelector = 'input-1505-11';
    readonly lastNameInput;

    private emailInputSelector = 'input-1505-13';
    readonly emailInput;

    private passwordInputSelector = 'input-1505-17';
    readonly passwordInput;

    private monthDOBSelectSelector = 'select-1505-20';
    readonly monthDOBSelect;

    private dayDOBSelectSelector = 'select-1505-33';
    readonly dayDOBSelect;

    private yearDOBSelectSelector = 'select-1505-65';
    readonly yearDOBSelect;

    private femaleInputSelector = 'input-1505-194';
    readonly femaleInput;

    private maleInputSelector = 'input-1505-196';
    readonly maleInput;

    private customInputSelector = 'input-1505-198';
    readonly customInput;

    private signUpBtnSelector = 'button-1505-213';
    readonly signUpBtn;

    private selectPronounInoutSelector = 'select-1505-199';
    readonly selectPronounInout;

    private genderInputSelector = 'input-1505-206';
    readonly genderInput;

    constructor(page:Page){
        this.page = page;
        this.firstNameInput = page.getByTestId(this.firstNameInputSelector);
        this.lastNameInput = page.getByTestId(this.lastNameInputSelector);
        this.emailInput = page.getByTestId(this.emailInputSelector);
        this.passwordInput = page.getByTestId(this.passwordInputSelector);
        this.monthDOBSelect = page.getByTestId(this.monthDOBSelectSelector);
        this.dayDOBSelect = page.getByTestId(this.dayDOBSelectSelector);
        this.yearDOBSelect = page.getByTestId(this.yearDOBSelectSelector);
        this.femaleInput = page.getByTestId(this.femaleInputSelector);
        this.maleInput = page.getByTestId(this.maleInputSelector);
        this.customInput = page.getByTestId(this.customInputSelector);
        this.signUpBtn = page.getByTestId(this.signUpBtnSelector);
        this.selectPronounInout = page.getByTestId(this.selectPronounInoutSelector);
        this.genderInput = page.getByTestId(this.genderInputSelector);
    }
}