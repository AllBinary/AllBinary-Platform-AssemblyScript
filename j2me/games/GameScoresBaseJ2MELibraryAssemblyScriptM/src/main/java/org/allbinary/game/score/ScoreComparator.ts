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
// import java.io.ByteArrayInputStream
// import java.io.DataInputStream
// import java.io.EOFException
// import java.io.IOException
// import javax.microedition.rms.RecordComparator
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class ScoreComparator extends JObject implements RecordComparator {

    jclassName(): string {
        return "org.allbinary.game.score.ScoreComparator";
    }
    logUtil: LogUtil | null = null;
    isHighestBest: bool = false;

    jfields_ScoreComparator(): void {
    this.logUtil = LogUtil.getInstance();
    
    }
    

    jinit_ScoreComparator_1(isHighestBest: bool): ScoreComparator {
        super.jinit_JObject_0();
        this.jfields_ScoreComparator();
        this.isHighestBest = isHighestBest;
        return this;
    }
    

    getBestScore(): i64 {
        return (this.isHighestBest ? JLong.MAX_VALUE : 0);
    }
    

    compare(recordOne: StaticArray<i8> | null, recordTwo: StaticArray<i8> | null): i32 {
        let byteArrayInputStreamOne: JByteArrayInputStream | null = new JByteArrayInputStream().jinit_JByteArrayInputStream_1(recordOne); if (JThrowable.pending !== null) return 0;
        let inputStreamOne: JDataInputStream | null = new JDataInputStream().jinit_JDataInputStream_1(byteArrayInputStreamOne); if (JThrowable.pending !== null) return 0;
        let byteArrayInputStreamTwo: JByteArrayInputStream | null = new JByteArrayInputStream().jinit_JByteArrayInputStream_1(recordTwo); if (JThrowable.pending !== null) return 0;
        let inputStreamTwo: JDataInputStream | null = new JDataInputStream().jinit_JDataInputStream_1(byteArrayInputStreamTwo); if (JThrowable.pending !== null) return 0;
        let scoreOne: i64 = (<i64>0);
        let scoreTwo: i64 = (<i64>0);
        do {
            inputStreamOne!.readUTF(); if (JThrowable.pending !== null) break;
            inputStreamTwo!.readUTF(); if (JThrowable.pending !== null) break;
            scoreOne = inputStreamOne!.readLong(); if (JThrowable.pending !== null) break;
            scoreTwo = inputStreamTwo!.readLong(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof JEOFException) {
            let e: JEOFException | null = changetype<JEOFException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return 0;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, "compare", e); if (JThrowable.pending !== null) return 0;
        } else if (JThrowable.pending != null && JThrowable.pending instanceof JIOException) {
            let e: JIOException | null = changetype<JIOException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return 0;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, "compare", e); if (JThrowable.pending !== null) return 0;
        } else if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return 0;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, "compare", e); if (JThrowable.pending !== null) return 0;
        } if (JThrowable.pending !== null) return 0;
        if (this.isHighestBest) {
            return this.getHighTooLow(scoreOne, scoreTwo);
        } else {
            return this.getLowTooHigh(scoreOne, scoreTwo);
        } if (JThrowable.pending !== null) return 0;
        return 0;
    }
    

    getHighTooLow(scoreOne: i64, scoreTwo: i64): i32 {
        if (scoreOne > scoreTwo) {
            return RecordComparator_JStatics.PRECEDES;
        } else if (scoreOne < scoreTwo) {
            return RecordComparator_JStatics.FOLLOWS;
        } else {
            return RecordComparator_JStatics.EQUIVALENT;
        }
        return 0;
    }
    

    getLowTooHigh(scoreOne: i64, scoreTwo: i64): i32 {
        if (scoreOne < scoreTwo) {
            return RecordComparator_JStatics.PRECEDES;
        } else if (scoreOne > scoreTwo) {
            return RecordComparator_JStatics.FOLLOWS;
        } else {
            return RecordComparator_JStatics.EQUIVALENT;
        }
        return 0;
    }
}

