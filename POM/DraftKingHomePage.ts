//Generated POM
import { Page, Locator } from '@playwright/test';

export class DraftKingHomePage {
    private page : Page;
    public pageURL = "https://www.draftkings.com/"

    private LoginBtnSelector = 'a-d0b8a907-69';
    readonly LoginBtn: Locator;

    private SignUpBtnSelector = 'a-5b40972-74';
    readonly SignUpBtn: Locator;

    private OddsDropDownSelector = 'a-a0f2198-15';
    readonly OddsDropDown: Locator;

    private PromosDropDownSelector = 'a-ebf2c4b8-42';
    readonly PromosDropDown: Locator;

    private HowToBetDropDownSelector = 'a-f9f9279c-45';
    readonly HowToBetDropDown: Locator;

    constructor(page:Page){
        this.page = page;
        this.LoginBtn = page.getByTestId(this.LoginBtnSelector);
        this.SignUpBtn = page.getByTestId(this.SignUpBtnSelector);
        this.OddsDropDown = page.getByTestId(this.OddsDropDownSelector);
        this.PromosDropDown = page.getByTestId(this.PromosDropDownSelector);
        this.HowToBetDropDown = page.getByTestId(this.HowToBetDropDownSelector);
    }
}