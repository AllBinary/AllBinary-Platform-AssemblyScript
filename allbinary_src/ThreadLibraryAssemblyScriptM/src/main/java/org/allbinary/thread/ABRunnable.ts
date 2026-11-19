/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// package org.allbinary.thread

@global export class ABRunnable extends JObject implements RunnableInterface {

    jclassName(): string {
        return "org.allbinary.thread.ABRunnable";
    }
    running: bool = false;

    jfields_ABRunnable(): void {
    this.running = false;
    }

    jinit_ABRunnable_0(): ABRunnable {
        super.jinit_JObject_0();
        this.jfields_ABRunnable();
        return this;
    }
    

    setThread(thread: JThread | null): void {
    }
    

    isRunning(): bool {
        return this.running;
    }
    

    setRunning(running: bool): void {
        this.running = running;
    }
    

    run(): void {
    }
    

    getType(): i32 {
        return -1;
    }
}

