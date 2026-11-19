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
// import org.allbinary.util.CircularIndexUtil

@global export class HighScoresHelper2 extends HighScoresHelperBase {

    jclassName(): string {
        return "org.allbinary.game.score.HighScoresHelper2";
    }
    circularIndexUtil: CircularIndexUtil | null = null;
    selectedHighScores: HighScores | null = null;

    jfields_HighScoresHelper2(): void {
    this.circularIndexUtil = CircularIndexUtil.createInstanceAt(0, 0);
    this.selectedHighScores = NullHighScoresSingletonFactory.getInstance();
    }

    jinit_HighScoresHelper2_0(): HighScoresHelper2 {
        super.jinit_HighScoresHelperBase_0();
        this.jfields_HighScoresHelper2();
        return this;
    }
    

    setSelectedHighScores(selectedHighScores: HighScores | null): void {
        this.selectedHighScores = selectedHighScores;
    }
    

    getSelectedHighScores(): HighScores | null {
        return this.selectedHighScores;
    }
    

    setHighScoresArray(highScoresArrayP: StaticArray<HighScores | null> | null): void {
        super.setHighScoresArray(highScoresArrayP); if (JThrowable.pending !== null) return;
        this.circularIndexUtil!.setSize(this.highScoresArrayP!.length); if (JThrowable.pending !== null) return;
        this.selectHighScores(); if (JThrowable.pending !== null) return;
    }
    

    selectHighScores(): void {
        if (this.highScoresArrayP!.length == 0) {
            this.setSelectedHighScores(NullHighScoresSingletonFactory.getInstance()); if (JThrowable.pending !== null) return;
            return;
        } if (JThrowable.pending !== null) return;
        this.circularIndexUtil!.next(); if (JThrowable.pending !== null) return;
        let highScores: HighScores | null = this.highScoresArrayP![this.circularIndexUtil!.getIndex()]; if (JThrowable.pending !== null) return;
        let index: i32 = 0;
        while (highScores!.getTotal() < 1 && index < this.highScoresArrayP!.length) {
            highScores = this.highScoresArrayP![this.circularIndexUtil!.next()]; if (JThrowable.pending !== null) return;
            index++;
        } if (JThrowable.pending !== null) return;
        this.setSelectedHighScores(highScores); if (JThrowable.pending !== null) return;
    }
}

