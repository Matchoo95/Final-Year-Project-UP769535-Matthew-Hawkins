

-- -----------------------------------------------------
-- Table `jp_flashcards`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jp_flashcards`.`User` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  UNIQUE INDEX `idUser_UNIQUE` (`idUser` ASC),
  PRIMARY KEY (`idUser`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jp_flashcards`.`FlashcardDeck`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jp_flashcards`.`FlashcardDeck` (
  `idFlashcardDeck` INT NOT NULL AUTO_INCREMENT,
  `deckName` VARCHAR(45) NOT NULL,
  `User_idUser` INT NOT NULL,
  PRIMARY KEY (`idFlashcardDeck`, `User_idUser`),
  UNIQUE INDEX `idFlashcardDeck_UNIQUE` (`idFlashcardDeck` ASC),
  UNIQUE INDEX `FlashcardDeckName_UNIQUE` (`deckName` ASC),
  INDEX `fk_FlashcardDeck_User1_idx` (`User_idUser` ASC),
  CONSTRAINT `fk_FlashcardDeck_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `jp_flashcards`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jp_flashcards`.`JapaneseFlashcard`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jp_flashcards`.`JapaneseFlashcard` (
  `idJapaneseFlashcard` INT NOT NULL AUTO_INCREMENT,
  `japaneseText` VARCHAR(500) NULL,
  `readingText` VARCHAR(500) NULL,
  `meaningText` VARCHAR(500) NULL,
  `englishText` VARCHAR(500) NULL,
  `nextReviewDate` DATETIME NULL,
  `FlashcardDeck_idFlashcardDeck` INT NOT NULL,
  `FlashcardDeck_User_idUser` INT NOT NULL,
  PRIMARY KEY (`idJapaneseFlashcard`, `FlashcardDeck_idFlashcardDeck`, `FlashcardDeck_User_idUser`),
  UNIQUE INDEX `idJapaneseFlashcard_UNIQUE` (`idJapaneseFlashcard` ASC),
  INDEX `fk_JapaneseFlashcard_FlashcardDeck1_idx` (`FlashcardDeck_idFlashcardDeck` ASC, `FlashcardDeck_User_idUser` ASC),
  CONSTRAINT `fk_JapaneseFlashcard_FlashcardDeck1`
    FOREIGN KEY (`FlashcardDeck_idFlashcardDeck` , `FlashcardDeck_User_idUser`)
    REFERENCES `jp_flashcards`.`FlashcardDeck` (`idFlashcardDeck` , `User_idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
