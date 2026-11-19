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
// package org.allbinary.game.ag.life

@global export class Life extends JObject implements LifeInterface {

    jclassName(): string {
        return "org.allbinary.game.ag.life.Life";
    }
    @lazy static jv_NO_LIFE: Life | null = null;
    @lazy static js_NO_LIFE: bool = false;
    static get NO_LIFE(): Life | null {
        if (!Life.js_NO_LIFE) {
            Life.js_NO_LIFE = true;
            Life.jv_NO_LIFE = Life.createLife();
        }
        return Life.jv_NO_LIFE;
    }
    static set NO_LIFE(value: Life | null) {
        Life.js_NO_LIFE = true;
        Life.jv_NO_LIFE = value;
    }
    lives: i16 = 0;
    startLives: i16 = 0;
    maxlives: i16 = 0;

    jfields_Life(): void {
    
    
    
    }
    

    static createLife(): Life | null {
        do {
            return new Life().jinit_Life_2((<i16>(0)), (<i16>(0)));
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    jinit_Life_2(lives: i16, maxlives: i16): Life {
        super.jinit_JObject_0();
        this.jfields_Life();
        this.maxlives = maxlives;
        if (lives > this.maxlives) {
            { JThrowable.raise(new JException().jinit_JException_1("To Many Lives")); return this; }
        } if (JThrowable.pending !== null) return this;
        this.lives = lives;
        this.startLives = lives;
        return this;
    }
    

    get(): i16 {
        return this.lives;
    }
    

    set(lives: i16): void {
        this.lives = lives;
    }
    

    reset(): void {
        this.lives = this.startLives;
    }
    

    add(lives: i16): void {
        if (!this.reachedLimit()) {
            if (this.lives + lives <= (<i32>(this.getMaxlives()))) {
                this.lives = (<i16>((this.lives + lives)));
            } else {
                this.lives = this.getMaxlives(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    isAlive(): bool {
        if ((<i32>(this.lives)) <= 0) {
            return false;
        } else {
            return true;
        }
        return false;
    }
    

    getMaxlives(): i16 {
        return this.maxlives;
    }
    

    reachedLimit(): bool {
        if (this.lives > this.maxlives || (<i32>(this.lives)) < 0) {
            return true;
        } else {
            return false;
        }
        return false;
    }
    

    deaths(lives: i16): void {
        if (!this.reachedLimit()) {
            if (this.lives - lives >= 0) {
                this.lives = (<i16>((this.lives - lives)));
            } else {
                this.lives = 0;
            }
        } if (JThrowable.pending !== null) return;
    }
    

    getStartLives(): i16 {
        return this.startLives;
    }
    

    setStartLives(startLives: i16): void {
        this.startLives = startLives;
    }
}

