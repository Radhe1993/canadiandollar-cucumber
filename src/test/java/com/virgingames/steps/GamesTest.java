package com.virgingames.steps;

import com.virgingames.pages.GamesPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

import static com.virgingames.browserfactory.ManageBrowser.driver;

public class GamesTest {

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }


    @When("^I Accept the cookie$")
    public void iAcceptTheCooki() {
        driver.switchTo().alert().accept();

    }

    @And("^I click on Online Slots \"([^\"]*)\"$")
    public void iClickOnOnlineSlots()  {
        new GamesPage().clickOnOnlineSlots();

    }

    @Then("^I should navigate to Online Slots\"([^\"]*)\"$")
    public void iShouldNavigateToOnlineSlots(String Slots)  {

        Assert.assertEquals(new GamesPage().getMessage(),Slots,"Play Online Slots at Virgin Games");

    }

    @And("^I click on Live Casino menu$")
    public void iClickOnLiveCasinoMenu() {
        new GamesPage(). clickOnLiveCasino();
    }

    @Then("^I should navigate to Live Casino\"([^\"]*)\"$")
    public void iShouldNavigateToLiveCasino(String Casino)  {
        Assert.assertEquals(new GamesPage().setGetMesage1(),Casino,"Try Live Casino - Live Action Dealers & Selection of Games");

    }

    @And("^I click on Casino \"([^\"]*)\"$")
    public void iClickOnCasino()  {
        new GamesPage().clickOnCasino();

    }

    @Then("^I should navigate to Casino\"([^\"]*)\"$")
    public void iShouldNavigateToCasino(String Casino)  {
        Assert.assertEquals(new GamesPage().setGetMessage2(),Casino,"Play Online Casino Games, with Many Classics to Choose From");

    }

    @And("^I click on Slingo \"([^\"]*)\"$")
    public void iClickOnSlingo()  {
        new GamesPage().clickOnSlingo();

    }

    @Then("^I should navigate to Slingo\"([^\"]*)\"$")
    public void iShouldNavigateToSlingo(String Slingo)  {
        Assert.assertEquals(new GamesPage().setGetMessage3(),Slingo,"Enjoy the World of Slingo with Virgin Games");

    }

    @And("^I click on Online Bingo \"([^\"]*)\"$")
    public void iClickOnOnlineBingo()  {
        new GamesPage().clickOnOnlineBingo();

    }

    @Then("^I should navigate to Bingo\"([^\"]*)\"$")
    public void iShouldNavigateToBingo(String Bingo)  {
        Assert.assertEquals(new GamesPage().setGetMessage4(),Bingo,"Experience our Selection of Online Bingo Games");

    }

    @And("^I click on Free Games \"([^\"]*)\"$")
    public void iClickOnFreeGames()  {
        new GamesPage().clickOnFreeGames();

    }

    @Then("^I should navigate to Games\"([^\"]*)\"$")
    public void iShouldNavigateToGames(String Games)  {
        Assert.assertEquals(new GamesPage().setGetMessage5(),Games,"Experience a Selection of Free Games");

    }

    @And("^I click on Poker \"([^\"]*)\"$")
    public void iClickOnPoker()  {
        new GamesPage().clickOnPoker();

    }

    @Then("^I should navigate to Poker\"([^\"]*)\"$")
    public void iShouldNavigateToPoker(String Poker)  {

        Assert.assertEquals(new GamesPage().setGetMessage6(),Poker,"Play our exciting Online Poker Games");

    }

    @And("^I click on AllGames \"([^\"]*)\"$")
    public void iClickOnAllGames()  {
        new GamesPage().clickOnAllGames();

    }

    @Then("^I should navigate to Allgames \"([^\"]*)\"$")
    public void iShouldNavigateToAllgames(String Allgames)  {
        Assert.assertEquals(new GamesPage().setGetMessage7(),Allgames,"Online Slots");

    }

    @And("^I click on Blog \"([^\"]*)\"$")
    public void iClickOnBlog()  {
        new GamesPage(). clickOnBlog();

    }

    @Then("^I should navigate to Blog\"([^\"]*)\"$")
    public void iShouldNavigateToBlog(String Blog)  {
        Assert.assertEquals(new GamesPage().setGetMessage8(),Blog,"Welcome to the Virgin Games Blog");

    }


}
