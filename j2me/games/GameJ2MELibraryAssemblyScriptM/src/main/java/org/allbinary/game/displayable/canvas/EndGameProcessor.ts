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
// import org.allbinary.canvas.Processor
// import org.allbinary.game.score.HighScores
// import org.allbinary.game.score.HighScoresHelperBase
// import org.allbinary.game.score.NullHighScoresSingletonFactory
// import org.allbinary.game.state.GameStateFactory
// import org.allbinary.graphics.paint.NullPaintable

@global export class EndGameProcessor extends Processor {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.EndGameProcessor";
    }
    gameStateFactory: GameStateFactory | null = null;
    gameCanvas: AllBinaryGameCanvas | null = null;
    WAIT: i64 = 0;

    jfields_EndGameProcessor(): void {
    this.gameStateFactory = GameStateFactory.getInstance();
    
    this.WAIT = (<i64>5000);
    }
    

    jinit_EndGameProcessor_1(gameCanvas: AllBinaryGameCanvas | null): EndGameProcessor {
        super.jinit_Processor_0();
        this.jfields_EndGameProcessor();
        this.gameCanvas = gameCanvas;
        return this;
    }
    

    process(): void {
        if (this.gameCanvas!.isHighScoreSubmitted()) {
            if (this.gameCanvas!.getGameStateTimeHelper()!.isElapsedTNT(this.WAIT)) {
                if (this.gameCanvas!.getGameState() == this.gameStateFactory!.SHOW_END_RESULT_GAME_STATE) {
                    let highScoresBase: HighScoresHelperBase | null = changetype<HighScoresHelperBase | null>(this.gameCanvas!.highScoresHelper);
                    let highScores: HighScores | null = highScoresBase!.getSelectedHighScores(); if (JThrowable.pending !== null) return;
                    if (highScores != NullHighScoresSingletonFactory.getInstance()) {
                        highScoresBase!.selectHighScores(); if (JThrowable.pending !== null) return;
                        this.gameCanvas!.getRealHighScoresPaintable()!.setHighScores(highScores); if (JThrowable.pending !== null) return;
                        this.gameCanvas!.setGameState(this.gameStateFactory!.SHOW_HIGH_SCORE_GAME_STATE); if (JThrowable.pending !== null) return;
                        this.gameCanvas!.setHighScoresPaintable(this.gameCanvas!.getRealHighScoresPaintable()); if (JThrowable.pending !== null) return;
                    } if (JThrowable.pending !== null) return;
                } else if (this.gameCanvas!.getGameState() == this.gameStateFactory!.SHOW_HIGH_SCORE_GAME_STATE) {
                    this.gameCanvas!.setGameState(this.gameStateFactory!.SHOW_END_RESULT_GAME_STATE); if (JThrowable.pending !== null) return;
                    this.gameCanvas!.setHighScoresPaintable(NullPaintable.getInstance()); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

