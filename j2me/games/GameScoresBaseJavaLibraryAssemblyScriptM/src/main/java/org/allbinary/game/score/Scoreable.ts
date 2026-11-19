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
// import org.allbinary.logic.math.SmallIntegerSingletonFactory

@global export class Scoreable extends JObject implements ScoreableInterface {

    jclassName(): string {
        return "org.allbinary.game.score.Scoreable";
    }
    @lazy static jv_ID: JInteger | null = null;
    @lazy static js_ID: bool = false;
    static get ID(): JInteger | null {
        if (!Scoreable.js_ID) {
            Scoreable.js_ID = true;
            Scoreable.jv_ID = SmallIntegerSingletonFactory.getInstance()!.getAt(3);
        }
        return Scoreable.jv_ID;
    }
    static set ID(value: JInteger | null) {
        Scoreable.js_ID = true;
        Scoreable.jv_ID = value;
    }
    points: i32 = 0;

    jfields_Scoreable(): void {
    
    }
    

    jinit_Scoreable_1(points: i32): Scoreable {
        super.jinit_JObject_0();
        this.jfields_Scoreable();
        this.points = points;
        return this;
    }
    

    addPoints(points: i32): void {
        this.points += points;
    }
    

    removePoints(points: i32): void {
        this.points -= points;
    }
    

    setPoints(points: i32): void {
        this.points = points;
    }
    

    getPoints(): i32 {
        return this.points;
    }
}

