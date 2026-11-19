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
// package org.allbinary.game.input
// import javax.microedition.lcdui.Graphics

@global export class TestInputExample extends JObject implements TestInputInterface {

    jclassName(): string {
        return "org.allbinary.game.input.TestInputExample";
    }
    testValue: i32 = 0;

    jfields_TestInputExample(): void {
    this.testValue = 0;
    }

    jinit_TestInputExample_0(): TestInputExample {
        super.jinit_JObject_0();
        this.jfields_TestInputExample();
        return this;
    }
    

    up(): void {
    }
    

    down(): void {
    }
    

    left(): void {
        this.testValue++;
    }
    

    right(): void {
        this.testValue--;
    }
    

    strafeLeft(): void {
    }
    

    strafeRight(): void {
    }
    

    paint(graphics: Graphics | null): void {
    }
    

    paintThreed(graphics: Graphics | null): void {
    }
}

