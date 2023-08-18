package com.virgingames.pages;

import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class GamesPage extends Utility {

    private static final Logger log = LogManager.getLogger(GamesPage.class.getName());

    public GamesPage() {
        PageFactory.initElements(driver,this);}
    @CacheLookup
    @FindBy(xpath = "//label[@class='dialog_button']")
    String acceptCookie;

    @CacheLookup
    @FindBy(xpath = "/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/ul[1]/li[1]/a[1]/span[1]")
    WebElement clickOnlineSlots;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Play Online Slots at Virgin Games')]")
    WebElement getMessage;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Live Casino')]")
    WebElement clickOnLiveCasino;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Try Live Casino - Live Action Dealers & Selection ')]")
    WebElement getMesage1;

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='app']/div[@id='styledApp']/div[1]/div[1]/ul[1]/li[3]/a[1]/span[1]")
    WebElement clickOnCasino;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Play Online Casino Games, with Many Classics to Ch')]")
    WebElement getMessage2;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Slingo')]")
    WebElement clickOnSlingo;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Enjoy the World of Slingo with Virgin Games')]")
    WebElement getMessage3;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Online Bingo')]")
    WebElement clickOnOnlineBingo;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Experience our Selection of Online Bingo Games')]")
    WebElement getMessage4;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Free Games')]")
    WebElement clickOnFreeGames;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Experience a Selection of Free Games')]")
    WebElement getMessage5;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Poker')]")
    WebElement clickOnPoker;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Play our exciting Online Poker Games')]")
    WebElement getMessage6;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'All Games')]")
    WebElement clickOnAllGames;

    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'Online Slots')]")
    WebElement getMessage7;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Blog')]")
    WebElement clickOnBlog;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Welcome to the Virgin Games Blog')]")
    WebElement getMessage8;

    public void setAcceptCookie()
    {
       acceptAlert(acceptCookie);
    }

    public void clickOnOnlineSlots()
    {
        clickOnElement(clickOnlineSlots);
        log.info("Clicking on menu : " + clickOnlineSlots);

    }
    public String getMessage()
    {
         return getTextFromElement(getMessage);
    }
    public void clickOnLiveCasino()
    {
        clickOnElement(clickOnLiveCasino);
        log.info("Clicking on menu : " + clickOnLiveCasino);
    }
    public String setGetMesage1()
    {
       return getTextFromElement(getMesage1);
    }
    public void clickOnCasino()
    {
        clickOnElement(clickOnCasino);
        log.info("Clicking on menu : " + clickOnCasino);
    }
    public String setGetMessage2()
    {
       return getTextFromElement(getMessage2);
    }
    public void clickOnSlingo()
    {
        getTextFromElement(clickOnSlingo);
        log.info("Clicking on menu : " + clickOnSlingo);
    }
    public String setGetMessage3()
    {
        return  getTextFromElement(getMessage3);
    }
    public void clickOnOnlineBingo()
    {
        clickOnElement(clickOnOnlineBingo);
        log.info("Clicking on menu : " + clickOnOnlineBingo);
    }
    public String setGetMessage4()
    {
        return getTextFromElement(getMessage4);
    }
    public void clickOnFreeGames()
    {
        clickOnElement(clickOnFreeGames);
        log.info("Clicking on menu : " + clickOnFreeGames);
    }
    public String setGetMessage5()
    {
       return getTextFromElement(getMessage5);
    }
    public void clickOnPoker()
    {
        clickOnElement(clickOnPoker);
        log.info("Clicking on menu : " + clickOnPoker);
    }
    public String setGetMessage6()
    {
        return   getTextFromElement(getMessage6);
    }
    public void clickOnAllGames()
    {
        clickOnElement(clickOnAllGames);
        log.info("Clicking on menu : " + clickOnAllGames);
    }
    public String setGetMessage7()
    {
        return getTextFromElement(getMessage7);
    }
    public void clickOnBlog()
    {
        clickOnElement(clickOnBlog);
        log.info("Clicking on menu : " + clickOnBlog);
    }
    public String setGetMessage8()
    {
       return getTextFromElement(getMessage8);
    }


}
