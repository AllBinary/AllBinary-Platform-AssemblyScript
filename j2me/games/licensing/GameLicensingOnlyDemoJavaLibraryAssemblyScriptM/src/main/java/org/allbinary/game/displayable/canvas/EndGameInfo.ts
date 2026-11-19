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
// package org.allbinary.game.displayable.canvas
// import org.allbinary.game.GameInfo
// import org.allbinary.graphics.displayable.MyCanvas
// import org.allbinary.logic.string.StringUtil

@global export class EndGameInfo extends JObject {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.EndGameInfo";
    }
    NORMAL_GAME_OVER_WIN: string | null = null;
    TEASER_DEMO_GAME_END_LAST_LEVEL: string | null = null;
    TEASER_DEMO_GAME_END: string | null = null;
    gameOverStr: string | null = null;
    winStr: string | null = null;

    jfields_EndGameInfo(): void {
    this.NORMAL_GAME_OVER_WIN = "You Won";
    this.TEASER_DEMO_GAME_END_LAST_LEVEL = "End of Demo.";
    this.TEASER_DEMO_GAME_END = "Demo Game Over.";
    this.gameOverStr = StringUtil.getInstance()!.EMPTY_STRING;
    this.winStr = this.gameOverStr;
    }

    jinit_EndGameInfo_0(): EndGameInfo {
        super.jinit_JObject_0();
        this.jfields_EndGameInfo();
        return this;
    }
    

    update(gameInfo: GameInfo | null, myCanvas: MyCanvas | null): void {
        if (gameInfo!.isLastLevel()) {
            this.setWinStr(this.TEASER_DEMO_GAME_END_LAST_LEVEL); if (JThrowable.pending !== null) return;
            this.setGameOverStr(this.TEASER_DEMO_GAME_END_LAST_LEVEL); if (JThrowable.pending !== null) return;
        } else {
            this.setWinStr(this.NORMAL_GAME_OVER_WIN); if (JThrowable.pending !== null) return;
            this.setGameOverStr(this.TEASER_DEMO_GAME_END); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getGameOverStr(): string | null {
        return this.gameOverStr;
    }
    

    setGameOverStr(gameOverStr: string | null): void {
        this.gameOverStr = gameOverStr;
    }
    

    getWinStr(): string | null {
        return this.winStr;
    }
    

    setWinStr(winStr: string | null): void {
        this.winStr = winStr;
    }
}

