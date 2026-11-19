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
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonSeps
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class HighScores extends JObject implements HighScoresInterface {

    jclassName(): string {
        return "org.allbinary.game.score.HighScores";
    }
    orderedHighScoresList: BasicArrayList | null = null;
    name: string | null = null;
    heading: string | null = null;
    columnOneHeading: string | null = null;
    columnTwoHeading: string | null = null;

    jfields_HighScores(): void {
    this.orderedHighScoresList = new BasicArrayListD().jinit_BasicArrayListD_0();
    
    
    this.columnOneHeading = "Name";
    
    }
    

    jinit_HighScores_3(name: string | null, heading: string | null, columnTwoHeading: string | null): HighScores {
        super.jinit_JObject_0();
        this.jfields_HighScores();
        this.name = name;
        this.heading = heading;
        this.columnTwoHeading = columnTwoHeading;
        return this;
    }
    

    setList(orderedHighScoresList: BasicArrayList | null): void {
        this.orderedHighScoresList = orderedHighScoresList;
    }
    

    getList(): BasicArrayList | null {
        return this.orderedHighScoresList;
    }
    

    getName(): string | null {
        return this.name;
    }
    

    getTotal(): i32 {
        return this.getList()!.size();
    }
    

    addHighScore(newHighScore: HighScore | null): void {
        this.orderedHighScoresList!.add(newHighScore); if (JThrowable.pending !== null) return;
    }
    

    getHeading(): string | null {
        return this.heading;
    }
    

    getColumnOneHeading(): string | null {
        return this.columnOneHeading;
    }
    

    getColumnTwoHeading(): string | null {
        return this.columnTwoHeading;
    }
    

    isBestScore(newHighScore: HighScore | null): bool {
        return false;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("HighScores: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.heading); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(CommonLabels.getInstance()!.TOTAL_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.orderedHighScoresList!.size()); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

