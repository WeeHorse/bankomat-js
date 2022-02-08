Feature: Insert and validate Card

Scenario: Inserting a new card    
    As a user I want to insert my new card so I can create a pin code for it.
    Given I have a new card
    When I insert my card
    Then I am asked to create a pin code

Scenario: Create a pin code
    As a user I want to create a new pin code so I can restrict access to my card.
    Given the card has no pin code
    When I enter my new pin code "1234"    
    Then a message says "Pin created. You can start using your card."
    And the card is ejected

Scenario: Inserting correct card
    As a user I want to insert my card so I can use the Bankomat services.
    Given I have a valid card
    When I insert my card
    Then I am asked to enter my pin

Scenario: Entering a correct pin
    As a user I want to enter my pin code so I can use the Bankomat services.
    Given I have previously created a pin
    When I enter my pin "1234"
    Then I am granted access