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
// import java.io.ByteArrayOutputStream
// import java.io.DataOutputStream
// import org.allbinary.game.GameInfo
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonSeps

@global export class HighScore extends JObject {

    jclassName(): string {
        return "org.allbinary.game.score.HighScore";
    }
    id: i32 = 0;
    name: string | null = null;
    gameInfo: GameInfo | null = null;
    score: i64 = 0;
    scoreString: string | null = null;

    jfields_HighScore(): void {
    
    
    
    
    
    }
    

    jinit_HighScore_4(id: i32, name: string | null, gameInfo: GameInfo | null, score: i64): HighScore {
        super.jinit_JObject_0();
        this.jfields_HighScore();
        this.id = id;
        this.name = name;
        this.gameInfo = gameInfo;
        this.score = score;
        this.scoreString = JLong.toString1(this.score); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getId(): i32 {
        return this.id;
    }
    

    getName(): string | null {
        return this.name;
    }
    

    getScore(): i64 {
        return this.score;
    }
    

    getAsBytes(): StaticArray<i8> | null {
        let byteArrayOutputStream: JByteArrayOutputStream | null = new JByteArrayOutputStream().jinit_JByteArrayOutputStream_0(); if (JThrowable.pending !== null) return null;
        let outputStream: JDataOutputStream | null = new JDataOutputStream().jinit_JDataOutputStream_1(byteArrayOutputStream); if (JThrowable.pending !== null) return null;
        outputStream!.writeUTF(this.getName()); if (JThrowable.pending !== null) return null;
        outputStream!.writeLong(this.getScore()); if (JThrowable.pending !== null) return null;
        return byteArrayOutputStream!.toByteArray();
    }
    

    getGameInfo(): GameInfo | null {
        return this.gameInfo;
    }
    

    getScoreString(): string | null {
        return this.scoreString;
    }
    

    setName(name: string | null): void {
        this.name = name;
    }
    

    toString(): string | null {
        let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.name)!.append(commonSeps!.COLON)!.appendlong(this.score)!.append(commonSeps!.FORWARD_SLASH)!.append(this.scoreString));
    }
}

