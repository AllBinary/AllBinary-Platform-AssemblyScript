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
// package org.allbinary.animation.transition

@global export class RunAtEndAnimationListener extends JObject implements AnimationListenerInterface {

    jclassName(): string {
        return "org.allbinary.animation.transition.RunAtEndAnimationListener";
    }
    runnable: JRunnable | null = null;

    jfields_RunAtEndAnimationListener(): void {
    
    }
    

    jinit_RunAtEndAnimationListener_1(runnable: JRunnable | null): RunAtEndAnimationListener {
        super.jinit_JObject_0();
        this.jfields_RunAtEndAnimationListener();
        this.runnable = runnable;
        return this;
    }
    

    onPlatformAnimationStart(): void {
    }
    

    onPlatformAnimationEnd(): void {
    }
    

    onPlatformAnimationRepeat(): void {
    }
}

