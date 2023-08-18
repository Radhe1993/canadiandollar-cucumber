package com.virgingames.runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/resources/featurefile",
        glue = "com/virgingames",
        plugin = {"pretty", "html:target/cucumber-report/cucumber.html"}


)


public class GamesTestRunner {
}
