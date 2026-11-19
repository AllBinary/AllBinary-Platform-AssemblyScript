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

@global export class HighScoreCommandsFactory extends HighScoreCommandsBaseFactory {

    jclassName(): string {
        return "org.allbinary.game.score.HighScoreCommandsFactory";
    }
    @lazy static jv_instance: HighScoreCommandsFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): HighScoreCommandsFactory | null {
        if (!HighScoreCommandsFactory.js_instance) {
            HighScoreCommandsFactory.js_instance = true;
            HighScoreCommandsFactory.jv_instance = new HighScoreCommandsFactory().jinit_HighScoreCommandsFactory_0();
        }
        return HighScoreCommandsFactory.jv_instance;
    }
    static set instance(value: HighScoreCommandsFactory | null) {
        HighScoreCommandsFactory.js_instance = true;
        HighScoreCommandsFactory.jv_instance = value;
    }
    

    static getInstance(): HighScoreCommandsFactory | null {
        return HighScoreCommandsFactory.instance;
    }
    

    jinit_HighScoreCommandsFactory_0(): HighScoreCommandsFactory {
        super.jinit_HighScoreCommandsBaseFactory_1(StaticArray.fromArray<Command | null>([HighScoreCommands.getInstance()!.PERSONAL, HighScoreCommands.getInstance()!.WORLD]));
        return this;
    }
}

