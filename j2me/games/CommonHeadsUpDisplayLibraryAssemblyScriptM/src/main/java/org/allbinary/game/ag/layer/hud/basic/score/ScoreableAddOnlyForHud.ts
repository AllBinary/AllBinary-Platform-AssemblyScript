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
// package org.allbinary.game.ag.layer.hud.basic.score
// import org.allbinary.game.score.Scoreable

@global export class ScoreableAddOnlyForHud extends Scoreable {

    jclassName(): string {
        return "org.allbinary.game.ag.layer.hud.basic.score.ScoreableAddOnlyForHud";
    }
    scoreHudWidget: ScoreHudWidget | null = null;

    jfields_ScoreableAddOnlyForHud(): void {
    
    }
    

    jinit_ScoreableAddOnlyForHud_1(scoreVectorGraphic: ScoreHudWidget | null): ScoreableAddOnlyForHud {
        super.jinit_Scoreable_1(0);
        this.jfields_ScoreableAddOnlyForHud();
        this.scoreHudWidget = scoreVectorGraphic;
        this.getScoreHudWidget()!.set(0); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    removePoints(points: i32): void {
    }
    

    addPoints(points: i32): void {
        super.addPoints(points); if (JThrowable.pending !== null) return;
        this.getScoreHudWidget()!.add(points); if (JThrowable.pending !== null) return;
    }
    

    getScoreHudWidget(): ScoreHudWidget | null {
        return this.scoreHudWidget;
    }
}

