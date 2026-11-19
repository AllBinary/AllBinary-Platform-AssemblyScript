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
// import org.allbinary.J2MEUtil
// import org.allbinary.logic.communication.log.LogUtil

@global export class HighScoreCommandsBaseFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.score.HighScoreCommandsBaseFactory";
    }
    logUtil: LogUtil | null = null;
    HIGH_SCORE_COMMANDS: StaticArray<Command | null> | null = null;

    jfields_HighScoreCommandsBaseFactory(): void {
    this.logUtil = LogUtil.getInstance();
    
    }
    

    jinit_HighScoreCommandsBaseFactory_1(HIGH_SCORE_COMMANDS: StaticArray<Command | null> | null): HighScoreCommandsBaseFactory {
        super.jinit_JObject_0();
        this.jfields_HighScoreCommandsBaseFactory();
        this.HIGH_SCORE_COMMANDS = HIGH_SCORE_COMMANDS;
        return this;
    }
    

    isHighScoreCommand(command: Command | null): bool {
        for (let index: i32 = this.HIGH_SCORE_COMMANDS!.length - 1; index >= 0; index--) {
            if (command == this.HIGH_SCORE_COMMANDS![index]) {
                return true;
            }
        }
        return false;
    }
    

    getIndex(command: Command | null): i32 {
        for (let index: i32 = this.HIGH_SCORE_COMMANDS!.length - 1; index >= 0; index--) {
            if (command == this.HIGH_SCORE_COMMANDS![index]) {
                return index;
            }
        }
        { JThrowable.raise(new JException().jinit_JException_1("No Such Command")); return 0; }
        return 0;
    }
}

