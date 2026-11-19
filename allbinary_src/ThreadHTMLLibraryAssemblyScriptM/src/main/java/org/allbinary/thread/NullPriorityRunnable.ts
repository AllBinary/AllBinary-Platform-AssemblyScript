/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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

@global export class NullPriorityRunnable extends JObject implements PriorityRunnable {

    jclassName(): string {
        return "org.allbinary.thread.NullPriorityRunnable";
    }

    jinit_NullPriorityRunnable_0(): NullPriorityRunnable {
        super.jinit_JObject_0();
        return this;
    }
    

    getPriority(): i32 {
        return 0;
    }
    

    isDone(): bool {
        return true;
    }
    

    reset(): void {
    }
    

    run(): void {
    }
}

