Feature: Games functionality
  As User I want to test home page on games website

#
#  Scenario Outline: Verify that the top menus are clickable
#    Given I am on homepage
#    When I Accept the cookie
#    And I click on Online Slots "<menu>"
#    Then I should navigate to Online Slots"<particular menu page>"
#    And I click on Live Casino menu
#    Then I should navigate to Live Casino"<particular page>"
#    And I click on Casino "<menu>"
#    Then I should navigate to Casino"<particular page>"
#    And I click on Slingo "<menu>"
#    Then I should navigate to Slingo"<particular page>"
#    And I click on Online Bingo "<menu>"
#    Then I should navigate to Bingo"<particular page>"
#    And I click on Free Games "<menu>"
#    Then I should navigate to Games"<particular page>"
#    And I click on Poker "<menu>"
#    Then I should navigate to Poker"<particular page>"
#    And I click on AllGames "<menu>"
#    Then I should navigate to Allgames "<particular page>"
#    And I click on Blog "<menu>"
#    Then I should navigate to Blog"<particular page>"
#
#    Examples:
#
#    | menu        | particular menu page|
#    |Online Slots |Play Online Slots at Virgin Games|
#    |Live Casino  |Try Live Casino - Live Action Dealers & Selection of Games |
#    |Casino       |Play Online Casino Games, with Many Classics to Choose From |
#    |Slingo       |Enjoy the World of Slingo with Virgin Games   |
#    |Online Bingo |Experience our Selection of Online Bingo Games|
#    |Free Games   |Experience a Selection of Free Games |
#    |Poker        |Play our exciting Online Poker Games |
#    |AllGames     |Online Slots |
#    |Blog         |Welcome to the Virgin Games Blog |


    Scenario: Verify that the top menus are clickable
      Given I am on homepage
      When I Accept the cookie
      And I click on Online Slots menu
      Then I should navigate to Online Slots particular menu page