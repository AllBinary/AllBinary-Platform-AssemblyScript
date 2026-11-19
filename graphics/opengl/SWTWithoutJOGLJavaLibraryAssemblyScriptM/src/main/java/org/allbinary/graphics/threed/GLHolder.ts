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
// package org.allbinary.graphics.threed

@global export class GLHolder extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.threed.GLHolder";
    }
    isCreated: bool = false;

    jfields_GLHolder(): void {
    this.isCreated = true;
    }
    

    jinit_GLHolder_0(): GLHolder {
        super.jinit_JObject_0();
        this.jfields_GLHolder();
        return this;
    }
    

    runOnSurfaceCreated(renderer: Object | null): void {
    }
    

    runOnSurfaceChanged(renderer: Object | null, width: i32, height: i32): void {
    }
    

    run(renderer: Object | null): void {
    }
}

