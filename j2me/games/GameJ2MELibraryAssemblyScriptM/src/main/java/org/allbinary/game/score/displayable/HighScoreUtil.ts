/*
 *
 * AllBinary Open License Version 1
 * Copyright (c) 2011 AllBinary
 * 
 * By agreeing to this license you and any business entity you represent are
 * legally bound to the AllBinary Open License Version 1 legal agreement.
 * 
 * You may obtain the AllBinary Open License Version 1 legal agreement from
 * AllBinary or the root directory of AllBinary's AllBinary Platform repository.
 * 
 * Created By: Travis Berthelot
 *  
 */
// Generated Code Do Not Modify
// package org.allbinary.game.score.displayable
// import javax.microedition.lcdui.Command
// import javax.microedition.lcdui.CommandListener
// import org.allbinary.game.GameInfo
// import org.allbinary.game.score.HighScore
// import org.allbinary.game.score.HighScoreNamePersistanceSingleton
// import org.allbinary.game.score.HighScores
// import org.allbinary.game.score.HighScoresFactoryInterface
// import org.allbinary.game.score.HighScoresHelperBaseInterface
// import org.allbinary.game.score.HighScoresResultsListener
// import org.allbinary.graphics.displayable.MyCanvas
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.string.CommonStrings

@global export class HighScoreUtil extends JObject implements HighScoresResultsListener {

    jclassName(): string {
        return "org.allbinary.game.score.displayable.HighScoreUtil";
    }
    @lazy static jv_SUBMIT_TEXTBOX_COMMAND: Command | null = null;
    @lazy static js_SUBMIT_TEXTBOX_COMMAND: bool = false;
    static get SUBMIT_TEXTBOX_COMMAND(): Command | null {
        if (!HighScoreUtil.js_SUBMIT_TEXTBOX_COMMAND) {
            HighScoreUtil.js_SUBMIT_TEXTBOX_COMMAND = true;
            HighScoreUtil.jv_SUBMIT_TEXTBOX_COMMAND = new Command().jinit_Command_4("Submit", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
        }
        return HighScoreUtil.jv_SUBMIT_TEXTBOX_COMMAND;
    }
    static set SUBMIT_TEXTBOX_COMMAND(value: Command | null) {
        HighScoreUtil.js_SUBMIT_TEXTBOX_COMMAND = true;
        HighScoreUtil.jv_SUBMIT_TEXTBOX_COMMAND = value;
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    highScoresFactoryInterface: HighScoresFactoryInterface | null = null;
    highScoresArray: StaticArray<HighScores | null> | null = null;
    highScore: HighScore | null = null;
    abeClientInformation: AbeClientInformationInterface | null = null;
    gameInfo: GameInfo | null = null;
    highScoresHelper: HighScoresHelperBaseInterface | null = null;
    firstTime: bool = false;

    jfields_HighScoreUtil(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    
    
    
    
    
    
    this.firstTime = true;
    }
    

    jinit_HighScoreUtil_7(highScoresFactoryInterface: HighScoresFactoryInterface | null, highScoresHelper: HighScoresHelperBaseInterface | null, abeClientInformation: AbeClientInformationInterface | null, gameInfo: GameInfo | null, cmdListener: CommandListener | null, name: string | null, highScore: HighScore | null): HighScoreUtil {
        super.jinit_JObject_0();
        this.jfields_HighScoreUtil();
        this.highScoresFactoryInterface = highScoresFactoryInterface;
        this.highScoresHelper = highScoresHelper;
        this.highScoresArray = this.highScoresHelper!.getHighScoresArray(); if (JThrowable.pending !== null) return this;
        this.highScore = highScore;
        this.abeClientInformation = abeClientInformation;
        this.gameInfo = gameInfo;
        return this;
    }
    

    setHighScoresArray(highScoresArray: StaticArray<HighScores | null> | null): void {
        this.highScoresArray = highScoresArray;
        this.firstTime = false;
        this.saveHighScore(); if (JThrowable.pending !== null) return;
    }
    

    update(name: string | null): void {
        HighScoreNamePersistanceSingleton.getInstance()!.save(this.abeClientInformation, this.gameInfo, name); if (JThrowable.pending !== null) return;
        this.highScore!.setName(name); if (JThrowable.pending !== null) return;
    }
    

    saveHighScore(): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.commonStrings!.START)!.append(StringUtil.getInstance()!.toString1(this.highScore))), this, "saveHighScore"); if (JThrowable.pending !== null) return;
        let size: i32 = this.highScoresArray!.length;
        if (this.firstTime && size == 0) {
            this.logUtil!.putF("Games canvas did not give us any HighScores", this, "saveHighScore"); if (JThrowable.pending !== null) return;
            this.highScoresFactoryInterface!.fetchHighScores(this.gameInfo, this); if (JThrowable.pending !== null) return;
            return;
        } if (JThrowable.pending !== null) return;
        let highScores: HighScores | null = null;
        let highScoresAsString: string | null = null;
        for (let index: i32 = 0; index < size; index++) {
            highScores = this.highScoresArray![index];
            highScores!.addHighScore(this.highScore); if (JThrowable.pending !== null) return;
            highScoresAsString = JObject.jtoString(highScores); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Added/Adding Score: ")!.append(highScoresAsString)), this, "saveHighScore"); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.highScoresHelper!.setHighScoresArray(this.highScoresArray); if (JThrowable.pending !== null) return;
    }
    

    submit(myCanvas: MyCanvas | null): void {
        let commandListener: CommandListener | null = myCanvas!.getCustomCommandListener(); if (JThrowable.pending !== null) return;
        commandListener!.commandAction(HighScoreUtil.SUBMIT_TEXTBOX_COMMAND, myCanvas); if (JThrowable.pending !== null) return;
    }
}

