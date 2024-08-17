//Generated POM
import { Page, Locator } from '@playwright/test';

export class SignUp {
    private page : Page;
    public pageURL = "https://www.facebook.com/r.php?locale=en_US&display=page"

    private firstNameInputSelector = 'input-834fc5ee-9';
    readonly firstNameInput;

    private lastNameInputSelector = 'input-834fc5ee-11';
    readonly lastNameInput;

    private emailInputSelector = 'input-834fc5ee-13';
    readonly emailInput;

    private confirmEmailInputSelector = 'input-834fc5ee-15';
    readonly confirmEmailInput;

    private passwordInputSelector = 'input-f08ff26c-17';
    readonly passwordInput;

    private monthDOBSelectSelector = 'select-a6655bd1-20';
    readonly monthDOBSelect;

    private dayDOBSelectSelector = 'select-46582e5d-33';
    readonly dayDOBSelect;

    private yearDOBSelectSelector = 'select-5af6830f-65';
    readonly yearDOBSelect;

    private femaleRadioSelector = 'input-7f8962d3-194';
    readonly femaleRadio;

    private maleRadioSelector = 'input-7f8962d0-196';
    readonly maleRadio;

    private customRadioSelector = 'input-70b5bc9e-198';
    readonly customRadio;

    private pronounSelectSelector = 'select-ff0fe8e1-199';
    readonly pronounSelect;

    private genderInputSelector = 'input-834fc5ee-206';
    readonly genderInput;

    private signUpBtnSelector = 'button-b9d27525-213';
    readonly signUpBtn;

    constructor(page:Page){
        this.page = page;
        this.firstNameInput = page.getByTestId(this.firstNameInputSelector);
        this.lastNameInput = page.getByTestId(this.lastNameInputSelector);
        this.emailInput = page.getByTestId(this.emailInputSelector);
        this.confirmEmailInput = page.getByTestId(this.confirmEmailInputSelector);
        this.passwordInput = page.getByTestId(this.passwordInputSelector);
        this.monthDOBSelect = page.getByTestId(this.monthDOBSelectSelector);
        this.dayDOBSelect = page.getByTestId(this.dayDOBSelectSelector);
        this.yearDOBSelect = page.getByTestId(this.yearDOBSelectSelector);
        this.femaleRadio = page.getByTestId(this.femaleRadioSelector);
        this.maleRadio = page.getByTestId(this.maleRadioSelector);
        this.customRadio = page.getByTestId(this.customRadioSelector);
        this.pronounSelect = page.getByTestId(this.pronounSelectSelector);
        this.genderInput = page.getByTestId(this.genderInputSelector);
        this.signUpBtn = page.getByTestId(this.signUpBtnSelector);
    }
}