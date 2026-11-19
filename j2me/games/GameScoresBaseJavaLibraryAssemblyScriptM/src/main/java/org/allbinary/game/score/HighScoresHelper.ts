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

@global export class HighScoresHelper extends HighScoresHelperBase {

    jclassName(): string {
        return "org.allbinary.game.score.HighScoresHelper";
    }
    circularIndexUtil: CircularIndexUtil | null = null;
    lastIndex: i32 = 0;

    jfields_HighScoresHelper(): void {
    this.circularIndexUtil = CircularIndexUtil.createInstanceAt(0, 0);
    this.lastIndex = -1;
    }

    jinit_HighScoresHelper_0(): HighScoresHelper {
        super.jinit_HighScoresHelperBase_0();
        this.jfields_HighScoresHelper();
        return this;
    }
    

    setHighScoresArray(highScoresArrayP: StaticArray<HighScores | null> | null): void {
        super.setHighScoresArray(highScoresArrayP); if (JThrowable.pending !== null) return;
        this.circularIndexUtil!.setSize(this.highScoresArrayP!.length); if (JThrowable.pending !== null) return;
    }
    

    getNextHighScores(): HighScores | null {
        let highScores: HighScores | null = this.highScoresArrayP![this.circularIndexUtil!.getIndex()]; if (JThrowable.pending !== null) return null;
        let index: i32 = 0;
        while ((highScores!.getTotal() < 1 || this.lastIndex == this.circularIndexUtil!.getIndex()) && index < this.highScoresArrayP!.length) {
            this.circularIndexUtil!.next(); if (JThrowable.pending !== null) return null;
            highScores = this.highScoresArrayP![this.circularIndexUtil!.getIndex()]; if (JThrowable.pending !== null) return null;
            index++;
        } if (JThrowable.pending !== null) return null;
        this.lastIndex = this.circularIndexUtil!.getIndex(); if (JThrowable.pending !== null) return null;
        return highScores;
    }
    

    isAnyHighScores(): bool {
        if (this.highScoresArrayP!.length < 1) {
            return false;
        }
        let anyScores: bool = false;
        let highScores: HighScores | null = null;
        for (let index: i32 = this.highScoresArrayP!.length - 1; index >= 0; index--) {
            highScores = this.highScoresArrayP![index];
            if (highScores!.getTotal() > 0) {
                anyScores = true;
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return anyScores;
    }
}

