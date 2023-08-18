package com.virgingames.steps;

import com.virgingames.pages.GamesPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class GamesTest2 {
    @And("^I click on Online Slots menu$")
    public void iClickOnOnlineSlotsMenu() {
//     driver.findElement(By.linkText(" Accept"));
//        driver.switchTo().alert().dismiss();
        new GamesPage().setAcceptCookie();
        new GamesPage().clickOnOnlineSlots();
    }

    @Then("^I should navigate to Online Slots particular menu page$")
    public void iShouldNavigateToOnlineSlotsParticularMenuPage(String Slots) {
        Assert.assertEquals(new GamesPage().getMessage(),Slots,"Play Online Slots at Virgin Games");
    }
}
