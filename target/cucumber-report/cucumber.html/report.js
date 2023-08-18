$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("games.feature");
formatter.feature({
  "line": 1,
  "name": "Games functionality",
  "description": "As User I want to test home page on games website",
  "id": "games-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2901645400,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#"
    },
    {
      "line": 5,
      "value": "#  Scenario Outline: Verify that the top menus are clickable"
    },
    {
      "line": 6,
      "value": "#    Given I am on homepage"
    },
    {
      "line": 7,
      "value": "#    When I Accept the cookie"
    },
    {
      "line": 8,
      "value": "#    And I click on Online Slots \"\u003cmenu\u003e\""
    },
    {
      "line": 9,
      "value": "#    Then I should navigate to Online Slots\"\u003cparticular menu page\u003e\""
    },
    {
      "line": 10,
      "value": "#    And I click on Live Casino menu"
    },
    {
      "line": 11,
      "value": "#    Then I should navigate to Live Casino\"\u003cparticular page\u003e\""
    },
    {
      "line": 12,
      "value": "#    And I click on Casino \"\u003cmenu\u003e\""
    },
    {
      "line": 13,
      "value": "#    Then I should navigate to Casino\"\u003cparticular page\u003e\""
    },
    {
      "line": 14,
      "value": "#    And I click on Slingo \"\u003cmenu\u003e\""
    },
    {
      "line": 15,
      "value": "#    Then I should navigate to Slingo\"\u003cparticular page\u003e\""
    },
    {
      "line": 16,
      "value": "#    And I click on Online Bingo \"\u003cmenu\u003e\""
    },
    {
      "line": 17,
      "value": "#    Then I should navigate to Bingo\"\u003cparticular page\u003e\""
    },
    {
      "line": 18,
      "value": "#    And I click on Free Games \"\u003cmenu\u003e\""
    },
    {
      "line": 19,
      "value": "#    Then I should navigate to Games\"\u003cparticular page\u003e\""
    },
    {
      "line": 20,
      "value": "#    And I click on Poker \"\u003cmenu\u003e\""
    },
    {
      "line": 21,
      "value": "#    Then I should navigate to Poker\"\u003cparticular page\u003e\""
    },
    {
      "line": 22,
      "value": "#    And I click on AllGames \"\u003cmenu\u003e\""
    },
    {
      "line": 23,
      "value": "#    Then I should navigate to Allgames \"\u003cparticular page\u003e\""
    },
    {
      "line": 24,
      "value": "#    And I click on Blog \"\u003cmenu\u003e\""
    },
    {
      "line": 25,
      "value": "#    Then I should navigate to Blog\"\u003cparticular page\u003e\""
    },
    {
      "line": 26,
      "value": "#"
    },
    {
      "line": 27,
      "value": "#    Examples:"
    },
    {
      "line": 28,
      "value": "#"
    },
    {
      "line": 29,
      "value": "#    | menu        | particular menu page|"
    },
    {
      "line": 30,
      "value": "#    |Online Slots |Play Online Slots at Virgin Games|"
    },
    {
      "line": 31,
      "value": "#    |Live Casino  |Try Live Casino - Live Action Dealers \u0026 Selection of Games |"
    },
    {
      "line": 32,
      "value": "#    |Casino       |Play Online Casino Games, with Many Classics to Choose From |"
    },
    {
      "line": 33,
      "value": "#    |Slingo       |Enjoy the World of Slingo with Virgin Games   |"
    },
    {
      "line": 34,
      "value": "#    |Online Bingo |Experience our Selection of Online Bingo Games|"
    },
    {
      "line": 35,
      "value": "#    |Free Games   |Experience a Selection of Free Games |"
    },
    {
      "line": 36,
      "value": "#    |Poker        |Play our exciting Online Poker Games |"
    },
    {
      "line": 37,
      "value": "#    |AllGames     |Online Slots |"
    },
    {
      "line": 38,
      "value": "#    |Blog         |Welcome to the Virgin Games Blog |"
    }
  ],
  "line": 41,
  "name": "Verify that the top menus are clickable",
  "description": "",
  "id": "games-functionality;verify-that-the-top-menus-are-clickable",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I Accept the cookie",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I click on Online Slots menu",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should navigate to Online Slots particular menu page",
  "keyword": "Then "
});
formatter.match({
  "location": "GamesTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 69500400,
  "status": "passed"
});
formatter.match({
  "location": "GamesTest.iAcceptTheCooki()"
});
formatter.result({
  "duration": 15222200,
  "error_message": "org.openqa.selenium.NoAlertPresentException: no such alert\n  (Session info: chrome\u003d115.0.5790.171)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ebd34e50e19d7d2b9c882817566eb4d4, getAlertText {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 115.0.5790.171, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\pradi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59638}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59638/devtoo..., se:cdpVersion: 115.0.5790.171, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: ebd34e50e19d7d2b9c882817566eb4d4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:598)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.alert(RemoteWebDriver.java:1079)\r\n\tat com.virgingames.steps.GamesTest.iAcceptTheCooki(GamesTest.java:21)\r\n\tat ✽.When I Accept the cookie(games.feature:43)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GamesTest2.iClickOnOnlineSlotsMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GamesTest2.iShouldNavigateToOnlineSlotsParticularMenuPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 237244000,
  "error_message": "java.lang.NullPointerException\r\n\tat com.cucumber.listener.Reporter.addScreenCaptureFromPath(Reporter.java:84)\r\n\tat com.virgingames.Hooks.tearDown(Hooks.java:24)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});