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
// package org.allbinary.game.score
// import javax.microedition.lcdui.Command
// import org.allbinary.logic.string.StringUtil

@global export class HighScoreCommands extends JObject {

    jclassName(): string {
        return "org.allbinary.game.score.HighScoreCommands";
    }
    @lazy static jv_instance: HighScoreCommands | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): HighScoreCommands | null {
        if (!HighScoreCommands.js_instance) {
            HighScoreCommands.js_instance = true;
            HighScoreCommands.jv_instance = new HighScoreCommands().jinit_HighScoreCommands_0();
        }
        return HighScoreCommands.jv_instance;
    }
    static set instance(value: HighScoreCommands | null) {
        HighScoreCommands.js_instance = true;
        HighScoreCommands.jv_instance = value;
    }
    DISPLAY: Command | null = null;
    PERSONAL: Command | null = null;
    WORLD: Command | null = null;

    jfields_HighScoreCommands(): void {
    this.DISPLAY = new Command().jinit_Command_4("Scores", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
    this.PERSONAL = new Command().jinit_Command_4("Personal", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
    this.WORLD = new Command().jinit_Command_4("World", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
    }

    jinit_HighScoreCommands_0(): HighScoreCommands {
        super.jinit_JObject_0();
        this.jfields_HighScoreCommands();
        return this;
    }
    

    static getInstance(): HighScoreCommands | null {
        return HighScoreCommands.instance;
    }
}

